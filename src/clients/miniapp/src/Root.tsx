import { SDKProvider } from '@telegram-apps/sdk-react'
import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'

import 'tippy.js/animations/scale.css'
import 'tippy.js/dist/tippy.css'

import { App } from './App'
import { ErrorBoundary } from './components/ErrorBoundary'
import { ErrorPage } from './components/ErrorPage'
import './mockEnv'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(
	<ErrorBoundary fallback={ErrorPage}>
		<Suspense fallback={<div>Loading...</div>}>
			<SDKProvider debug={process.env.NODE_ENV === 'development'}>
				<App />
			</SDKProvider>
		</Suspense>
	</ErrorBoundary>
)
