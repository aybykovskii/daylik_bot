import { z } from 'zod'

import { event, intId } from 'shared/types'

export const gptResponse = z
	.object({
		action: z.enum(['createEvent', 'deleteEvent', 'info', 'error']),
		userMessage: z.string(),
		event: event.omit({ userId: true, copyFromId: true }).optional(),
		eventId: intId.optional(),
	})
	.refine(
		(data) => {
			// Ensure 'event' is present when action is 'createEvent'
			if (data.action === 'createEvent') {
				return data.event !== undefined
			}
			// Ensure 'eventId' is present when action is 'deleteEvent'
			if (data.action === 'deleteEvent') {
				return data.eventId !== undefined
			}
			return true
		},
		{
			message: 'Invalid data for the specified action',
		}
	)

export type GPTResponse = z.infer<typeof gptResponse>
