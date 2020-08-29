
require("dotenv").config();
const nodemailer = require("nodemailer");

const GMAIL_HOST = process.env.GMAIL_HOST;
const GMAIL_PORT = process.env.GMAIL_PORT;
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;

sendEmail();

async function sendEmail () {
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
      from: `"Fred Foo 👻" <${GMAIL_USER}>`,
      to: "furniss.test@hotmail.com",
      subject: "Hello ✔",
      text: "Hello world?",
      html: "<b>Hello world?</b>",
    });
  } catch (e) {
    console.error(`Couldn't send the emails: `, e);
  }
}
