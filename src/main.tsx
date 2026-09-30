import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'
import { Provider } from "react-redux"
import store from "./app/store/store"
import { AppProvider } from './app/Providers/app/AppProvider.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
<StrictMode>
  <Provider store={store}>
    <AppProvider>
    <App />
    </AppProvider>
  </Provider>
</StrictMode>,
)
