import nodemailer from "nodemailer";

type Event = {
  httpMethod: string;
  body: string | null;
};

export const handler = async (event: Event) => {
  try {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
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
      to: `${email}, elcoffeinonl@gmail.com`,
      subject: "Thank you for your inquiry – El Coffeino",
      text: `Hi,
thank you for your inquiry about our services ☕
We’ve received your message and will get back to you as soon as possible (usually within 24 hours).

If your request is urgent, feel free to contact us directly:
📞 +31617995104

Your message:
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}


Best regards,  Łukasz Seweryn - El Coffeino.

Instagram: https://instagram.com/elcoffeino
Website: https://elcoffeino.nl

We provide services for eve.
`,
    });

    return {
      statusCode: 200,
    };
  } catch {
    return {
      statusCode: 500,
    };
  }
};
