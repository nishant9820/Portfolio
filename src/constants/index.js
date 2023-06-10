import {
  mobile,
  backend,
  creator,
  web,
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
  blogperson,
  figma,
  docker,
  cinebook,
  meta,
  threejs,
  netflix,
  insta,
  facebook,
  twitter,
  blog,
  managehub,
} from "../assets";

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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Data Structure Algorithm",
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
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
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
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const socials = [
  {
    title: "Instagram",
    icon: insta,
    social_url: "https://www.instagram.com/nishant_desai8/",
  },
  {
    title: "Facebook",
    icon: facebook,
    social_url: "https://www.facebook.com/profile.php?id=100010794885920",
  },

  {
    title: "Twitter",
    icon: twitter,
    social_url: "",
  },
  {
    title: "Blog",
    icon: blog,
    social_url: "https://getknowledgeonile.blogspot.com/",
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "ReactJs",
    icon: reactjs,
    iconBg: "#383E56",
    date: "July 2022 - Jan 2023",
    points: [
      "Strong React.js foundation: Master the basics of React.js, including components, props, and state management.",
      "JavaScript proficiency: Excel in JavaScript fundamentals to write clean and efficient React code.",
      "Component reusability: Create reusable and modular components for easier maintenance and code organization.",
      "Efficient data handling: Skillfully manage state and data flow within your React applications.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "React Native",
    icon: nodejs,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Feb 2023",
    points: [
      "Proficient in React Native: Master the ins and outs of React Native to develop cross-platform mobile applications.",
      "JavaScript expertise: Excel in JavaScript fundamentals and ES6+ features for efficient React Native development.",
      "Component-based UI development: Build modular and reusable UI components for a seamless mobile user experience.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Website",
    icon: web,
    iconBg: "#383E56",
    date: "Dec 2022 - Mar 2023",
    points: [
      "Strong HTML, CSS, and JavaScript skills: Master the core web technologies for creating engaging and interactive websites.",
      "Responsive design expertise: Build websites that adapt seamlessly to different screen sizes and devices for an optimal user experience.",
      "Proficiency in front-end frameworks: Excel in popular front-end frameworks like React, Angular, or Vue.js to develop robust and scalable web applications.",
      "Back-end integration and API knowledge: Understand how to integrate with back-end systems, handle data exchange through APIs, and develop server-side functionality for dynamic web applications.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
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

const blogs = [
  {
    blog: " Introducing iOS 17: Exploring Apple's Latest Innovation in Mobile Operating Systems and Applications",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: blogperson,
    blog_url:
      "https://getknowledgeonile.blogspot.com/2023/06/introducing-ios-17-exploring-apples.html",
  },
  {
    blog: " Title: Unleashing the Potential of React Native: Building Powerful Cross-Platform Mobile Apps with Ease",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: blogperson,
    blog_url:
      "https://getknowledgeonile.blogspot.com/2023/06/title-unleashing-potential-of-react.html",
  },
  {
    blog: " Title: Unleashing the Potential of React Native: Building Powerful Cross-Platform Mobile Apps with Ease",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: blogperson,
    blog_url:
      "https://getknowledgeonile.blogspot.com/2023/06/title-unleashing-potential-of-react.html",
  },
];

const projects = [
  {
    name: "Netflix",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "stripe-api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/nishant9820/netflix-clone",
    main_link: "https://netflix-clone-ten-cyan.vercel.app/",
  },
  {
    name: "CineBook",
    description:
      "A go-to movie booking app. Browse, select, and book tickets for the latest blockbusters with ease. Enjoy convenience and excitement at your fingertips.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "stripe-api",
        color: "green-text-gradient",
      },
      {
        name: "moviedb",
        color: "pink-text-gradient",
      },
    ],
    image: cinebook,
    source_code_link: "https://github.com/",
    main_link: "https://netflix-clone-ten-cyan.vercel.app/",
  },
  {
    name: "ManageHub",
    description:
      "An automated management system for maintaining multiple visitors information, contact information, vehicle counts of owners,complaints and maintenance bills.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase-db",
        color: "green-text-gradient",
      },
      {
        name: "stripe-api",
        color: "pink-text-gradient",
      },
    ],
    image: managehub,
    source_code_link: "https://github.com/",
    main_link: "https://netflix-clone-ten-cyan.vercel.app/",
  },
];

export { services, technologies, experiences, blogs, projects, socials };
