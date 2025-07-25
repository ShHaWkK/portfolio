import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LanguageProvider } from './hooks/useLanguage'

// Composant de chargement pendant que les traductions sont chargées
const Loading = () => (
  <div className="flex items-center justify-center h-screen w-screen bg-gray-900">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500"></div>
  </div>
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </LanguageProvider>
  </StrictMode>,
)
