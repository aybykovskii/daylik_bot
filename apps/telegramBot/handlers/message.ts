import dayjs from 'dayjs'
import { InlineKeyboard, Middleware } from 'grammy'

import { botLogger } from 'shared/logger'
import { DATE_FORMAT } from 'shared/time'

import { confirmCreationCD, confirmDeletionCD, rejectCreationCD, rejectDeletionCD } from '@/helpers'
import { BotContext } from '@/types'
import { GPTResponse } from '@/types/gpt'

import { MAIN_PROMPT } from '../prompts.json'

const getConfirmCreationKeyboard = (eventId: number) =>
  new InlineKeyboard().text('Да', confirmCreationCD.fill({ eventId })).text('Нет', rejectCreationCD.fill({ eventId }))

const getConfirmDeletionKeyboard = (eventId: number) =>
  new InlineKeyboard().text('Да', confirmDeletionCD.fill({ eventId })).text('Нет', rejectDeletionCD.fill({ eventId }))

export const messageHandler: Middleware<BotContext> = async (ctx) => {
  const {
    message: msg,
    user: { telegramUserId },
  } = ctx

  const gptMessageHandler = async ({
    response,
    userId,
    messageId,
  }: {
    response: GPTResponse
    userId: number
    messageId: number
  }) => {
    const { userMessage } = response

    if (userMessage.length) {
      ctx.api.editMessageText(telegramUserId, messageId, userMessage)

      switch (response.action) {
        case 'createEvent': {
          const event = response.event

          if (!event) {
            ctx.api.editMessageText(telegramUserId, messageId, 'Произошла ошибка при обработке запроса')
            botLogger.error('Failed to create event', { response })
            break
          }

          const eventDraft = await ctx.apiV1.eventDrafts.post({ userId, ...event, time: event.time || null })

          await ctx.api.editMessageReplyMarkup(telegramUserId, messageId, {
            reply_markup: getConfirmCreationKeyboard(eventDraft.id),
          })

          break
        }

        case 'deleteEvent': {
          await ctx.api.editMessageReplyMarkup(telegramUserId, messageId, {
            reply_markup: getConfirmDeletionKeyboard(response.eventId!),
          })

          break
        }

        case 'info':
        case 'error':
          break

        default:
          response.action satisfies never
          break
      }
    }
  }

  const sendGPTMessage = async (text: string) => {
    const message = await ctx.replyT('bot.generation_pending')
    const filteredEvents = ctx.user.events.filter(
      (event) => dayjs(event.date).isSame(dayjs(), 'day') || dayjs(event.date).isAfter(dayjs(), 'day')
    )

    const answer = await ctx.gpt.sendMessage([
      {
        role: 'system',
        content: MAIN_PROMPT.replaceAll('{TODAY}', dayjs().format(DATE_FORMAT))
          .replaceAll('{DATE_FORMAT}', DATE_FORMAT)
          .replaceAll('{EVENTS}', JSON.stringify(filteredEvents)),
      },
      { role: 'user', content: text },
    ])

    gptMessageHandler({
      response: answer,
      userId: ctx.user.id,
      messageId: message.message_id,
    })
  }

  if (msg && 'voice' in msg) {
    const fileLink = (await ctx.getFile()).getUrl()
    const file = await fetch(fileLink)

    const transcription = await ctx.gpt.getVoiceTranscription(file)

    await sendGPTMessage(transcription)
  } else if (msg && 'text' in msg) {
    await sendGPTMessage(msg.text!)
  }
}
