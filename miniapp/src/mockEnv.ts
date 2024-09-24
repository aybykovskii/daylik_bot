'use client'

import { mockTelegramEnv, parseInitData, retrieveLaunchParams } from '@telegram-apps/sdk-react'

if (process.env.NODE_ENV === 'development') {
	let shouldMock: boolean

	try {
		retrieveLaunchParams()
		shouldMock = !!sessionStorage.getItem('____mocked')
	} catch (_) {
		shouldMock = true
	}

	if (shouldMock) {
		const initDataRaw = new URLSearchParams([
			[
				'user',
				JSON.stringify({
					id: 251512885,
					first_name: 'Andrew',
					last_name: 'Rogue',
					username: 'aybykovskii',
					language_code: 'en',
					is_premium: true,
					allows_write_to_pm: true,
				}),
			],
			['hash', '89d6079ad6762351f38c6dbbc41bb53048019256a9443988af7a48bcad16ba31'],
			['auth_date', '1716922846'],
			['start_param', 'debug'],
			['chat_type', 'sender'],
			['chat_instance', '8428209589180549439'],
		]).toString()

		mockTelegramEnv({
			themeParams: {},
			initData: parseInitData(initDataRaw),
			initDataRaw,
			version: '7.2',
			platform: 'tdesktop',
		})
		sessionStorage.setItem('____mocked', '1')

		console.info('Mocked environment')
	}
}
