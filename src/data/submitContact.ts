export async function submitContact(formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  const res = await fetch(`/.netlify/functions/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  return res;
}
