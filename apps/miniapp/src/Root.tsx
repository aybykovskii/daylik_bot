import { SDKProvider } from '@telegram-apps/sdk-react'
import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import { App } from './App'
import { ErrorBoundary } from './components/ErrorBoundary'
import { ErrorPage } from './components/ErrorPage'
import './mockEnv'
import './styles/global.css'
import './styles/animations.css'
import './styles/toasts.css'

createRoot(document.getElementById('root')!).render(
	<ErrorBoundary fallback={ErrorPage}>
		<Suspense fallback={<div>Loading...</div>}>
			<SDKProvider debug={process.env.NODE_ENV === 'development'}>
				<ToastContainer
					position="top-center"
					autoClose={2000}
					hideProgressBar
					newestOnTop
					closeOnClick
					rtl={false}
					pauseOnFocusLoss={false}
					draggable
					pauseOnHover
					theme="light"
					transition={Slide}
					closeButton={false}
				/>
				<App />
			</SDKProvider>
		</Suspense>
	</ErrorBoundary>
)
