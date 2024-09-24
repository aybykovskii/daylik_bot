import { useIntegration } from '@telegram-apps/react-router-integration'
import {
	bindMiniAppCSSVars,
	bindThemeParamsCSSVars,
	bindViewportCSSVars,
	initNavigator,
	postEvent,
	useLaunchParams,
	useMiniApp,
	useThemeParams,
	useViewport,
} from '@telegram-apps/sdk-react'
import { useEffect, useMemo } from 'react'

export const useInitMiniApp = (bgColor: `#${string}` = '#ffffff') => {
	const miniApp = useMiniApp()
	const themeParams = useThemeParams()
	const viewport = useViewport()
	const launchParams = useLaunchParams()

	useEffect(() => {
		return bindMiniAppCSSVars(miniApp, themeParams)
	}, [miniApp, themeParams])

	useEffect(() => {
		return bindThemeParamsCSSVars(themeParams)
	}, [themeParams])

	useEffect(() => {
		if (!viewport) return

		viewport.expand()
		bindViewportCSSVars(viewport)
	}, [viewport])

	const navigator = useMemo(() => initNavigator('app-navigation-state'), [])
	const [location, reactNavigator] = useIntegration(navigator)

	const isDebug = launchParams.startParam === 'debug'

	useEffect(() => {
		if (isDebug) {
			import('eruda').then((eruda) => eruda.default.init())
		}
	}, [isDebug])

	useEffect(() => {
		navigator.attach()
		return () => navigator.detach()
	}, [navigator])

	useEffect(() => {
		postEvent('web_app_setup_swipe_behavior', { allow_vertical_swipe: false })
		postEvent('web_app_expand')
		miniApp.setBgColor(bgColor)
		miniApp.setHeaderColor(bgColor)
	}, [miniApp, bgColor])

	useEffect(() => miniApp.ready(), [miniApp])

	return { location, reactNavigator }
}
