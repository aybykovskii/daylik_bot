import { retrieveLaunchParams } from '@telegram-apps/sdk-react'
import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import { App } from './App'
import { ErrorBoundary } from './components/ErrorBoundary'
import { ErrorPage } from './components/ErrorPage'
import { Loader } from './components/Loader'
import { init } from './init'
import './mockEnv'
import './styles/animations.css'
import './styles/global.css'
import './styles/toasts.css'
const root = createRoot(document.getElementById('root')!)

try {
  init(retrieveLaunchParams().tgWebAppStartParam === 'debug' || import.meta.env.DEV)

  root.render(
    <ErrorBoundary fallback={ErrorPage}>
      <Suspense fallback={<Loader />}>
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
        <HashRouter>
          <App />
        </HashRouter>
      </Suspense>
    </ErrorBoundary>
  )
} catch (error) {
  console.error(error)
  root.render(<div>Environment is not supported</div>)
}
