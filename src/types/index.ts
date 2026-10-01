export interface SiteConfig extends HeaderProps {
  specialty: string | string[];
  description: string;
  lang: string;
  author: string;
  socialLinks: { href: string; icon: string }[];
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
  about: AboutProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
  skills: string[];
  cv: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  projectLinks: { href: string; text: string }[];
}

export interface AboutProps {
  description: string[];
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
