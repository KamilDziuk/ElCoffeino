import nodemailer from "nodemailer";

export const handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: "Method Not Allowed",
      };
    }

    const data = JSON.parse(event.body || "{}");
    const { name, email, phone, message } = data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER,
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      cc: "kamildziukwebdeveloper@gmail.com",
      subject: "Test",
      text: `Thank you for contacting me!
I’ll be back in touch with you very soon.

Your message:
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    console.error(err);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Email failed" }),
    };
  }
};