const fs = require('fs');
const glob = require('glob');

const files = [
  "components/teamPage/TeamHeader.tsx",
  "components/homePage/InteractiveTimeline.tsx",
  "app/webinar/page.tsx",
  "app/work/page.tsx",
  "app/team/page.tsx",
  "app/events/page.tsx",
  "app/contact/page.tsx",
  "app/alumni/page.tsx",
  "app/achievements/page.tsx"
];

files.forEach(file => {
  const path = `d:/prj/iotkiit-official/${file}`;
  if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    
    // Replace the common gradient span with a regular span or just text-brand-blue if it's already a span
    content = content.replace(/<span className="bg-gradient-to-r[^"]*bg-clip-text text-transparent">/g, '<span>');
    content = content.replace(/<span className="font-display text-5xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">/g, '<span className="font-display text-5xl font-black text-brand-blue">');
    
    fs.writeFileSync(path, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
