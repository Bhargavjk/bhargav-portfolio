import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Bhargav JK",
  title: "Hi all, I'm Bhargav",
  description:
    "Passionate Software Developer with knowledge of JavaScript, React.js, Node.js, HTML, CSS, SQL, REST APIs, and full stack web development.",
  resumeLink: "https://drive.google.com/file/d/1I_00MtBHqEjN_c5Ac72NsYWES3Xw58tY/view?usp=sharing",
};

export const openSource = {
  githubUserName: "bhargavjk",
};

export const contact = {
  title: "Reach Out to Me!",
  description:
    "Software Developer | JavaScript | React.js | Node.js | SQL | Full Stack Web Development",
  phone_number: "+91 8050272650",
  email_address: "jkbhargav007@gmail.com",
  location_map_link: "https://www.google.com/maps/place/Bengaluru,+Karnataka",
  address: "BENGALURU, KARNATAKA",
  avatar_image_path: "/bhargav.jpeg",
};  

export const socialLinks: SocialLinksType = {
  email: "mailto:jkbhargav007@gmail.com",
  github: "https://github.com/bhargavjk",
  linkedin: "https://www.linkedin.com/in/bhargav-jk-68a298255/",
};

export const skillsSection: SkillsSectionType = {
  title: "What I Do",
  subTitle: "SOFTWARE DEVELOPER AND FULL STACK WEB DEVELOPMENT ENTHUSIAST",
  data: [
    {
      title: "Software Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json",
      skills: [
        emoji("⚡ Building responsive web applications"),
        emoji("⚡ Frontend and backend development"),
        emoji("⚡ API integration and debugging"),
      ],
      softwareSkills: [
        { skillName: "Java", iconifyTag: "logos:java" },
        { skillName: "JavaScript", iconifyTag: "logos:javascript" },
        { skillName: "HTML", iconifyTag: "logos:html-5" },
        { skillName: "CSS", iconifyTag: "logos:css-3" },
        { skillName: "React", iconifyTag: "vscode-icons:file-type-reactjs" },
        { skillName: "NodeJS", iconifyTag: "logos:nodejs" },
        { skillName: "MySQL", iconifyTag: "logos:mysql" },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  { Stack: "Frontend", progressPercentage: "85" },
  { Stack: "Backend", progressPercentage: "75" },
  { Stack: "Programming", progressPercentage: "80" },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "B.N.M Institute of Technology",
    subHeader: "B.E Information Science and Engineering",
    duration: "2021 - 2024",
    desc: "",
    grade: "CGPA: 7.22/10",
    descBullets: [],
  },
  {
    schoolName: "Government Polytechnic",
    subHeader: "Diploma in Computer Science Engineering",
    duration: "2018 - 2021",
    desc: "",
    grade: "76.12%",
    descBullets: [],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Software Development Intern",
    company: "KodNest Technologies",
    companyLogo: "/img/icons/common/kodnest.png",
    date: "Dec 2024 - May 2025",
    desc: "Worked on web application development using JavaScript, HTML, CSS, React.js, REST APIs, debugging, frontend development, and backend integration.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Task Management Web Application",
    desc: "Built a full-stack task management application.",
    github: "",
  },
  {
    name: "Real-Time Traffic Violation Detection System",
    desc: "AI-powered traffic violation detection project.",
    github: "",
  },
  {
    name: "AI Resume Screening and Ranking System",
    desc: "AI-based resume screening application.",
    github: "",
  },
];


export const seoData: SEODataType = {
  title: "Bhargav JK",
  description: greetings.description,
  author: "Bhargav JK",
  image: "/img/bhargav.png",
  url: "https://yourportfolio.vercel.app",
  keywords: [
    "Bhargav JK",
    "Software Developer",
    "Portfolio",
  ],
};