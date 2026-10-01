import type { SiteConfig, SiteContent } from "./types";

export const SITE_CONFIG: SiteConfig = {
  author: "Ralph Laude",
  specialty: ["Technical Documentation", "Workflows and Automations"],
  description:
    "I’m a technical writer with 12+ years of experience, now expanding into AI workflow automation.",
  lang: "en",
  siteLogo: "/pfp-small.png",
  navLinks: [
    { text: "Home", href: "/" },
    { text: "Projects", href: "/projects" },
    { text: "Blog", href: "/blog" },
    { text: "About", href: "/about" },
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
    specialty: "Technical Documentation and Automations",
    summary:
      "I’m a technical documentation and knowledge management professional with more than 12 years of experience, now expanding into AI workflow automation.",
    email: "ralphpaolo.laude@gmail.com",
    cv: "ralphlaude_cv.pdf",
    skills: ["Technical Writing", "Knowledge Management", "AI Workflow Automation", "n8n", "Zapier", "Make.com", "Python", "JavaScript", "Astro"],
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
  ],
  projects: [
    {
      name: "MatchaIO API Documentation",
      summary: "A sample API documentation for a fictional MatchaIO payments and rewards system.",
      projectLinks: [
        { href: "https://blog.ralphlaude.com/blog/matchaio-api-documentation/", text: "API Reference" },
        { href: "https://github.com/ralphpaololaude/blog/blob/main/docs/blog/openapi/matchaio_openapi.yaml", text: "YAML File" },
      ],
      image: "/matchaio.png",
    },
    {
      name: "Freelance.com Projects Collector",
      summary: "An n8n workflow that regularly collects and stores projects from Freelance.com for downstream workflow use.",
      projectLinks: [
        { href: "https://blog.ralphlaude.com/blog/get-freelancecom-projects/", text: "Documentation" },
        { href: "https://github.com/ralphpaololaude/blog/blob/main/docs/blog/n8n/freelancerProjects.json", text: "n8n JSON File" },
      ],
      image: "/getflproj.png",
    },
  ],
  about: {
    description: [
      "I’m a technical documentation and knowledge management professional with 12 years of experience, now expanding into AI workflow automation.",
      "I enjoy simplifying complex information, learning new technologies, and building practical solutions that make my work more efficient."
    ],
    image: "/pfp.png",
  },
};
