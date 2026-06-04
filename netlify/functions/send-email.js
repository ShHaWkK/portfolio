import nodemailer from 'nodemailer';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function handler(event) {
  if (event.httpMethod === 'OPTIONS')
    return { statusCode: 200, headers: CORS, body: '' };

  if (event.httpMethod !== 'POST')
    return { statusCode: 405, headers: CORS, body: JSON.stringify({ success: false, message: 'Method not allowed' }) };

  try {
    const { name, email, subject, message } = JSON.parse(event.body || '{}');

    if (!name || !email || !subject || !message)
      return { statusCode: 400, headers: CORS, body: JSON.stringify({ success: false, message: 'Tous les champs sont requis.' }) };

    const { EMAIL_USER, EMAIL_PASS, CONTACT_EMAIL_TO } = process.env;

    if (!EMAIL_USER || !EMAIL_PASS || !CONTACT_EMAIL_TO)
      return { statusCode: 500, headers: CORS, body: JSON.stringify({ success: false, message: 'Configuration email manquante.' }) };

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${EMAIL_USER}>`,
      replyTo: `${name} <${email}>`,
      to: CONTACT_EMAIL_TO,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0D1117;color:#e5e7eb;border:1px solid #30363d;border-radius:8px;overflow:hidden;">
          <div style="background:#161b22;padding:24px 32px;border-bottom:1px solid #30363d;">
            <h2 style="margin:0;font-size:22px;color:#ffffff;">Nouveau message — Portfolio</h2>
          </div>
          <div style="padding:32px;">
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              <tr><td style="padding:8px 0;color:#9ca3af;width:90px;font-family:monospace;">Nom</td><td style="padding:8px 0;color:#ffffff;font-weight:600;">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#9ca3af;font-family:monospace;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#00E5FF;">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#9ca3af;font-family:monospace;">Sujet</td><td style="padding:8px 0;color:#ffffff;">${subject}</td></tr>
            </table>
            <div style="margin-top:24px;padding:20px;background:#161b22;border-left:3px solid #00E5FF;border-radius:4px;">
              <p style="margin:0 0 8px;color:#9ca3af;font-family:monospace;font-size:12px;">Message :</p>
              <p style="margin:0;color:#e5e7eb;line-height:1.7;white-space:pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
            </div>
          </div>
        </div>
      `,
    });

    await transporter.sendMail({
      from: `"Alexandre Uzan" <${EMAIL_USER}>`,
      to: `${name} <${email}>`,
      subject: `Votre message a bien été reçu — Alexandre Uzan`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0D1117;color:#e5e7eb;border:1px solid #30363d;border-radius:8px;overflow:hidden;">
          <div style="background:#161b22;padding:24px 32px;border-bottom:1px solid #30363d;">
            <h2 style="margin:8px 0 0;font-size:22px;color:#ffffff;">Message bien reçu ✓</h2>
          </div>
          <div style="padding:32px;">
            <p style="color:#e5e7eb;line-height:1.7;margin:0 0 16px;">Bonjour <strong>${name}</strong>,</p>
            <p style="color:#e5e7eb;line-height:1.7;margin:0 0 16px;">
              Merci pour votre message. Je l'ai bien reçu et vous répondrai dans les meilleurs délais, généralement sous 24–48 h.
            </p>
            <div style="margin:24px 0;padding:20px;background:#161b22;border-left:3px solid #9A4DFF;border-radius:4px;">
              <p style="margin:0 0 6px;color:#9ca3af;font-family:monospace;font-size:12px;">Votre sujet :</p>
              <p style="margin:0;color:#ffffff;font-weight:600;">${subject}</p>
            </div>
            <p style="color:#9ca3af;line-height:1.7;margin:0;font-size:13px;">
              Retrouvez mon portfolio sur <a href="https://alexandreuzan.fr" style="color:#00E5FF;">alexandreuzan.fr</a>
              ou sur <a href="https://linkedin.com/in/alexandre-uzan" style="color:#00E5FF;">LinkedIn</a>.
            </p>
          </div>
          <div style="padding:16px 32px;border-top:1px solid #30363d;background:#161b22;">
            <p style="margin:0;font-size:11px;color:#4b5563;font-family:monospace;">Alexandre Uzan — Cybersecurity &amp; Web Development</p>
          </div>
        </div>
      `,
    });

    return {
      statusCode: 200,
      headers: { ...CORS, 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true, message: 'Message envoyé avec succès.' }),
    };
  } catch (error) {
    console.error('Email error:', error);
    return {
      statusCode: 500,
      headers: CORS,
      body: JSON.stringify({ success: false, message: error instanceof Error ? error.message : 'Erreur serveur.' }),
    };
  }
}
