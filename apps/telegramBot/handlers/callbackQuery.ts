import { Middleware } from 'telegraf'

import { intId } from 'shared/types'

import { confirmCreationCD, confirmDeletionCD, rejectCreationCD, rejectDeletionCD } from 'helpers'
import { botLogger } from 'shared'
import { TelegrafContext } from 'types'

export const callbackQueryHandler: Middleware<TelegrafContext> = async (ctx) => {
	const cbq = ctx.callbackQuery
	const api = ctx.api

	if (!cbq || !('data' in cbq)) return

	const { data } = cbq

	ctx.telegram.deleteMessage(ctx.chat?.id!, cbq.message?.message_id!)

	switch (true) {
		case confirmCreationCD.match(data): {
			const { eventId } = confirmCreationCD.get<{ eventId: string }>(data)

			try {
				const draft = await api.eventDrafts.get(intId.parse(eventId))

				const { id, ...eventDraft } = draft

				await api.events.create(eventDraft)
				await api.eventDrafts.delete(id)

				ctx.sendTMessage('bot.event.creation.confirmed')
			} catch (error) {
				botLogger.error('Failed to create event', { error })
				ctx.sendTMessage('bot.event.notFound')
			}

			break
		}

		case rejectCreationCD.match(data): {
			const { eventId } = rejectCreationCD.get<{ eventId: string }>(data)

			await api.eventDrafts.delete(+eventId)

			ctx.sendTMessage('bot.event.creation.cancelled')
			break
		}

		case confirmDeletionCD.match(data): {
			const { eventId } = confirmDeletionCD.get<{ eventId: string }>(data)

			await api.eventDrafts.delete(+eventId)

			ctx.sendTMessage('bot.event.deletion.confirmed')
			break
		}

		case rejectDeletionCD.match(data): {
			ctx.sendTMessage('bot.event.deletion.cancelled')
			break
		}
	}
}
