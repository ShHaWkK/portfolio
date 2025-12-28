import nodemailer from 'nodemailer';

export async function handler(event) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, message: 'Method not allowed' }),
    };
  }

  try {
    const { name, email, subject, message } = JSON.parse(event.body || '{}');

    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'Tous les champs sont requis',
        }),
      };
    }

    const requiredEnv = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASSWORD', 'SMTP_TO'];
    const missing = requiredEnv.filter((key) => !process.env[key]);
    if (missing.length) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          success: false,
          message: `Configuration SMTP manquante: ${missing.join(', ')}`,
        }),
      };
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER;

    const mailOptions = {
      from: fromAddress,
      replyTo: `${name} <${email}>`,
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

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true, message: 'Email envoyé avec succès' }),
    };
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: error instanceof Error ? error.message : 'Une erreur est survenue lors de l\'envoi de l\'email',
      }),
    };
  }
}
