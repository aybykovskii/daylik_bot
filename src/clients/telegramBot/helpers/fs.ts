import fsPromises from 'node:fs/promises'
import path from 'node:path'

import { Log } from '~common/logger'

export class FileSystem {
	downloadAndSave = async (fileUrl: string, filePath: string) => {
		const response = await fetch(fileUrl)
		const buffer = Buffer.from(await response.arrayBuffer())

		try {
			await fsPromises.mkdir(path.dirname(filePath), { recursive: true })
			await fsPromises.writeFile(filePath, buffer)
		} catch (error) {
			Log.error('Ocurred error while writing file:', error)
		}
	}

	delete = async (filePath: string) => {
		try {
			await fsPromises.unlink(filePath)
		} catch (error) {
			Log.error('Ocurred error while deleting file:', error)
		}
	}
}
