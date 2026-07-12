// utils/sendMail.js

import nodemailer from "nodemailer";

// console.log("SENDMAIL USER:", process.env.EMAIL_USER);
// console.log("SENDMAIL PASS:", process.env.EMAIL_PASS);
const transporter = nodemailer.createTransport({
  service: "gmail",
  secure:true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendMail = async ({ to, subject, html,attachments = [], }) => {
  //  await transporter.verify();
  // console.log("SMTP Server Connected");
  await transporter.sendMail({
    from: `"Indo Sparsh Studio" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
    attachments
  });
};


// import { Resend } from 'resend';

// const resend = new Resend('re_xxxxxxxxx');

// const { data, error } = await resend.apiKeys.create({ name: 'Production' });
// console.log("API KEYS",data)
// console.log("API KEYS ERROR",error)