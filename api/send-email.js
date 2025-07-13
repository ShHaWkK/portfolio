import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Permettre seulement les requêtes POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  // Vérifier les en-têtes CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  try {
    const { name, email, subject, message } = req.body;

    // Validation des données
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Tous les champs sont requis' 
      });
    }

    // Créer un transporteur SMTP réutilisable
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Configuration de l'email
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.SMTP_TO,
      subject: `[Portfolio] ${subject}`,
      text: message,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nouveau message du formulaire de contact</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Sujet:</strong> ${subject}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #00ffa0;">
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #999;">
            Ce message a été envoyé depuis le formulaire de contact du portfolio d'Alexandre Uzan.
          </p>
        </div>
      `,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ 
      success: true, 
      message: 'Email envoyé avec succès' 
    });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return res.status(500).json({ 
      success: false, 
      message: error instanceof Error ? error.message : 'Une erreur est survenue lors de l\'envoi de l\'email' 
    });
  }
}