import nodemailer from 'nodemailer';

const sanitize = (str) => {
  if (typeof str !== 'string') return '';
  return str.replace(/[<>]/g, '').trim();
};

export default async function handler(req, res) {
  // Set CORS headers just in case
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: `Method ${req.method} Not Allowed`
    });
  }

  try {
    const { name, email, subject, message, hp_field } = req.body || {};

    // 1. Honeypot check (Spam protection)
    if (hp_field) {
      console.warn('[SPAM DETECTED] Honeypot triggered.');
      return res.status(200).json({
        success: true,
        message: 'Message received.'
      });
    }

    // 2. Input validation & sanitization
    const cleanName = sanitize(name);
    const cleanEmail = sanitize(email);
    const cleanSubject = sanitize(subject);
    const cleanMessage = sanitize(message);

    if (!cleanName || cleanName.length < 2) {
      return res.status(400).json({
        success: false,
        message: 'Name is required and must be at least 2 characters.'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: 'A valid email address is required.'
      });
    }

    if (!cleanSubject || cleanSubject.length < 3) {
      return res.status(400).json({
        success: false,
        message: 'Subject must be at least 3 characters.'
      });
    }

    if (!cleanMessage || cleanMessage.length < 10) {
      return res.status(400).json({
        success: false,
        message: 'Message must be at least 10 characters long.'
      });
    }

    // 3. Nodemailer Configuration using Vercel Environment Variables
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_APP_PASSWORD
      ? process.env.EMAIL_APP_PASSWORD.replace(/\s+/g, '')
      : '';
    const recipientEmail = 'gagankumar1102.3@gmail.com';

    if (!emailUser || !emailPass) {
      console.error('[CONFIG ERROR] EMAIL_USER or EMAIL_APP_PASSWORD is not set in Vercel environment.');
      return res.status(503).json({
        success: false,
        message: 'Mail server credentials not configured. Please add EMAIL_USER and EMAIL_APP_PASSWORD to your Vercel project settings.'
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass
      }
    });

    // 4. Construct Email
    const mailOptions = {
      from: `"Portfolio Contact Form" <${emailUser}>`,
      to: recipientEmail,
      replyTo: cleanEmail,
      subject: `[Portfolio Inquiry] ${cleanSubject}`,
      text: `You have received a new message from your portfolio contact form:\n\nName: ${cleanName}\nEmail: ${cleanEmail}\nSubject: ${cleanSubject}\n\nMessage:\n${cleanMessage}\n\n---\nSent on: ${new Date().toLocaleString()}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #f8fafc;">
          <h2 style="color: #4f46e5; margin-top: 0; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px;">New Portfolio Contact Message</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 100px;">From:</td>
              <td style="padding: 8px 0; color: #0f172a;">${cleanName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
              <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${cleanEmail}" style="color: #4f46e5;">${cleanEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Subject:</td>
              <td style="padding: 8px 0; color: #0f172a;">${cleanSubject}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Received:</td>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px;">${new Date().toLocaleString()}</td>
            </tr>
          </table>
          <div style="background-color: #ffffff; padding: 18px; border-radius: 8px; border: 1px solid #cbd5e1; margin-bottom: 20px;">
            <h3 style="margin-top: 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">Message Content:</h3>
            <p style="color: #1e293b; white-space: pre-wrap; line-height: 1.6; margin-bottom: 0;">${cleanMessage}</p>
          </div>
          <p style="font-size: 12px; color: #94a3b8; text-align: center; margin-bottom: 0;">
            Sent directly from your portfolio on Vercel.
          </p>
        </div>
      `
    };

    // 5. Send Email
    await transporter.sendMail(mailOptions);
    console.log(`[SUCCESS] Contact email sent from ${cleanEmail} to ${recipientEmail}`);

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully!'
    });
  } catch (error) {
    console.error('[ERROR in contact function]:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send message via Gmail. Please use direct email.',
      error: error.message
    });
  }
}
