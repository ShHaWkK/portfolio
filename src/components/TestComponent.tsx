import React from 'react'
import { useTranslation } from '../hooks/useLanguage'

const TestComponent = () => {
  const { t, isLoading } = useTranslation()
  
  if (isLoading) {
    return <div style={{ color: 'white', padding: '20px' }}>Chargement des traductions...</div>
  }

  const heroContent = t('hero')
  const commonContent = t('common')

  return (
    <div style={{ color: 'white', padding: '20px', backgroundColor: '#1a1a1a' }}>
      <h1>Test des traductions</h1>
      <p>isLoading: {isLoading ? 'true' : 'false'}</p>
      <p>Hero name: {heroContent?.name || 'NON TROUVÉ'}</p>
      <p>Hero title: {heroContent?.title || 'NON TROUVÉ'}</p>
      <p>Common navigation: {JSON.stringify(commonContent?.navigation) || 'NON TROUVÉ'}</p>
      <hr />
      <p>Contenu hero complet:</p>
      <pre style={{ fontSize: '12px', overflow: 'auto' }}>
        {JSON.stringify(heroContent, null, 2)}
      </pre>
    </div>
  )
}

export default TestComponent