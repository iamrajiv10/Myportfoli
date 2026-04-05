export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const EXPERIENCE = [
  {
    company: "SherTech Info",
    role: "Software Engineer",
    duration: "May 2024 - Present",
    location: "Noida (WFH), India",
    description: [
      "Contributed to a US-based mental healthcare platform using React.js and Material-UI.",
      "Developed an Idle Timer feature to enhance application security and session management.",
      "Integrated RESTful APIs to enable seamless communication between frontend and backend.",
      "Explored Agentic AI capabilities to improve workflow automation."
    ],
    tech: ["React.js", "Material-UI", "REST APIs", "Agentic AI"]
  },
  {
    company: "Leadrat",
    role: "Software Engineer",
    duration: "April 2023 - March 2024",
    location: "Bengaluru, Karnataka, India",
    description: [
      "Worked on a real estate platform using Angular, JavaScript, Bootstrap, HTML, and CSS.",
      "Collaborated with UX/UI designers to translate design concepts into functional features.",
      "Conducted code reviews and participated in team discussions for code quality.",
      "Integrated REST APIs for dynamic data handling."
    ],
    tech: ["Angular", "JavaScript", "Bootstrap", "REST APIs"]
  },
  {
    company: "XO Enterprises",
    role: "Software Engineer",
    duration: "June 2021 - April 2023",
    location: "Lucknow, India",
    description: [
      "Worked in the CCTV and security solutions domain, developing company websites and applications.",
      "Designed and developed responsive web interfaces using HTML, CSS, JavaScript, and React.",
      "Maintained and updated web platforms for reliability and performance."
    ],
    tech: ["HTML", "CSS", "JavaScript", "React"]
  }
];

export const PROJECTS = [
  {
    title: "YouTube Clone",
    duration: "Jan 2024",
    description: "Feature-rich video streaming interface with efficient pagination, live chat functionality, and nested comment systems.",
    tech: ["React", "Tailwind CSS", "Redux"],
    link: "https://youtube-clone-two-tau.vercel.app/", // Placeholder
    image: "/projects/youtube.png",
    github: "https://github.com/iamrajiv10/youtube-clone"
  },
  {
    title: "Netflix GPT",
    duration: "Jan 2024",
    description: "Interactive movie browsing platform with multi-language support (bilingual) and third-party API integration for real-time data.",
    tech: ["React.js", "Redux", "Tailwind CSS", "GPT API"],
    link: "https://netflix-gpt-seven-sepia.vercel.app/", // Placeholder
    image: "/projects/netflix.png",
    github: "https://github.com/iamrajiv10/netflix-gpt"
  }
];

export const SKILLS = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "HTML", "CSS"]
  },
  {
    category: "Frameworks/Libraries",
    items: ["React.js", "AngularJS", "Node.js", "Express.js", "Redux", "Bootstrap", "Tailwind CSS", "Material UI"]
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "Mongoose"]
  },
  {
    category: "Other",
    items: ["REST APIs", "AWS", "Agentic AI"]
  }
];

export const SOCIAL_LINKS = {
  github: "https://github.com/iamrajiv10",
  linkedin: "https://linkedin.com/in/rajiv-kumar-259095215/",
  email: "iamrajiv10@gmail.com",
  portfolio: "https://rajiv-kumar-portfolio.netlify.app/"
};
