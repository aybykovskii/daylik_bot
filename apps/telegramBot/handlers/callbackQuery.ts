import { Middleware } from 'grammy'
import { confirmCreationCD, confirmDeletionCD, rejectCreationCD, rejectDeletionCD } from 'helpers'

import { botLogger } from 'shared'

import { BotContext } from '@/types'

export const callbackQueryHandler: Middleware<BotContext> = async (ctx) => {
  const cbq = ctx.callbackQuery
  const api = ctx.apiV1

  if (!cbq || !('data' in cbq)) return

  const { data = '' } = cbq

  ctx.api.deleteMessage(ctx.chat?.id!, cbq.message?.message_id!)

  switch (true) {
    case confirmCreationCD.match(data): {
      const { eventId } = confirmCreationCD.get<{ eventId: string }>(data)

      try {
        const draft = await api.eventDrafts.getById(eventId)

        const { id, ...eventDraft } = draft

        await api.events.post(eventDraft)
        await api.eventDrafts.deleteById(id.toString())

        ctx.sendTMessage('bot.event.creation.confirmed')
      } catch (error) {
        botLogger.error('Failed to create event', { error })
        ctx.sendTMessage('bot.event.notFound')
      }

      break
    }

    case rejectCreationCD.match(data): {
      const { eventId } = rejectCreationCD.get<{ eventId: string }>(data)

      await api.eventDrafts.deleteById(eventId)

      ctx.sendTMessage('bot.event.creation.cancelled')
      break
    }

    case confirmDeletionCD.match(data): {
      const { eventId } = confirmDeletionCD.get<{ eventId: string }>(data)

      await api.eventDrafts.deleteById(eventId)

      ctx.sendTMessage('bot.event.deletion.confirmed')
      break
    }

    case rejectDeletionCD.match(data): {
      ctx.sendTMessage('bot.event.deletion.cancelled')
      break
    }
  }
}
