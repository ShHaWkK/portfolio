interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const sendEmail = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    // Vérifier si nous sommes en mode développement local
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    
    if (isDevelopment) {
      // En mode développement, simuler l'envoi d'email
      console.log('Mode développement - Email simulé:', data);
      return {
        success: true,
        message: 'Email envoyé avec succès (mode développement)'
      };
    }

    // Appel à l'API route Vercel
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Vérifier si la réponse est vide ou non-JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Réponse invalide du serveur');
    }

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Erreur lors de l\'envoi de l\'email');
    }

    return result;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    
    // Gestion spécifique de l'erreur JSON
    if (error instanceof SyntaxError && error.message.includes('JSON')) {
      return {
        success: false,
        message: 'Erreur de communication avec le serveur. Veuillez réessayer plus tard.'
      };
    }
    
    return { 
      success: false, 
      message: error instanceof Error ? error.message : 'Une erreur est survenue lors de l\'envoi de l\'email' 
    };
  }
};

export default sendEmail;