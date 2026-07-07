// The lab's specialization domains — kept in the same order and naming as the
// team-page DOMAIN_ORDER so "Our Domains" and how members are grouped stay in
// sync. `icon` names map to MUI icons resolved in the Domains component.

export interface Domain {
  id: string;
  title: string;
  icon: string;
  desc: string;
  img: string;
  color: string; // tailwind gradient stops for the active accent glow
}

export const domains: Domain[] = [
  {
    id: "cp",
    title: "Competitive Programming",
    icon: "Terminal",
    desc: "Sharpening algorithmic thinking through contests, data structures, and relentless problem-solving.",
    img: "/images/domains/cp.png",
    color: "from-amber-500 to-yellow-400",
  },
  {
    id: "app",
    title: "App Dev",
    icon: "PhoneAndroid",
    desc: "Crafting cross-platform mobile experiences with Flutter, React Native, and native tooling.",
    img: "/images/domains/appdev.png",
    color: "from-emerald-500 to-green-400",
  },
  {
    id: "web",
    title: "Web Dev",
    icon: "Language",
    desc: "Building fast, responsive web apps with React, Next.js, and modern full-stack technologies.",
    img: "/images/domains/webdev.png",
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: "iot",
    title: "IoT",
    icon: "Memory",
    desc: "Bridging the physical and digital worlds through embedded systems, sensors, and smart automation.",
    img: "/images/domains/iot.png",
    color: "from-teal-500 to-cyan-400",
  },
  {
    id: "ml",
    title: "Machine Learning",
    icon: "Psychology",
    desc: "Exploring deep learning, NLP, and computer vision to build systems that learn and adapt.",
    img: "/images/domains/aiml.png",
    color: "from-purple-500 to-violet-400",
  },
  {
    id: "cyber",
    title: "Cyber Security",
    icon: "Security",
    desc: "Defending systems through ethical hacking, penetration testing, and hands-on security research.",
    img: "/images/domains/cyber.png",
    color: "from-red-500 to-orange-400",
  },
  {
    id: "content",
    title: "Content",
    icon: "EditNote",
    desc: "Telling the lab's story through technical blogs, social copy, and event communications.",
    img: "/images/domains/content.png",
    color: "from-indigo-500 to-blue-400",
  },
  {
    id: "gd",
    title: "GD & UI/UX",
    icon: "Palette",
    desc: "Designing intuitive interfaces and bold graphics through research-driven, human-centered design.",
    img: "/images/domains/uiux.png",
    color: "from-pink-500 to-rose-400",
  },
  {
    id: "video",
    title: "Video",
    icon: "Videocam",
    desc: "Documenting events and crafting cinematic reels, with visual storytelling through the lens.",
    img: "/images/domains/videography.png",
    color: "from-fuchsia-500 to-pink-400",
  },
  {
    id: "marketing",
    title: "Marketing",
    icon: "Campaign",
    desc: "Driving outreach, sponsorships, and campaigns that amplify the lab's presence and impact.",
    img: "/images/domains/marketing.png",
    color: "from-orange-500 to-amber-400",
  },
  {
    id: "admin",
    title: "Administration",
    icon: "BusinessCenter",
    desc: "Running operations, events, and logistics, the backbone that keeps the lab moving.",
    img: "/images/domains/admin.png",
    color: "from-slate-500 to-gray-400",
  },
];
