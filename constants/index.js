import homeImg from "../public/home.png";
import resumeImg from "../public/resume.png";
import git from "../public/git.png";
import transaction from "../public/transaction.png";
import task from "../public/task.png";
export const baseskills = [
  {
    name: "HTML",
    percentage: 98,
  },
  {
    name: "CSS",
    percentage: 94,
  },
  {
    name: "JS",
    percentage: 96,
  },
  {
    name: "JQUERY",
    percentage: 90,
  },
  {
    name: "XML",
    percentage: 80,
  },
  {
    name: "JAVA",
    percentage: 75,
  },
];

export const coreskills = [

  {
    name: "REACT JS",
    percentage: 96,
  },
  {
    name: "NODE JS",
    percentage: 80,
  },
  {
    name: "TAILWIND CSS",
    percentage: 96,
  },
  {
    name: "SCSS",
    percentage: 94,
  },

];

export const databaseskills = [
  {
    name: "FIREBASE",
    percentage: 90,
  },
  {
    name: "SQL",
    percentage: 72,
  },
  {
    name: "MONGODB",
    percentage: 76,
  },
];

export const toolskills = [

  {
    name: "GIT",
    percentage: 90,
  },

  {
    name: "Postman",
    percentage: 80,
  },
];

export const experience = [
  {
    title: "Journey Started",
    subtitle: "Web Development",
    description:
      "I started my Web Development journey with HTML, CSS & JavaScript. Then I learned multiple libraries and framework i.e. ReactJS, JQuery, etc. including NodeJS.",
    date: "Feb 2023",
    category: "Story Started",
  },
  {
    title: "Internship",
    subtitle: "Web Developer",

    description: "I worked as a Frontend Developer Intern at Employee Forums where I worked on a large React codebase, improved UI performance and security, and built real-world features in a collaborative product team environment.",
    date: "Jun 2025",
    category: "Internship",
  }

];

export const projects = [
  {
    name: "AI-Powered News Aggregator",
    description:
      "The AI News Aggregator and Summarizer, powered by the MERN stack and integrated with the ChatGPT API, represents a cutting-edge solution to the modern challenge of accessing relevant and trustworthy news amidst the vast array of online sources",
    tags: ["Cheerio", "NodeJS", "Gemini"],
    image: homeImg,
    url: "https://news-scrape.netlify.app/"

  },
  {
    name: "HyperATS-Intelligent-Resume-Analysis-Engine",
    description:
      "HyperATS is an AI-powered resume analysis engine that helps job seekers improve their resumes by analyzing them against job descriptions and providing ATS scores, strengths, weaknesses, and actionable suggestions.",
    tags: ["ReactJS", "NodeJS", "TailwindCSS", "AI"],
    image: resumeImg,
    url: "https://github.com/Sayyamjain23/HyperATS-Intelligent-Resume-Analysis-Engine",
  },

  {
    name: "GitInsight",
    description:
      "Built an AI-assisted system that automatically analyzes repositories, generates README documentation, and provides intelligent code quality and security insights to improve maintainability and team productivity.",
    tags: ["GithubAPI", "ReactJS", "TailwindCSS"],
    image: git,
    url: "https://github.com/Sayyamjain23/Github-Repo-Management-Tool",
  },
  {
    name: "Real-time-Transaction-Audit-Log-System",
    description: "This project implements a secure, atomic transaction system for fund transfers between users, coupled with a robust audit logging mechanism. It demonstrates backend transactional integrity using MongoDB Sessions and modern frontend practices for real-time updates.",
    tags: ["NodeJS", "Zustand", "MongoDB"],
    image: transaction,
    url: "https://github.com/Sayyamjain23/Real-time-Transaction-Audit-Log-System",
  },
  {
    name: "Task Manager",
    description: "TaskFlow is a modern, feature-rich task management application built with React, Redux, and TypeScript. It offers a clean, intuitive interface with dark mode support and smooth animations",
    tags: ["ReactJS", "Redux", "TypeScript", "Framer-Motion"],
    image: task,
    url: "https://tiny-taffy-6e7c30.netlify.app/"
  }
];
