export interface SiteConfig extends HeaderProps {
  description: string;
  lang: string;
  author: string;
  socialLinks: { href: string; icon: string }[];
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
}

export interface HeroProps {
  name: string;
  summary: string;
  email: string;
  skills: string[];
  tools: string[];
  cv: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface HeaderProps {
  navLinks: { text: string; href: string }[];
}
