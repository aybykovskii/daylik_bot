import dayjs from 'dayjs'
import OpenAI from 'openai'
import { z } from 'zod'

import { DATE_FORMAT, getUserDate } from 'shared/time'

import { BotContext } from '@/types'

import PROMPT from '../../prompt.md' with { type: 'text' }

import { parseResponse } from './types'

export class GPT extends OpenAI {
  constructor(apiKey: string) {
    super({ apiKey })
  }

  responseSchema = z
    .object({
      action: z.enum(['info', 'createEvent', 'deleteEvent', 'error']),
      userMessage: z.string(),
      event: z
        .object({
          date: z.string().describe(`Date in format ${DATE_FORMAT}`),
          time: z.string().nullable().describe('Time in format HH:MM or null'),
          text: z.string(),
          emoji: z.string(),
        })
        .nullable()
        .optional(),
      eventId: z.number().nullable().optional(),
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

  makeInstruction = (ctx: BotContext) => {
    const events = ctx.user.events.filter((event) => dayjs(event.datetime).isAfter(dayjs().startOf('day')))

    return PROMPT
      .replace('{TODAY}', dayjs().format(DATE_FORMAT))
      .replace('{TIME}', getUserDate(ctx.user.settings.UTCTimeDiff).format('HH:00'))
      .replaceAll('{DATE_FORMAT}', DATE_FORMAT)
      .replace('{EVENTS}', events.length ? JSON.stringify(events) : 'Нет событий')
  }

  sendMessage = async (ctx: BotContext, input: string): Promise<z.infer<typeof this.responseSchema>> => {
    const response = await this.beta.chat.completions.parse({
      model: 'gpt-4.1-nano',
      messages: [
        { role: 'system', content: this.makeInstruction(ctx) },
        { role: 'user', content: input },
      ],
      response_format: parseResponse(this.responseSchema),
    })

    return response.choices[0].message.parsed!
  }

  getVoiceTranscription = async (file: Response) => {
    const { text } = await this.audio.transcriptions.create({
      model: 'whisper-1',
      language: 'ru',
      file,
    })

    return text
  }
}

export type GPTResponse = z.infer<typeof GPT.prototype.responseSchema>
