interface EmailData {
  name: string
  email: string
  subject: string
  message: string
}

const sendEmail = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    const contentType = response.headers.get('content-type')
    if (!contentType?.includes('application/json'))
      throw new Error('Réponse invalide du serveur.')

    const result = await response.json()

    if (!response.ok)
      throw new Error(result.message || 'Erreur lors de l\'envoi.')

    return result
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Une erreur est survenue.',
    }
  }
}

export default sendEmail
