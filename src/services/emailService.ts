interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const sendEmail = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    // Appel à l'API route Vercel
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Erreur lors de l\'envoi de l\'email');
    }

    return result;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : 'Une erreur est survenue lors de l\'envoi de l\'email' 
    };
  }
};

export default sendEmail;