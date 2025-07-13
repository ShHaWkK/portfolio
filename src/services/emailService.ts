import nodemailer from 'nodemailer';

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const sendEmail = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    // Créer un transporteur SMTP réutilisable
    const transporter = nodemailer.createTransport({
      host: import.meta.env.VITE_SMTP_HOST || process.env.SMTP_HOST,
      port: Number(import.meta.env.VITE_SMTP_PORT || process.env.SMTP_PORT),
      secure: Boolean(import.meta.env.VITE_SMTP_SECURE === 'true' || process.env.SMTP_SECURE === 'true'),
      auth: {
        user: import.meta.env.VITE_SMTP_USER || process.env.SMTP_USER,
        pass: import.meta.env.VITE_SMTP_PASSWORD || process.env.SMTP_PASSWORD,
      },
    });

    // Configuration de l'email
    const mailOptions = {
      from: `"${data.name}" <${data.email}>`,
      to: import.meta.env.VITE_SMTP_TO || process.env.SMTP_TO,
      subject: `[Portfolio] ${data.subject}`,
      text: data.message,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nouveau message du formulaire de contact</h2>
          <p><strong>Nom:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Sujet:</strong> ${data.subject}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #00ffa0;">
            <p><strong>Message:</strong></p>
            <p>${data.message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #999;">
            Ce message a été envoyé depuis le formulaire de contact du portfolio d'Alexandre Uzan.
          </p>
        </div>
      `,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return { success: true, message: 'Email envoyé avec succès' };
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : 'Une erreur est survenue lors de l\'envoi de l\'email' 
    };
  }
};

export default sendEmail;