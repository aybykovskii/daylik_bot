import { Filter, Middleware } from 'grammy'
import { confirmCreationCD, confirmDeletionCD, refundCreationCD, rejectCreationCD, rejectDeletionCD } from 'helpers'

import { botLogger } from 'shared'

import { BotContext } from '@/types'

import { Payments } from './payment'

export const callbackQueryHandler: Middleware<Filter<BotContext, 'callback_query:data'>> = async (ctx) => {
  const { data, message } = ctx.callbackQuery
  const api = ctx.apiV1

  ctx.api.deleteMessage(ctx.chat?.id!, message?.message_id!)

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

    case refundCreationCD.match(data): {
      const { paymentId } = refundCreationCD.get<{ paymentId: string }>(data)

      await Payments.refundPayment(ctx, paymentId)
      break
    }
  }
}
