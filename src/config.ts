import type { SiteConfig, SiteContent } from "./types";

export const SITE_CONFIG: SiteConfig = {
  author: "Ralph Laude",
  description:
    "I’m a technical writer with 12+ years of experience, now expanding into AI workflow automation.",
  lang: "en",
  navLinks: [
    { text: "Home", href: "/" },
    { text: "Projects", href: "/projects" },
    { text: "About", href: "/about" },
    { text: "Blog", href: "/blog" },
  ],
  socialLinks: [
    { href: "https://www.instagram.com/rappaolau/", icon: "instagram" },
    { href: "https://www.linkedin.com/in/ralphpaololaude/", icon: "linkedin" },
    { href: "https://github.com/ralphpaololaude", icon: "github" },
  ]
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Ralph Laude",
    summary: "I'm a technical writer with 12+ years of experience in software and enterprise systems, now building AI-powered workflow automations that connect APIs, data, and business processes.",
    email: "ralphpaolo.laude@gmail.com",
    cv: "ralphlaude_cv.pdf",
    skills: ["Technical Writing", "API Documentation", "AI Workflow Automation", "Knowledge Management", ],
    tools: ["n8n", "Zapier", "Make.com", "Power Automate", "Python", "JavaScript", "Astro", "Git", "CMS", "Adobe Experience Manager", "IntelliJ IDEA", "Postman", "Agile"],
  },
  experience: [
    {
      company: "Freelance",
      position: "Automation Specialist",
      startDate: "March 2026",
      endDate: "Present",
      summary: [
        "Developed and implemented automation solutions for clients using n8n, Zapier, and Make.com, streamlining business processes and improving efficiency.",
      ],
    },
    {
      company: "Myridius (RCG Global Services)",
      position: "Technical Writer for Elavon Payment Gateway",
      startDate: "May 2024",
      endDate: "Dec 2025",
      summary: [
        "Managed the developer portal for Elavon Payment Gateway. Collaborated with product and development teams in an Agile environment, using Adobe Experience Manager for content publishing, IntelliJ IDEA for code review and validation, and Postman for API testing and documentation."
      ],
    },
    {
      company: "Cognizant",
      position: "Technical Writer for YouTube VET",
      startDate: "Sept 2023",
      endDate: "May 2024",
      summary: [
        "Managed and organized the YouTube Vendor Development (VD) knowledge base, collaborating with clients to create and update articles, resulting in improved efficiency and accuracy for VD agents."
      ],
    },
    {
      company: "NICE CXone",
      position: "Technical Writing Specialist",
      startDate: "Jun 2021",
      endDate: "Sep 2023",
      summary: [
        "Participated in incident management calls, providing real-time updates to affected customers. Worked with technical resources after incident remediation to create post-incident documentation."
      ]
      },
    {
      company: "Vertiv",
      position: "Engineer II - Technical Documentation",
      startDate: "Jun 2021",
      endDate: "Sep 2023",
      summary: [
        "Developed and maintained technical documentation for Vertiv’s UPS and HVAC products, including installation, repair, maintenance and upgrade procedures.",
        "Created automation flows that reduce code migration efforts by 80%, enhancing efficiency and productivity.",
      ]
      },
  ]
};
