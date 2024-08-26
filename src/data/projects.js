import crm_thumbnail from "../../public/assets/TweetHub Project .jpg";
import crmlanding_thumbnail from "../../public/assets/CareerConnectPro.jpg";
import portfolio_thumbnail from "../../public/assets/portfolio_thumbnail.webp";
import thumbnail_4 from "../../public/assets/AI Text Summarizer Project.png";
import thumbnail_5 from "../../public/assets/RoyalTrips Project.jpg";
import thumbnail_6 from '../../public/assets/NexusChat Project.jpg';

const projects = [
  
  {
    title: "TweetHub 🌐",
    thumbnail: crm_thumbnail,
    techStack: ["React.js", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git", "GitHub", "Problem Solving"],
    description:
      "TweetHub is a full-stack social media web application inspired by Twitter. It allows users to share thoughts, follow other users, and interact with posts. This project demonstrates proficiency in both frontend and backend development, API integration, and state management. This project is awesome and also a very user interface.",
    github: "https://github.com/teja-86/TweetHub",
    live: "https://tweethub-adle.onrender.com/",
  },
  {
    title: "NexusChat 💬",
    thumbnail: thumbnail_6,
    techStack: ["React.js", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "REST APIs", "Socket.io", "Zustand", "Multer", "Git", "GitHub", "Problem Solving"],
    description:
      "NexusChat Application, a robust and scalable chat platform built using the MERN stack and powered by Socket.io for real-time communication. It enables users to engage in dynamic, real-time conversations with messages, group chats and user presence notifications.",
    github: "https://github.com/teja-86/NexusChat",
    live: "https://nexuschat-1.onrender.com/",
  },
  {
    title: "CareerConnect Pro 👨🏻‍💻",
    thumbnail: crmlanding_thumbnail,
    techStack: ["React.js", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "Firebase", "REST APIs", "Git", "GitHub", "Problem Solving"],
    description:
      "CareerConnect Pro is a sophisticated job portal built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Firebase for authentication. It includes secure login, job listings, search filters, real-time notifications, and a responsive design, streamlining the job search and recruitment process for users.",
    github: "https://github.com/teja-86/CareerConnect-Pro",
    live: "",
  },
  {
    title: "AI Text Summarizer 🤖",
    thumbnail: thumbnail_4,
    techStack: ["HTML", "CSS", "JavaScript","Node.js", "Express.js", "Postman API"],
    description:
      "The AI Text Summarizer is a web application designed to condense long pieces of text into concise and coherent summaries, leveraging the power of advanced machine learning models. This application aims to enhance productivity by providing quick insights from lengthy documents, articles, or any text-based content. The AI Text Summarizer App was built using Node.js and Express.js for the backend.",
    github: "https://github.com/teja-86/AI-Text-Summarizer",
    live: "",
  },
  {
    title: "Portfolio Website ✨",
    thumbnail: portfolio_thumbnail,
    techStack: ["Next.js", "React.js", "TailwindCSS", "TypeScript"],
    description:
      "A personal portfolio showcasing my projects and skills, providing an interactive platform for visitors to learn about my experience and expertise. This project demonstrates my proficiency in building complex web applications, implementing responsive designs, and ensuring a smooth user experience. It underscores my commitment to leveraging tech.",
    github: "https://github.com/teja-86/Portfolio",
    live: "https://portfolio-wbod.onrender.com/",
  },
  {
    title: "ROYAL Trips ✈️",
    thumbnail: thumbnail_5,
    techStack: ["HTML", "CSS", "JavaScript", "Git", "gitHub", "Web Design"],
    description:
      "The RoyalTrips is a dynamic and interactive platform designed to provide users with comprehensive information about various tourist destinations. Built with modern web technologies, this project aims to offer a seamless and engaging user experience for travelers seeking destination guides, travel tips. Enjoy a seamless experience on any device.",
    github: "",
    live: "https://tangerine-figolla-123be9.netlify.app/",
  },
  
];

export default projects;
