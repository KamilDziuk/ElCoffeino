import { form } from "./mailer";

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

    await form({
      to: `${email}`,
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
    });

    await form({
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
