interface FooterData {
  id: Number;
  facebookLink?: string;
  twitterLink?: string;
  instagramLink?: string;
  linkedinLink?: string;
  githubLink?: string;
  telegramLink?: string;
  mediumLink?: string;
  mailId?: string;
}

interface ContactButtonsProps {
  links: FooterData;
}

interface positionData {
  1: "Coordinator";
  2: "Non-Tech Coordinator";
  3: "Tech Coordinator";
  4: "Administrative Coordinator";
  5: "Team Lead";
  6: "Co-Lead";
  7: "Member";
}
