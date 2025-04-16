import { z } from 'zod'

import { DATE_FORMAT } from 'shared/time'

export const event = z.object({
  date: z.string().describe(`Date in format ${DATE_FORMAT}`),
  time: z.string().nullable().describe('Time in format HH:MM or null'),
  text: z.string(),
  emoji: z.string(),
})

export const gptResponse = z
  .object({
    action: z.enum(['createEvent', 'deleteEvent', 'info', 'error']),
    userMessage: z.string(),
    event: event.optional(),
    eventId: z.number().optional(),
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
