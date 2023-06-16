import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
// import App from './App.tsx'
const App = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(import("./App.tsx"))
    }, 8000);
  })
})
import './index.css'

import './i18n.ts'
import Loading from './pages/Loading.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </BrowserRouter>
  </React.StrictMode>,
)
