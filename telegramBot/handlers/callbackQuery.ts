import { Middleware } from 'telegraf'

import { modelId } from '~types'

import { confirmCreationCD, confirmDeletionCD, rejectCreationCD, rejectDeletionCD } from 'helpers'
import { TelegrafContext } from 'types'

export const callbackQueryHandler: Middleware<TelegrafContext> = async (ctx) => {
	const cbq = ctx.callbackQuery

	if (!cbq || !('data' in cbq)) return

	const { data } = cbq

	ctx.telegram.deleteMessage(ctx.chat?.id!, cbq.message?.message_id!)

	switch (true) {
		case confirmCreationCD.match(data): {
			const { eventId } = confirmCreationCD.get<{ eventId: string }>(data)

			const draft = await ctx.api.eventDrafts.get(modelId.parse(eventId))

			if (!draft) {
				ctx.sendTMessage('bot.event.notFound')
				return
			}

			const { id, createdAt, updatedAt, ...eventDraft } = draft

			await ctx.api.events.create(eventDraft)
			await ctx.api.eventDrafts.delete(id)

			ctx.sendTMessage('bot.event.creation.confirmed')
			break
		}

		case rejectCreationCD.match(data): {
			const { eventId } = rejectCreationCD.get<{ eventId: string }>(data)

			await ctx.api.eventDrafts.delete(modelId.parse(eventId))

			ctx.sendTMessage('bot.event.creation.cancelled')
			break
		}

		case confirmDeletionCD.match(data): {
			const { eventId } = confirmDeletionCD.get<{ eventId: string }>(data)

			await ctx.api.events.delete(modelId.parse(eventId))

			ctx.sendTMessage('bot.event.deletion.confirmed')
			break
		}

		case rejectDeletionCD.match(data): {
			ctx.sendTMessage('bot.event.deletion.cancelled')
			break
		}
	}
}
