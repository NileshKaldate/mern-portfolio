export type Project = {
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
};

export const projects: Project[] = [
  {
    name: "Atlas Commerce",
    description:
      "Multi-tenant e-commerce platform with headless storefronts, role-based admin, and real-time inventory sync.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
    github: "https://github.com/",
    demo: "https://demo.com/",
  },
  {
    name: "Pulse Analytics",
    description:
      "SaaS dashboard for growth teams with cohort insights, event tracking, and automated reporting pipelines.",
    technologies: ["TypeScript", "Express", "PostgreSQL", "Docker"],
    github: "https://github.com/",
    demo: "https://demo.com/",
  },
  {
    name: "BridgeHire",
    description:
      "Talent marketplace connecting startups with vetted engineers, featuring chat, scheduling, and ATS exports.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/",
    demo: "https://demo.com/",
  },
];
