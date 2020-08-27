'use strict';

require("dotenv").config();
const nodemailer = require("nodemailer");
const path = require("path");

const GMAIL_HOST = process.env.GMAIL_HOST;
const GMAIL_PORT = process.env.GMAIL_PORT;
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;

const { buyerEmailContent } = require('../email_views/buyerEmailContent');
const { sellerEmailContent } = require('../email_views/sellerEmailContent');
const { dirname } = require("path");

const sendEmailToBuyer = async (email, product) => {
  const buyer = {
    subject: '✔️ You bought a product on Furniss',
    content: buyerEmailContent(product)
  }
  await sendEmail(email, buyer.subject, buyer.content);
}

const sendEmailToSeller = async (email, product) => {
  const buyer = {
    subject: '🎉 You sold a product on Furniss',
    content: sellerEmailContent(product)
  }
  await sendEmail(email, buyer.subject, buyer.content);
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
  sendEmailToSeller,
  sendEmailToBuyer,
  sendEmail,
};