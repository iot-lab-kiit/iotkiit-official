// AUTO-GENERATED starting point, safe to edit by hand.
// To update the team each year: edit these arrays, then `git push` (Vercel redeploys).
// Photos live in /public/team/<slug>.webp. Members without a photo render an initials avatar.

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

export const coordinators: Person[] = [
  { name: "Aaron Chakraborty", role: "Lab Coordinator", photo: "/team/aaron.webp", objectPosition: "object-top" },
  { name: "Pratham", role: "Kreative Coordinator", photo: "/team/pratham.webp", objectPosition: "object-top" }
];

export const leads: Person[] = [
  { name: "Absar", role: "CP Lead", domain: "Competitive Programming", photo: "/team/absar.webp", objectPosition: "object-top" },
  { name: "Aayush", role: "CP Co-Lead", domain: "Competitive Programming" },
  { name: "Ajay", role: "Video Lead", domain: "Video", photo: "/team/ajay.webp", objectPosition: "object-top" },
  { name: "Adrija", role: "App Dev Lead", domain: "App Dev", photo: "/team/adrija.webp", objectPosition: "object-top" },
  { name: "Kunal", role: "App Dev Co-Lead", domain: "App Dev", photo: "/team/kunal.webp", objectPosition: "object-top" },
  { name: "Suman Saha", role: "IoT Lead", domain: "IoT", photo: "/team/suman.webp", objectPosition: "object-top" },
  { name: "Priyanshu De", role: "Web Lead", domain: "Web Dev", photo: "/team/priyanshu.webp", objectPosition: "object-top" },
  { name: "Adwai", role: "ML Lead", domain: "Machine Learning", photo: "/team/adwai.webp", objectPosition: "object-center" },
  { name: "Shrinkhala", role: "ML Co-Lead", domain: "Machine Learning", photo: "/team/shrinkhala.webp", objectPosition: "object-top" },
  { name: "Bajinder", role: "Cyber Lead", domain: "Cyber Security", photo: "/team/bajinder.webp", objectPosition: "object-top" },
  { name: "Wriddhirupa", role: "Content Lead", domain: "Content", photo: "/team/wriddhirupa.webp", objectPosition: "object-center" },
  { name: "Srinjoy", role: "GD Lead", domain: "GD & UI/UX", photo: "/team/srinjoy.webp", objectPosition: "object-center" },
  { name: "Hemant", role: "GD Co-Lead", domain: "GD & UI/UX", photo: "/team/hemant.webp", objectPosition: "object-top" },
  { name: "Anushka", role: "Marketing Lead", domain: "Marketing", photo: "/team/anushka.webp", objectPosition: "object-center" },
  { name: "Yashovardhan", role: "Marketing Lead", domain: "Marketing", photo: "/team/yashovardhan.webp", objectPosition: "object-top" },
  { name: "Samriddhi", role: "Social Media Manager", domain: "Social Media" }
];

export const members: Person[] = [
  { name: "Aaditya Sah", domain: "Cyber Security" },
  { name: "Aadya singh" },
  { name: "Abhishek Kumar" },
  { name: "Adarsh Kumar", domain: "Competitive Programming" },
  { name: "Adarsh Pal" },
  { name: "Akshit jain" },
  { name: "Aman Singh" },
  { name: "Amrendra" },
  { name: "Ananya Acharya", domain: "Administration" },
  { name: "Ananya Yadav" },
  { name: "Anurag Anand" },
  { name: "Anwesha gupta", domain: "Administration" },
  { name: "Aqifa aziz" },
  { name: "Arpit", domain: "App Dev" },
  { name: "Arpit Kumar" },
  { name: "Arth Parashar" },
  { name: "Aruj Agarwal" },
  { name: "Avrrodeep Banerjee" },
  { name: "Ayush Ranjan", domain: "IoT" },
  { name: "Bhumi Singh", domain: "App Dev" },
  { name: "Chandni Kar" },
  { name: "Chun Chayanika Uday Singh", domain: "Administration" },
  { name: "Divyansh Upadhyay" },
  { name: "Divyesh Jhunjhunwala" },
  { name: "Drupadh K" },
  { name: "Harsh Pal", domain: "Administration" },
  { name: "Harsh singh", domain: "App Dev" },
  { name: "Harsh Vardhan" },
  { name: "Himanshi Saxena", domain: "IoT" },
  { name: "Hitesh Singh" },
  { name: "Jagadish Mohanty" },
  { name: "Jasmeet Kaur" },
  { name: "Komal Singh", domain: "Marketing" },
  { name: "Kushagra", domain: "App Dev" },
  { name: "Laveeza Zafar" },
  { name: "Mohak Bhattacharya", domain: "Web Dev" },
  { name: "Muskan Kumari" },
  { name: "Naman Singh" },
  { name: "Navendu Mishra" },
  { name: "Om prakash ojha" },
  { name: "Prabir Prabhudutta Rout", domain: "IoT" },
  { name: "Prajukta Banerjee" },
  { name: "Pratik Halder", domain: "Web Dev" },
  { name: "Pratyush Shasi Swagati Nishank" },
  { name: "Purab Jana" },
  { name: "Rachit Agarwal" },
  { name: "Rishikesh Mishra" },
  { name: "Ritisha sahni" },
  { name: "Rohit Raj" },
  { name: "Ruhan Saha" },
  { name: "Sai Suman Bebarta", domain: "IoT" },
  { name: "Sanghamitra Sahoo", domain: "Administration" },
  { name: "Sarthak" },
  { name: "Sayan Das", domain: "IoT" },
  { name: "Shivam Ramraika" },
  { name: "Shresth Agrawal" },
  { name: "Shreya Singh", domain: "IoT" },
  { name: "Shreyash Tripathy", domain: "IoT" },
  { name: "Shubham Sinha" },
  { name: "Snigdha Mishra" },
  { name: "Sohom Ch. Chandra" },
  { name: "Soumyajit Mandal" },
  { name: "Souvik Bose" },
  { name: "Subham Pattanaik", domain: "Marketing" },
  { name: "Sumedha G" },
  { name: "Sumeet Singh" },
  { name: "Suraj Nayak", domain: "Administration" },
  { name: "Tamanna Banik", domain: "IoT" },
  { name: "Tanishq Makhija" },
  { name: "Tanmay sharma" },
  { name: "Tanya" },
  { name: "Tarni Verma", domain: "Creative" },
  { name: "Tithi Bera", domain: "Marketing" },
  { name: "Vinayak Tiwari" }
];
