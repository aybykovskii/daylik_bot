import { env } from 'shared'

export const getImageUrl = (img: string) => `${env.BOT_IMAGES_SOURCE}/${img}`
