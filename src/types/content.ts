export interface NavContent {
  about: string;
  chef: string;
  menu: string;
  services: string;
  gallery: string;
  contact: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  tagline: string;
  cta: string;
}

export interface AboutContent {
  title: string;
  subtitle: string;
  text: string;
  text2: string;
}

export interface AvailableService {
  title: string;
  description: string;
}

export interface PrivateChefContent {
  title: string;
  subtitle: string;
  intro: string;
  description: string;
  passion: string;
  whyWorkTitle: string;
  whyWork: string[];
  availableTitle: string;
  availableServices: AvailableService[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
}

export interface GalleryContent {
  title: string;
  subtitle: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface TestimonialsContent {
  title: string;
  subtitle: string;
  items: Testimonial[];
}

export interface ContactFormLabels {
  name: string;
  email: string;
  phone: string;
  message: string;
  submit: string;
  submitting: string;
  success: string;
  error: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface ContactContent {
  title: string;
  subtitle: string;
  form: ContactFormLabels;
  whatsapp: string;
  info: ContactInfo;
}

export interface FooterContent {
  tagline: string;
  rights: string;
  social: string;
}

export interface CoffeePackage {
  name: string;
  badge?: string;
  duration: string;
  baristas: string;
  guests: string;
  features: string[];
}

export interface MenuExtras {
  title: string;
  items: string[];
}

export interface MenuContent {
  title: string;
  subtitle: string;
  ctaText: string;
  packages: CoffeePackage[];
  // extras: MenuExtras;
}

export interface LanguageContent {
  nav: NavContent;
  hero: HeroContent;
  about: AboutContent;
  privateChef: PrivateChefContent;
  gallery: GalleryContent;
  testimonials: TestimonialsContent;
  contact: ContactContent;
  footer: FooterContent;
  menu: MenuContent;
}

export type Language = "en" | "nl" | "pl";

export type ContentMap = Record<Language, LanguageContent>;
