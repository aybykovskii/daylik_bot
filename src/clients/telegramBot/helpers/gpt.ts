import OpenAI from 'openai'

export class GPT extends OpenAI {
	constructor(apiKey: string) {
		super({ apiKey })
	}

	sendStreamMessage = async (
		messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[],
		callback?: (message: string, isEnd: boolean) => void
	) => {
		const stream = this.beta.chat.completions.stream({
			model: 'gpt-4o-mini',
			messages,
			stream: true,
		})

		let answer = ''
		let delta = ''

		for await (const chunk of stream) {
			const content = chunk.choices[0].delta.content
			delta += content ?? ''

			if (delta.length >= 50 || !content) {
				answer += delta || ''
				delta = ''
				answer.length && callback?.(answer, !content)
			}
		}

		return answer
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
