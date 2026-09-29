import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'
import App from './App.tsx'
import { AppProvider } from './app/providers/app/AppProvider.tsx'

async function enableMocking() {
  if (import.meta.env.DEV) {
    const { worker } = await import("./mocks/browser");

    return worker.start();
  }
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
    </StrictMode>,
  )
});
