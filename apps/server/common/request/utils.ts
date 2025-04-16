import { env } from 'shared/environment'

export const botRequest = async (method: 'POST' | 'GET', url: string, body?: Record<string, unknown>) => {
  const baseUrl = `http://telegram_bot:${env.BOT_PORT}`

  return fetch(`${baseUrl}/${url}`, {
    method,
    body: JSON.stringify(body),
  })
}