type FooterData = {
  id: Number;
  facebookLink: string | undefined;
  twitterLink: string | undefined;
  instagramLink: string | undefined;
  linkedinLink: string | undefined;
  githubLink: string | undefined;
  telegramLink: string | undefined;
  mediumLink: string | undefined;
  mailId: string | undefined;
};

interface ContactButtonsProps {
  links: FooterData;
}
