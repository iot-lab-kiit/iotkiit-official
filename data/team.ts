// Team roster for 2026-27. Edit these arrays by hand, then `git push` (Vercel redeploys).
// Photos live in /public/team/<rollno>.webp (2026-27 intake, named by roll number).
// People carried over from last year keep their old photo in /public/images/legacy-team-images/<slug>.webp.
// People without a photo render a muted placeholder.
// Domains + social links are sourced from the members' own form responses (new.csv).

export interface Person {
  name: string;
  role?: string;
  domain?: string;
  photo?: string;
  // Tailwind object-position for the photo, tuned per-image so no face is cropped.
  // Defaults to object-top when omitted.
  objectPosition?: string;
  linkedin?: string;
  github?: string;
  email?: string;
}

// Board of Coordinators — the lab's top-level board for 2026-27.
export const coordinators: Person[] = [
  {
    name: 'Sumedha Gunturi',
    role: 'Lab Coordinator',
    photo: '/team/2405198.webp',
  },
  {
    name: 'Sai Suman Bebarta',
    role: 'Tech Coordinator',
    photo: '/team/2405754.webp',
  },
  {
    name: 'Jagadish Mohanty',
    role: 'Tech Coordinator',
    photo: '/images/legacy-team-images/jagadish-mohanty.webp',
    linkedin: 'https://www.linkedin.com/in/jagthefriend/',
    github: 'https://github.com/JagTheFriend',
  },
  {
    name: 'Om Prakash Ojha',
    role: 'Non-Tech Coordinator',
    photo: '/images/legacy-team-images/om-prakash-ojha.webp',
    linkedin:
      'https://www.linkedin.com/in/om-prakash-ojha-0a9679282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'Chun Chayanika Uday Singh',
    role: 'Admin Coordinator',
    photo: '/team/24052074.webp',
  },
  {
    name: 'Aadya Singh',
    role: 'Community & Event Management Coordinator',
    photo: '/images/legacy-team-images/aadya-singh.webp',
    linkedin: 'http://linkedin.com/in/aadya-singh-21a3a034a',
  },
];

// Specialized Leads — heads of cross-domain initiatives.
export const specializedLeads: Person[] = [
  { name: 'Snigdha Mishra', role: 'Ideation & Public Speaking Head' },
  {
    name: 'Rishikesh Mishra',
    role: 'KSAC & Outreach Head',
    photo: '/team/24156082.webp',
    linkedin:
      'https://www.linkedin.com/in/rishikesh-mishra-ba20002a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'Farhan Khan',
    role: 'KSAC & Outreach Head',
    photo: '/team/24052344.webp',
  },
  {
    name: 'Shreyash Tripathy',
    role: 'KSAC & Outreach Head',
    photo: '/team/24051580.webp',
    linkedin:
      'https://www.linkedin.com/in/shreyash-tripathy-039088322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'Subham Pattanaik',
    role: 'Logistics & Operations Head',
    photo: '/team/2405094.webp',
  },
  {
    name: 'Arpit',
    role: 'Technical Projects Head',
    photo: '/team/24051540.webp',
    linkedin: 'https://www.linkedin.com/in/arpit-485249322/',
    github: 'https://github.com/Arpit1536',
  },
  { name: 'Hitesh Singh', role: 'Technical Projects Head' },
  {
    name: 'Harsh Kumar',
    role: 'Technical Projects Head',
    photo: '/team/24155246.webp',
  },
];

