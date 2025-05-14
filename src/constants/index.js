import {
  mobile,
  backend,
  creator,
  web,
  github,
  linkedin,
  twitter,
  cv,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import IsaiahImage from '../assets/testimonials/Isaiah.jpeg';
import MosesImage from '../assets/testimonials/Moses.jpeg';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const info = [
  {
    title: "Resume",
    icon: cv,
    link: "/src/assets/CV.pdf",
  },
  {
    title: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/feed/",
  },
  {
    title: "GitHub",
    icon: github,
    link: "https://github.com/Beescod",
  },
  {
    title: "X",
    icon: twitter,
    link: "https://x.com/Abi_Prospa", 
  },
];

const services = [
  {
    title: "UI/UX Designer",
    icon: web,
    link: "/ui-ux-designer",
  },
  {
    title: "Web  Developer",
    icon: mobile,
    link  : "/web-developer",
  },
  {
    title: "Backend Developer",
    icon: backend,
    link: "/backend-developer",
  },
  {
    title: "Content Creator",
    icon: creator,
    link: "/content-creator",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "UI/UX Designer",
    company_name: "HEPHZIBAH EDUTECH ",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2022",
    points: [
      "Designed a CRM dashboard using Figma, improving student enrollment and management workflows.",
      "Conducted user research and implemented an intuitive UI, reducing administrative workload by 40%.",
      "Collaborated with developers to ensure a seamless frontend implementation using React.js & Tailwind CSS.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "RYLA",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Designed and developed a fully responsive registration platform using React.js, Bootstrap, and Cloudinary, enhancing the user experience for over 1,000 participants.",
      "Optimized form validation and data handling, ensuring smooth and error-free registrations.",
      "Integrated Cloudinary for efficient document and image uploads, reducing manual processing by 60%.",
      "Enhanced mobile accessibility, ensuring seamless performance across various devices.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Pemilerin ",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Ecobank",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Prosper turned our vision into a seamless, stunning user experience—beyond what we thought possible",
    name: "Isaiah Johnson",
    designation: "CFO",
    company: "CRM ltd",
    image: IsaiahImage,
  },
  {
    testimonial:
      "I've never worked with a web developer as genuinely invested in their clients' success as Prosper.",
    name: "Moses Wariso",
    designation: "COO",
    company: "DEF Corp",
    image: MosesImage,
  },
  {
    testimonial:
      "After Prosper optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "whale Protocol",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "UX Design",
    description:
      "UX platform for seamless style lounge salon, booking, and stunning management system, designed for an intuitive and efficient transportation experience.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "adobe XD",
        color: "green-text-gradient",
      },
      {
        name: "Adobe Photoshop",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "CRM Dashboard",
    description:
      "Developing a responsive frontend for a CRM web app, enhancing user experience with efficient client management, real-time data updates, and seamless navigation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Web3 Project",
    description:
      "A Web3 frontend exchange enabling   crypto trading, real-time market data visualization, and decentralized asset management with an intuitive user experience.",
    tags: [
      {
        name: "ethersjs",
        color: "blue-text-gradient",
      },
      {
        name: "walletconnect",
        color: "green-text-gradient",
      },
      {
        name: "dapp",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { info, services, technologies, experiences, testimonials, projects };
