// Member achievements celebrated on the /achievements page. Each links to the
// public LinkedIn post announcing the win. Add new entries here as they happen.

export interface Achievement {
  title: string;
  author: string;
  url: string;
}

export const achievements: Achievement[] = [
  {
    title: "Pentathon (Phase-1) 2025",
    author: "Sohom Chandra",
    url: "https://www.linkedin.com/posts/sohom-chandra-chandra-8212b7286_pentathonphase-1-2025-ctf-experience-activity-7314729278825238529-A5nl",
  },
  {
    title: "Hacktify Battle on TryHackMe",
    author: "Bajinder Kumar",
    url: "https://www.linkedin.com/posts/bajinder-kumar-8139bb275_cybersecurity-hacktifybattle-tryhackme-activity-7308729270187565057-_Rgh",
  },
  {
    title: "Pentathon Champions",
    author: "Parth Yadav",
    url: "https://www.linkedin.com/posts/parthyadav8_cybersecurity-pentathonchampions-teamwork-activity-7180971218244710400-MFRm",
  },
];
