import { sendMail } from "./mailer";

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

    await sendMail({
      to: email,
      subject: "Thank you for your inquiry – El Coffeino",
      text: `Hi,

thank you for your inquiry about our services☕

We’ve received your message and will get back to you as soon as possible (usually within 24 hours).

If your request is urgent, feel free to contact us directly:
📞 +31 6 17995104

Best regards,  Łukasz Seweryn - El Coffeino.

Instagram: https://instagram.com/elcoffeino
Website: https://elcoffeino.com
We provide services for eve.`,

      html: `
    <h2 style="color:#d4a574;">Hi 👋</h2>

    <p>Thank you for your inquiry about our services ☕</p>

    <p>
      We’ve received your message and will get back to you as soon as possible
      <strong>(usually within 24 hours)</strong>.
    </p>

    <p>
      If your request is urgent, feel free to contact us directly:
    </p>

    <p style="font-size:16px;">
      📞 <strong>+31 6 17995104</strong>
    </p>

    <hr style="border:none; border-top:1px solid #333; margin:20px 0;" />

    <p>
      Best regards,<br/>
      <strong>Łukasz Seweryn – El Coffeino</strong>
    </p>

    <p style="margin-top:15px;">
      📸 <a href="https://instagram.com/elcoffeino" style="color:#d4a574;">Instagram</a><br/>
      🌐 <a href="https://elcoffeino.com" style="color:#d4a574;">Website</a>
    </p>

    <p>
      We provide mobile coffee catering services across the Netherlands.
    </p>
`,
    });

    await sendMail({
      to: "elcoffeinonl@gmail.com",
      subject: `Message from the customer ${name}`,
      text: `Message from client:
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
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
