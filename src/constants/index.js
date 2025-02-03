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
  } 
  from "../assets";
  
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
      title: "Ms Office",
      icon: web,
    },
    {
      title: "Editing",
      icon: mobile,
    },
    {
      title: "Influencer",
      icon: mobile,
    },
    {
      title: "Data Analyst",
      icon: backend,
    },
    {
      title: "Quality Assurance",
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
      title: "DIGITAL MARKETTING INTERN",
      company_name: "Blue-mine-technology",
      // icon: starbucks,
      iconBg: "#383E56",
      date: "Present date",
      points: [
        "Assisted in the development of digital marketing campaigns for clients,including email, SEO and SEM, and social media.",
        " Researched potential customers to identify target audiences through surveys and focus groups.",
        "Conducted keyword research and analysis to optimize search engine optimization efforts.",
        "Optimized website content using best practices for SEO..",
      ],
    },
    {
      title: "BLISS CONSULTANCY SERVICES.",
      company_name: "CENTEAL GOVERNMENT PROJECT",
      // icon: ,
      iconBg: "#",
      date: "Jan 2021 - Feb 2022",
      points: [
        "I am currently employed at Bliss Consultancy Services, a BPOCompany.",
        "My position within the company is Junior Tech Lead I work in the technology department at Bliss Consultancy Services",
        "My responsibilities at Bliss Consultancy Services include leadingtechnical projects as a Junior Tech Lead..",
      ],
    },
    {
      title: "CENTRAL GOVERNMENT PROJECT.",
      company_name: "",
      // icon: ,
      iconBg: "#",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Successfully completed the Ayushman Bharat Yojana project for the central government",
        "Achieved success in implementing the project.",
        "Managed a team of 7 employees for the project.",
        "Achieved success in implementing the project.Received the center government project for Ayushman Bharat Yojana.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "DIGITAL MARKETTING",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      source_code_link: "",
      demo_link: "" ,
    },
    {
      name: "BLISS CONSULTANCY SERVICES.",
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
      source_code_link: "",
      demo_link: "" ,
    },
    {
      name: "CENTRAL GOVERNMENT PROJECT.",
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
      demo_link: "http://www.demo.com" ,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };