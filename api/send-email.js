import nodemailer from 'nodemailer';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default async function handler(req, res) {
  Object.entries(CORS).forEach(([k, v]) => res.setHeader(k, v));

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST')
    return res.status(405).json({ success: false, message: 'Method not allowed' });

  try {
    const { name, email, subject, message } = req.body ?? {};

    if (!name || !email || !subject || !message)
      return res.status(400).json({ success: false, message: 'Tous les champs sont requis.' });

    const { EMAIL_USER, EMAIL_PASS, CONTACT_EMAIL_TO } = process.env;

    if (!EMAIL_USER || !EMAIL_PASS || !CONTACT_EMAIL_TO)
      return res.status(500).json({ success: false, message: 'Configuration email manquante.' });

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });

    // ── 1. Notification à Alexandre ─────────────────────────────────────────
    await transporter.sendMail({
      from: `"Portfolio Contact" <${EMAIL_USER}>`,
      replyTo: `${name} <${email}>`,
      to: CONTACT_EMAIL_TO,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0D1117;color:#e5e7eb;border:1px solid #30363d;border-radius:8px;overflow:hidden;">
          <div style="background:#161b22;padding:24px 32px;border-bottom:1px solid #30363d;">
            <p style="margin:0;font-size:11px;color:#00E5FF;letter-spacing:2px;text-transform:uppercase;font-family:monospace;">~/portfolio/contact</p>
            <h2 style="margin:8px 0 0;font-size:22px;color:#ffffff;">Nouveau message</h2>
          </div>
          <div style="padding:32px;">
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              <tr><td style="padding:8px 0;color:#9ca3af;width:90px;font-family:monospace;">Nom</td><td style="padding:8px 0;color:#ffffff;font-weight:600;">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#9ca3af;font-family:monospace;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#00E5FF;">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#9ca3af;font-family:monospace;">Sujet</td><td style="padding:8px 0;color:#ffffff;">${subject}</td></tr>
            </table>
            <div style="margin-top:24px;padding:20px;background:#161b22;border-left:3px solid #00E5FF;border-radius:4px;">
              <p style="margin:0;color:#9ca3af;font-family:monospace;font-size:12px;margin-bottom:8px;">Message :</p>
              <p style="margin:0;color:#e5e7eb;line-height:1.7;white-space:pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
            </div>
          </div>
          <div style="padding:16px 32px;border-top:1px solid #30363d;background:#161b22;">
            <p style="margin:0;font-size:11px;color:#4b5563;font-family:monospace;">Envoyé depuis le formulaire de contact — alexandreuzan.fr</p>
          </div>
        </div>
      `,
    });

    // ── 2. Confirmation au visiteur ──────────────────────────────────────────
    await transporter.sendMail({
      from: `"Alexandre Uzan" <${EMAIL_USER}>`,
      to: `${name} <${email}>`,
      subject: `Votre message a bien été reçu — Alexandre Uzan`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0D1117;color:#e5e7eb;border:1px solid #30363d;border-radius:8px;overflow:hidden;">
          <div style="background:#161b22;padding:24px 32px;border-bottom:1px solid #30363d;">
            <p style="margin:0;font-size:11px;color:#00E5FF;letter-spacing:2px;text-transform:uppercase;font-family:monospace;">~/confirmation</p>
            <h2 style="margin:8px 0 0;font-size:22px;color:#ffffff;">Message bien reçu ✓</h2>
          </div>
          <div style="padding:32px;">
            <p style="color:#e5e7eb;line-height:1.7;margin:0 0 16px;">Bonjour <strong>${name}</strong>,</p>
            <p style="color:#e5e7eb;line-height:1.7;margin:0 0 16px;">
              Merci pour votre message. Je l'ai bien reçu et vous répondrai dans les meilleurs délais, généralement sous 24–48 h.
            </p>
            <div style="margin:24px 0;padding:20px;background:#161b22;border-left:3px solid #9A4DFF;border-radius:4px;">
              <p style="margin:0;color:#9ca3af;font-family:monospace;font-size:12px;margin-bottom:6px;">Votre sujet :</p>
              <p style="margin:0;color:#ffffff;font-weight:600;">${subject}</p>
            </div>
            <p style="color:#9ca3af;line-height:1.7;margin:0;font-size:13px;">
              En attendant, vous pouvez consulter mon portfolio sur
              <a href="https://alexandreuzan.fr" style="color:#00E5FF;">alexandreuzan.fr</a>
              ou me retrouver sur
              <a href="https://linkedin.com/in/alexandre-uzan" style="color:#00E5FF;">LinkedIn</a>.
            </p>
          </div>
          <div style="padding:16px 32px;border-top:1px solid #30363d;background:#161b22;">
            <p style="margin:0;font-size:11px;color:#4b5563;font-family:monospace;">Alexandre Uzan — Cybersecurity &amp; Web Development</p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: 'Message envoyé avec succès.' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Erreur serveur.',
    });
  }
}
