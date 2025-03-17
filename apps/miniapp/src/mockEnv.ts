import {
	LaunchParams,
	mockTelegramEnv,
	retrieveLaunchParams,
} from '@telegram-apps/sdk-react'

if (import.meta.env.DEV) {
	;(() => {
		let launchParams: LaunchParams | undefined

		try {
			launchParams = retrieveLaunchParams()
		} catch (e) {
			console.error('Error retrieving launch params', e)
		}
		const webAppData = new URLSearchParams([
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
			['signature', '6fbdaab833d39f54518bd5c3eb3f511d035e68cb'],
		]).toString()

		mockTelegramEnv({
			launchParams: launchParams
				? {
						...launchParams,
						tgWebAppData: webAppData,
					}
				: {
						tgWebAppPlatform: 'desktop',
						tgWebAppThemeParams: {},
						tgWebAppVersion: '8',
					},
		})
		console.warn(
			'⚠️ As long as the current environment was not considered as the Telegram-based one, it was mocked. Take a note, that you should not do it in production and current behavior is only specific to the development process. Environment mocking is also applied only in development mode. So, after building the application, you will not see this behavior and related warning, leading to crashing the application outside Telegram.'
		)
	})()
}
