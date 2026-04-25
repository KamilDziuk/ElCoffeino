import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";
import { submitContact } from "../data/submitContact";
import type { LanguageContent } from "../types/content";
import { useSubmitStatus } from "../../netlify/functions/useSubmitStatus";

interface Props {
  content: LanguageContent;
}

export default function ContactSection({ content }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { submitStatus, setSubmitStatus } = useSubmitStatus();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const res = await submitContact(formData);

    if (res.status === 200) {
      setSubmitStatus("success");
      setIsSubmitting(false);
    } else if (res.status === 500 || res.status === 405) {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSubmitStatus("error");
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const phone = content.contact.info.phone.replace(/\s+/g, "");
    const message = encodeURIComponent(
      "Hello! I would like to get in touch regarding your services.",
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  const contactCards = [
    {
      icon: Mail,
      title: "Email",
      value: content.contact.info.email,
      href: `mailto:${content.contact.info.email}`,
    },
    {
      icon: Phone,
      title: "Phone",
      value: content.contact.info.phone,
      href: `tel:${content.contact.info.phone}`,
    },
    { icon: MapPin, title: "Location", value: content.contact.info.location },
  ];

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f10] relative overflow-hidden"
    >
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#d4a574]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#74d4c1] mb-4 font-serif">
            {content.contact.title}
          </h2>
          <p className="text-xl text-gray-300 font-light italic max-w-2xl mx-auto">
            {content.contact.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4a574] to-transparent mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <Card className="bg-[#1a1a1a]/80 backdrop-blur-md border border-[#d4a574]/30 p-8">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              data-testid="contact-form"
            >
              <div>
                <Label htmlFor="name" className="text-gray-200 mb-2 block">
                  {content.contact.form.name}
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-[#0f0f10] border-[#d4a574]/30 text-gray-200 focus:border-[#d4a574] transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-200 mb-2 block">
                  {content.contact.form.email}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-[#0f0f10] border-[#d4a574]/30 text-gray-200 focus:border-[#d4a574] transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-gray-200 mb-2 block">
                  {content.contact.form.phone}
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-[#0f0f10] border-[#d4a574]/30 text-gray-200 focus:border-[#d4a574] transition-colors"
                  placeholder="+31 6 12345678"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-gray-200 mb-2 block">
                  {content.contact.form.message}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-[#0f0f10] border-[#d4a574]/30 text-gray-200 focus:border-[#d4a574] transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                data-testid="contact-submit"
                className="w-full bg-[#d4a574] text-[#0f0f10] hover:bg-[#c9a66b] font-semibold py-6 text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting
                  ? content.contact.form.submitting
                  : content.contact.form.submit}
              </Button>

              {submitStatus === "success" && (
                <div
                  data-testid="contact-success"
                  className="flex items-center space-x-2 text-green-400 bg-green-400/10 border border-green-400/30 rounded-lg p-4"
                >
                  <CheckCircle className="w-5 h-5" />
                  <p>{content.contact.form.success}</p>
                </div>
              )}
              {submitStatus === "error" && (
                <div
                  data-testid="contact-error"
                  className="text-red-400 bg-red-400/10 border border-red-400/30 rounded-lg p-4"
                >
                  <p>{content.contact.form.error}</p>
                </div>
              )}
            </form>

            <div className="mt-6">
              <Button
                data-testid="whatsapp-btn"
                onClick={handleWhatsApp}
                variant="outline"
                className="w-full border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {content.contact.whatsapp}
              </Button>
            </div>
          </Card>

          {/* Info cards */}
          <div className="space-y-6">
            {contactCards.map(({ icon: Icon, title, value, href }) => (
              <Card
                key={title}
                className="bg-[#1a1a1a]/80 backdrop-blur-md border border-[#d4a574]/30 p-8 hover:border-[#d4a574]/50 transition-all duration-500 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#d4a574]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#d4a574]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#d4a574]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100 mb-2">
                      {title}
                    </h3>
                    {href ? (
                      <a
                        href={href}
                        className="text-gray-300 hover:text-[#d4a574] transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{value}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
