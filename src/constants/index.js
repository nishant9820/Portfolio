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
  starbucks,
  tesla,
  shopify,
  jobit,
  tripguide,
  threejs,
  netflix,
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
  {
    id: "Hello",
    title: "Hello",
    url: "http://www.netflix.com",
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
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
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
    image: tripguide,
    source_code_link: "https://github.com/",
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

export { services, technologies, experiences, blogs, projects };
