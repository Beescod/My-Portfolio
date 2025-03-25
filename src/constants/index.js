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
    title: "Web  Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    title: "Frontend Developer",
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
      "User-centric platform for seamless style lounge salon, booking, and management, designed for an intuitive and efficient transportation experience..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { info, services, technologies, experiences, testimonials, projects };
