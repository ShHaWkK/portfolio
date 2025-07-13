interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const sendEmail = async (
  data: EmailData
): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const result = await response.json();
      return { success: false, message: result.message || 'Erreur inconnue' };
    }

    return (await response.json()) as { success: boolean; message: string };
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Une erreur est survenue"
    };
  }
};

export default sendEmail;