// Domain Leads — one (or two) leads per domain.
export const leads: Person[] = [
  {
    name: 'Ananya Acharya',
    role: 'Admin Lead',
    domain: 'Administration',
    photo: '/team/24051680.webp',
    linkedin: 'https://www.linkedin.com/in/ananya-acharya-470351346/',
    github: 'https://github.com/Ananya-1801',
  },
  {
    name: 'Anwesha Gupta',
    role: 'Admin Lead',
    domain: 'Administration',
    photo: '/team/2405113.webp',
  },
  {
    name: 'Komal Singh',
    role: 'Marketing Lead',
    domain: 'Marketing',
    photo: '/team/2405730.webp',
  },
  {
    name: 'Akshit Jain',
    role: 'Marketing Lead',
    domain: 'Marketing',
    photo: '/team/2405707.webp',
  },
  {
    name: 'Anima Swain',
    role: 'Social Media Lead',
    domain: 'Marketing',
    photo: '/team/24051390.webp',
  },
  { name: 'Aqifa Aziz', role: 'Creative Lead', domain: 'GD & UI/UX' },
  {
    name: 'Aadarsh Gupta',
    role: 'Creative Lead',
    domain: 'GD & UI/UX',
    photo: '/team/24155221.webp',
  },
  {
    name: 'Abhishek Kumar',
    role: 'Video Lead',
    domain: 'Photo and Video',
    photo: '/team/24157003.webp',
  },
  {
    name: 'Kushagra',
    role: 'App Dev Lead',
    domain: 'App Dev',
    photo: '/team/2406037.webp',
  },
  {
    name: 'Harsh Singh',
    role: 'App Dev Lead',
    domain: 'App Dev',
    photo: '/team/2405655.webp',
    linkedin:
      'https://www.linkedin.com/in/harsh-singh-60a7b432b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/harshkumarsingh12',
  },
  {
    name: 'Prabir Prabhudutta Rout',
    role: 'IoT Lead',
    domain: 'IoT',
    photo: '/team/24155717.webp',
    linkedin: 'https://www.linkedin.com/in/prabir-prabhudutta-rout',
    github: 'https://github.com/prabir-rout',
  },
  {
    name: 'Shreya Singh',
    role: 'IoT Lead',
    domain: 'IoT',
    photo: '/team/24052180.webp',
  },
  {
    name: 'Shivam Ramraika',
    role: 'Web Dev Lead',
    domain: 'Web Dev',
    photo: '/team/24052455.webp',
    linkedin: 'https://www.linkedin.com/in/shivam-ramraika',
    github: 'https://github.com/Ramraika-s',
  },
  {
    name: 'Himanshi Saxena',
    role: 'CP Lead',
    domain: 'Competitive Programming',
    photo: '/team/24155175.webp',
  },
  {
    name: 'Harsh Vardhan',
    role: 'CP Lead',
    domain: 'Competitive Programming',
    photo: '/team/2405055.webp',
  },
  {
    name: 'Aaditya Sah',
    role: 'Cybersecurity Lead',
    domain: 'Cyber Security',
    photo: '/images/legacy-team-images/aaditya-sah.webp',
    linkedin: 'https://www.linkedin.com/in/aadityasah',
    github: 'https://hackerone.com/root___professor?type=user',
  },
  {
    name: 'Arpit',
    role: 'Cybersecurity Lead',
    domain: 'Cyber Security',
    photo: '/team/24051765.webp',
  },
  {
    name: 'Ritisha Sahni',
    role: 'Machine Learning Lead',
    domain: 'Machine Learning',
  },
  {
    name: 'Naman Singh',
    role: 'Machine Learning Lead',
    domain: 'Machine Learning',
    photo: '/team/24052230.webp',
    linkedin: 'https://linkedin.com/in/naman-singh419',
    github: 'https://github.com/NamanSingh69',
  },
];

