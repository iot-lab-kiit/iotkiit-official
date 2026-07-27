export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  github?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "IoT Dashboard",
    category: "Analytics",
    description: "Real-time analytics dashboard with modern UI and responsive monitoring.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    link: "#",
    github: "https://github.com",
  },
  {
    id: 2,
    title: "Industrial IoT",
    category: "Automation",
    description: "Industrial monitoring powered by AI and predictive analytics.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 3,
    title: "Embedded Project",
    category: "Embedded",
    description: "Embedded hardware engineered with precision and reliability.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    link: "#",
    github: "https://github.com",
  },
  {
    id: 4,
    title: "Robotics",
    category: "AI",
    description: "Autonomous robotics with computer vision and intelligent control.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
    link: "#",
    github: "https://github.com",
  },
  {
    id: 5,
    title: "Smart Campus",
    category: "IoT",
    description: "Connected campus infrastructure with live monitoring.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
];
