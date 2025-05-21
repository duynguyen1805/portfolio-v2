// import LibraryImage from "@/assets/library.png";
// import SkygazeImage from "@/assets/skygaze.png";
// import TodoImage from "@/assets/todo.png";
import { StaticImageData } from "next/image";
import { cache } from "react";

export interface IProjectData {
  SLUG: string;
  LIVE_PREVIEW?: string;
  GITHUB?: string;
  DESCRIPTION: string[];
  NOTE?: string;
  TECH_STACK: string[];
  IMAGE: StaticImageData;
  HIDDEN: boolean;
}

export const DATA = {
  HEADER: {
    NAME: "Tran Duy Nguyen",
    AGE: "2001",
    PRONOUN: "he/him, Can Tho City",
    HEADLINE:
      "Passionate about building high-performance and scalable web applications.",
    RESUME:
      "https://drive.google.com/file/d/1S5jQEDDtv59uzYzZ6tREjXyyS0G7y_eb/view?usp=drive_link",
    EMAIL: "mailto:tdnguyen.andy@gmail.com",
    GITHUB: "https://github.com/duynguyen1805",
    LINKEDIN: "https://www.linkedin.com/in/nguyen-tran-718301267/",
    FACEBOOK: "https://www.facebook.com/tdn.sb/",
    // GITLAB: "https://gitlab.dxdlabs.dev/duynguyenqwert",
  },

  ABOUT_ME: {
    INTRO:
      "Hey! I'm a Web Backend Developer, majoring in Software Engineering at Can Tho University. I'm passionate about building efficient and scalable backend systems, developing APIs, and optimizing database performance. I enjoy solving complex problems and continuously enhancing my skills towards becoming a Fullstack Developer.",
    EXPERTISE:
      "My expertise lies in Node.js, Nest.js, JavaScript, and TypeScript. I also enjoy working across the stack to bring ideas to life.",
    BLOG: "I would love publishing blogs and sharing insights on web development, best practices, and new technologies.",
  },

  EXPERIENCE: {
    "DxDLabs": {
      WEBSITE: "https://dxdlabs.dev/",
      POSITION: "BackEnd Developer",
      LOCATION: "Remote",
      DURATION: "July, 2024 - Present",
      DESCRIPTION: [
        "Developed and optimized backend systems for client projects.",
        "Designed, implemented, and managed APIs and databases.",
        "Using RabbitMQ, Firebase Notification, WebSocket, and Redis for real-time data processing.",
        "Built and enhanced authentication mechanisms, including OAuth2 and Google Authenticator, ensuring API security and payment transaction processing.",
        "Optimized system performance, improved API response times, and managed system load efficiently.",
        "Collaborated closely with frontend teams and clients to develop features tailored to specific requirements.",
        "Ensuring high-quality product delivery, end on time."
      ],
      TECH_STACK: [
        "Node.js",
        "Express.js",
        "Nest.js",
        "JavaScript",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "RabbitMQ",
        "Firebase",
        "WebSockets",
        "OAuth",
        "Git & Gitlab",
      ],
    },
    "TPSOFT Sortware Technology Co., Ltd.": {
        WEBSITE: "https://tpsoftct.vn/",
        POSITION: "Web Developer Intern",
        LOCATION: "Onsite - Can Tho, Viet Nam",
        DURATION: "May, 2023 - Aug, 2023",
        DESCRIPTION: [
          "Developed key features for the company's website, including: Registration with OTP verification. Search and appointment booking system. Appointment management for clinics. QR code integration for direct appointment booking. Clinic management, examination workflows, email invoicing, and prescription management.",
          "Worked closely with senior developers to optimize system architecture and improve user experience.",
          "Successfully delivered a system that received positive feedback from supervisors and demonstrated practical applicability.",
        ],
        TECH_STACK: [
          "Next.js",
          "Tailwind CSS",
          "Node.js",
          "Express.js",
          "Firebase",
          "MySQL",
          "API Google Maps",
          "Git & Github",
        ],
      },
    // Requestly: {
    //   WEBSITE: "https://requestly.com/",
    //   POSITION: "Product Engineer Intern",
    //   LOCATION: "Hybrid - Delhi, India",
    //   DURATION: "Aug, 2024 - Oct, 2024",
    //   DESCRIPTION: [
    //     "Researched and analyzed various API testing platforms (Kubesense, LevoAI, Wallarm, Traceable, Safe Security, Keploy) to evaluate features, security, and integration capabilities.",
    //     "Worked extensively with AWS services (Lambda, Kinesis, S3, API Gateway, EC2, Route 53) to manage infrastructure, automate processes, and optimize security configurations.",
    //     "Built a To-Do Chrome Extension using Chrome Storage API, enabling users to save and manage tasks directly within their browser.",
    //   ],
    //   TECH_STACK: [
    //     "TypeScript",
    //     "React.js",
    //     "Tailwind CSS",
    //     "AWS",
    //     "Chrome Extensions",
    //     "Git & Github",
    //   ],
    // },
  },

  PROJECTS: {
    "So****um": {
      SLUG: "solorium-website",
      DURATION: "03, 2025 - Now",
      LIVE_PREVIEW: "https://solorium.com/",
      DESCRIPTION: [
        "Designed and developed backend APIs for core features including package purchasing, reward claiming, and affiliate system operations.",
        "Handled multi-level affiliate commission logic and ensured accurate distribution of rewards.",
        "Developed and maintained scheduled cron jobs to automate periodic reward payouts.",
        "Performed database migrations and schema updates to support evolving business logic."
      ],
      TECH_STACK: [
        "Node.js",
        "Nest.js",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "JWT"
      ],
      // IMAGE: SkygazeImage,
      HIDDEN: false,
    },
    "Pa****aw": {
      SLUG: "packdraw-website",
      DURATION: "01, 2025 - 05, 2025",
      // LIVE_PREVIEW: "https://packdraw.dxdlabs.dev/",
      DESCRIPTION: [
        "Designed and developed APIs, managing the system's database.",
        "Estimated API implementation timelines to ensure project deadlines.",
        "Built and optimized security mechanisms to safeguard user accounts.",
      ],
      TECH_STACK: [
        "Node.js",
        "Nest.js",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "JWT",
        "Google Authenticator"
      ],
      // IMAGE: LibraryImage,
      HIDDEN: false,
    },
    "Ka****ox App": {
      SLUG: "karaoke-box-app",
      DURATION: "01, 2025 - Now",
      // LIVE_PREVIEW: "",
      DESCRIPTION: [
        "Develop, maintain, and enhance the system's API.",
        "Research solutions, optimize APIs, and integrate third-party libraries.",
        "Improve data processing performance and optimize WebSocket connections.",
      ],
      TECH_STACK: [
        "Node.js",
        "Nest.js",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "JWT",
        "WebSockets",
        "Minio",
        "NPM Package",
      ],
      HIDDEN: false,
    },
    "D***t": {
      SLUG: "decot-website",
      DURATION: "09, 2024 - 12, 2024",
      LIVE_PREVIEW: "https://app.decot.io/",
      // GITHUB: "https://github.com/Utkarsh-Singhal-26/todo-extension",
      DESCRIPTION: [
        "Develop and optimize existing system functionalities.",
        "Design and implement new features based on customer requirements.",
        "Build APIs, optimize the database.",
      ],
      // NOTE: "Note: The extension is not published on the Chrome Web Store.",
      TECH_STACK: [
        "Node.js",
        "Nest.js",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "JWT",
        "Paypal"
      ],
      // IMAGE: TodoImage,
      HIDDEN: false,
    },
    "Ur****at App": {
      SLUG: "ura-chat-app",
      DURATION: "08, 2024 - 09, 2024",
      // LIVE_PREVIEW: "",
      // GITHUB: "https://github.com/Utkarsh-Singhal-26/todo-extension",
      DESCRIPTION: [
        "Optimize existing features from the previous version. Develop Phase 2 of the project based on additional client requirements.",
        "Integrate multimedia features (sending images, videos, files), calls, and voice messages.",
        "Build member management, permissions, group roles, and settings.",
        "Optimize caching and message queue using Redis and RabbitMQ to ensure transmission speed."
      ],
      // NOTE: "Note: The extension is not published on the Chrome Web Store.",
      TECH_STACK: [
        "Node.js",
        "Nest.js",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "JWT",
        "Firebase",
        "RabbitMQ"
      ],
      // IMAGE: TodoImage,
      HIDDEN: false,
    },
    "2HandMarket (Personal Project)": {
      SLUG: "2handmarket-website",
      DURATION: "08, 2023 - 12, 2023",
      LIVE_PREVIEW: "https://2handmarket.vercel.app/",
      GITHUB: "https://github.com/duynguyen1805/2handmarket",
      DESCRIPTION: [
        "Developed the website interface and backend APIs, ensuring security and data efficiency. Designed and implemented a NoSQL MongoDB database.",
        "Integrated modern authentication methods (JWT, OTP, Google Login).",
        "Implemented RESTful APIs for CRUD operations, search, sorting, and ad management.",
        "Integrated Firestore for real-time messaging and MoMo QR payments."
      ],
      // NOTE: "Note: The extension is not published on the Chrome Web Store.",
      TECH_STACK: [
        "Node.js",
        "Express.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "MongoDB",
        "JWT",
        "Firebase",
        "Socket.io",
        "MoMo Payment"
      ],
      // IMAGE: TodoImage,
      HIDDEN: false,
    },
  },

  ALL_PROJECTS:
    "https://github.com/duynguyen1805?tab=repositories",

  SKILLS: {
    Languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
    Frameworks: [
      "Express.js",
      "Nest.js",
      "Next.js",
      "React",
      "Node.js",
    ],
    // Libraries: [
    //   "TanStack Query",
    //   "Zod",
    //   "Tailwind CSS",
    //   "ShadCN",
    //   "Material UI",
    //   "Ant Design",
    // ],
    "Database & Backend": [
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "Redis",
      "WebSockets",
      "RabbitMQ",
      "Docker",
      "JWT",
      "Google OAuth",
    ],
    // "Cloud & Deployment": [
    //   "Google Cloud Platform (GCP)",
    //   "Amazon Web Services (AWS)",
    //   "Vercel",
    // ],
    "Tools & Platforms": [
      "Git",
      "GitHub",
      "GitLab",
      "Postman",
      "Visual Studio Code",
      "Jira",
    ],
  },
};

export const getProjectData = cache(
  (title: string) =>
    Object.entries(DATA.PROJECTS).find(
      ([, value]) => value.SLUG === title && !value.HIDDEN
    ) as [string, IProjectData] | undefined
);
