'use strict';

require("dotenv").config();
const nodemailer = require("nodemailer");

const GMAIL_HOST = process.env.GMAIL_HOST;
const GMAIL_PORT = process.env.GMAIL_PORT;
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;

const { buyerEmailContent } = require('../email_views/buyerEmailContent');

function sendEmailToBuyer (email, product) {
  const buyer = {
    subject: '✔️ You bought a product on Furnis',
    content: buyerEmailContent(product),
  }

  sendEmail(email, buyer.subject, buyer.content);
}

async function sendEmail (email, subject, content) {
  try {
    let transporter = nodemailer.createTransport({
      host: GMAIL_HOST,
      port: GMAIL_PORT,
      secure: true,
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    await transporter.sendMail({
      from: `"Furnis 📬" <${GMAIL_USER}>`,
      to: `${email}`,
      subject: subject,
      html: content,
    });
  } catch (e) {
    console.error(`Couldn't send the email to ${email}: `, e);
  }
}



module.exports = {
  sendEmailToBuyer,
  sendEmail
};