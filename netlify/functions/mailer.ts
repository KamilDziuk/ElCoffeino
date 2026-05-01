import nodemailer from "nodemailer";

type Sent = {
  to: string;
  subject: string;
  text: string;
  html?: string;
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

export const sendMail = async ({ to, subject, text, html }: Sent) => {
  await transporter.sendMail({
    from: process.env.USER,
    to,
    subject,
    text,
    html,
  });
};