// Members are rendered grouped by domain on the Team page (see app/team/page.tsx).
// Someone in multiple domains gets one entry per domain, so their name shows up
// in every group they belong to.
export const members: Person[] = [
  // Competitive Programming
  {
    name: 'Aditya Gupta',
    photo: '/team/24052208.webp',
    domain: 'Competitive Programming',
  },
  {
    name: 'Aditya Tiwari',
    photo: '/team/24155151.webp',
    domain: 'Competitive Programming',
  },
  {
    name: 'Ananya Yadav',
    photo: '/team/24158039.webp',
    domain: 'Competitive Programming',
    email: '24158039@kiit.ac.in',
  },
  {
    name: 'Anurag Anand',
    photo: '/team/2405417.webp',
    domain: 'Competitive Programming',
  },
  {
    name: 'Rudransh Singh',
    photo: '/team/251551024.webp',
    domain: 'Competitive Programming',
    email: '251551024@kiit.ac.in',
  },
  {
    name: 'Swastik Biswas',
    photo: '/team/24052392.webp',
    domain: 'Competitive Programming',
  },

  // App Dev
  { name: 'Apoorva Deep', photo: '/team/241551071.webp', domain: 'App Dev' },
  { name: 'Bhumi Singh', photo: '/team/2405719.webp', domain: 'App Dev' },
  {
    name: 'Naveen Kumar Mohanka',
    photo: '/team/25051360.webp',
    domain: 'App Dev',
  },
  { name: 'Piyush Anand', photo: '/team/25051568.webp', domain: 'App Dev' },
  {
    name: 'Pratyush Shasi Swagati Nishank',
    photo: '/team/24155191.webp',
    domain: 'App Dev',
  },
  { name: 'Rewant Rai', photo: '/team/25052014.webp', domain: 'App Dev' },
  {
    name: 'Rudransh Singh',
    photo: '/team/251551024.webp',
    domain: 'App Dev',
    email: '251551024@kiit.ac.in',
  },
  { name: 'Shubham Bhuyan', photo: '/team/25157052.webp', domain: 'App Dev' },
  {
    name: 'Soumyadeep Roy Karmakar',
    photo: '/team/2405842.webp',
    domain: 'App Dev',
    linkedin: 'https://www.linkedin.com/in/soumyadeeprk/',
    github: 'https://github.com/SoumyadeepRoyKarmakar',
  },

  // Web Dev
  { name: 'Abhisekh Nayak', photo: '/team/2405926.webp', domain: 'Web Dev' },
  { name: 'Aditya Jaggi', photo: '/team/2505182.webp', domain: 'Web Dev' },
  {
    name: 'Amrendra Kumar Yadav',
    photo: '/team/24155604.webp',
    domain: 'Web Dev',
  },
  { name: 'Ayush Pathak', photo: '/team/25051683.webp', domain: 'Web Dev' },
  { name: 'Muskan Kumari', photo: '/team/24051784.webp', domain: 'Web Dev' },
  { name: 'Sujal Agarwal', photo: '/team/24051292.webp', domain: 'Web Dev' },
  { name: 'Surarihan Sarkar', photo: '/team/25051326.webp', domain: 'Web Dev' },
  { name: 'Swastik Biswas', photo: '/team/24052392.webp', domain: 'Web Dev' },

  // IoT
  { name: 'Aniket Prakash', photo: '/team/2430079.webp', domain: 'IoT' },
  {
    name: 'Avrrodeep Banerjee',
    photo: '/team/2328158.webp',
    domain: 'IoT',
    linkedin: 'https://www.linkedin.com/in/avrrodeep-banerjee-a8b012241',
    github: 'https://github.com/star-on-earth',
  },
  { name: 'Ayush Ranjan', photo: '/team/24155533.webp', domain: 'IoT' },
  { name: 'Deepraj Banerjee', photo: '/team/2430028.webp', domain: 'IoT' },
  { name: 'Farhan Akhter Khan', photo: '/team/25155307.webp', domain: 'IoT' },
  { name: 'Girika Sarkar', photo: '/team/25052099.webp', domain: 'IoT' },
  { name: 'N Puspanjali Reddy', photo: '/team/2405132.webp', domain: 'IoT' },
  { name: 'Ritesh Behera', photo: '/team/24156084.webp', domain: 'IoT' },
  { name: 'Sayan Das', photo: '/team/2405301.webp', domain: 'IoT' },
  {
    name: 'Shubham Sinha',
    photo: '/team/23051626.webp',
    domain: 'IoT',
    linkedin: 'https://www.linkedin.com/in/cosmic-infinity',
    github: 'https://github.com/Cosmic-Infinity',
  },
  { name: 'Sriram Kondury', photo: '/team/2405388.webp', domain: 'IoT' },
  { name: 'Tamanna Banik', photo: '/team/24052195.webp', domain: 'IoT' },
  { name: 'Yash Raj', photo: '/team/2505718.webp', domain: 'IoT' },

  // Machine Learning
  {
    name: 'Ayush Raj',
    photo: '/team/251551021.webp',
    domain: 'Machine Learning',
  },
  {
    name: 'Pragati Singh',
    photo: '/team/25051640.webp',
    domain: 'Machine Learning',
  },
  {
    name: 'Pranjal Kumar',
    photo: '/team/24155038.webp',
    domain: 'Machine Learning',
  },
  {
    name: 'Sagnik',
    photo: '/team/24052102.webp',
    domain: 'Machine Learning',
  },
  {
    name: 'Sagun Patro',
    photo: '/team/24155199.webp',
    domain: 'Machine Learning',
  },
  {
    name: 'Sanchayan Chakraborty',
    photo: '/team/25051040.webp',
    domain: 'Machine Learning',
  },
  {
    name: 'Shadwal Singh',
    photo: '/team/25051314.webp',
    domain: 'Machine Learning',
  },
  {
    name: 'Siddhidh Chandra',
    photo: '/team/25051448.webp',
    domain: 'Machine Learning',
  },
  {
    name: 'Udit Kumar Jaiswal',
    photo: '/team/25156129.webp',
    domain: 'Machine Learning',
  },

  // Cyber Security
  {
    name: 'Aman Singh',
    photo: '/team/24052361.webp',
    domain: 'Cyber Security',
  },
  {
    name: 'Poorbasha Kar',
    photo: '/team/25052140.webp',
    domain: 'Cyber Security',
    linkedin: 'https://in.linkedin.com/in/poorbasha-kar-0aa5b92a0',
  },
  {
    name: 'Soumyadeep Roy Karmakar',
    photo: '/team/2405842.webp',
    domain: 'Cyber Security',
    linkedin: 'https://www.linkedin.com/in/soumyadeeprk/',
    github: 'https://github.com/SoumyadeepRoyKarmakar',
  },
  {
    name: 'Subham Sekhar Patra',
    photo: '/team/24159018.webp',
    domain: 'Cyber Security',
  },
  {
    name: 'Tanmay Sharma',
    photo: '/team/24051065.webp',
    domain: 'Cyber Security',
  },

  // Content
  { name: 'Jasmeet Kaur', photo: '/team/2405945.webp', domain: 'Content' },
  { name: 'Samridhi Pradhan', photo: '/team/2405603.webp', domain: 'Content' },

  // GD & UI/UX
  { name: 'Aditya Jaggi', photo: '/team/2505182.webp', domain: 'GD & UI/UX' },

  // Photo and Video
  { name: 'Arth Parashar', photo: '/team/2405566.webp', domain: 'Photo and Video' },
  { name: 'Ayush Omkar', photo: '/team/25158034.webp', domain: 'Photo and Video' },
  { name: 'Drupadh K', photo: '/team/24155399.webp', domain: 'Photo and Video' },
  { name: 'Gungun Raj', photo: '/team/2405279.webp', domain: 'Photo and Video' },
  { name: 'Priyanshu', photo: '/team/2507022.webp', domain: 'Photo and Video' },
  { name: 'Ruhan Saha', photo: '/team/24052408.webp', domain: 'Photo and Video' },
  { name: 'Rwik Pal', photo: '/team/25155808.webp', domain: 'Photo and Video' },
  { name: 'Shresth Agrawal', photo: '/team/2405610.webp', domain: 'Photo and Video' },
  { name: 'Soumyajit Mandal', photo: '/team/25155815.webp', domain: 'Photo and Video' },

  // Marketing
  { name: 'Arth Parashar', photo: '/team/2405566.webp', domain: 'Marketing' },
  {
    name: 'Deepraj Banerjee',
    photo: '/team/2430028.webp',
    domain: 'Marketing',
  },
  { name: 'Tanya', photo: '/team/2405170.webp', domain: 'Marketing' },

  // Administration
  {
    name: 'Aayush Kumar Sharma',
    photo: '/team/25051059.webp',
    domain: 'Administration',
  },
  {
    name: 'Akshita Deep',
    photo: '/team/24051080.webp',
    domain: 'Administration',
  },
  {
    name: 'Ashish Kumar',
    photo: '/team/25155061.webp',
    domain: 'Administration',
  },
  { name: 'Gungun Raj', photo: '/team/2405279.webp', domain: 'Administration' },
  { name: 'Harsh Pal', photo: '/team/2405877.webp', domain: 'Administration' },
  {
    name: 'Kritika Sharma',
    photo: '/team/2405733.webp',
    domain: 'Administration',
  },
  {
    name: 'Kumar Manglam Agrawal',
    photo: '/team/2406130.webp',
    domain: 'Administration',
  },
  {
    name: 'Samridhi Pradhan',
    photo: '/team/2405603.webp',
    domain: 'Administration',
  },
  {
    name: 'Shubham Sinha',
    photo: '/team/23051626.webp',
    domain: 'Administration',
    linkedin: 'https://www.linkedin.com/in/cosmic-infinity',
    github: 'https://github.com/Cosmic-Infinity',
  },
];
