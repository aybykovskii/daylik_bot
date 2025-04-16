import OpenAI from 'openai'
import { zodResponseFormat } from 'openai/helpers/zod'

import { GPTResponse, gptResponse } from '@/types/gpt'

export class GPT extends OpenAI {
  constructor(apiKey: string) {
    super({ apiKey })
  }

  sendMessage = async (messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[]): Promise<GPTResponse> => {
    const response = await this.beta.chat.completions.parse({
      model: 'gpt-4o-mini',
      messages,
      response_format: zodResponseFormat(gptResponse, 'response'),
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
