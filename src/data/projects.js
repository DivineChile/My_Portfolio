export const personalInfo = {
  name: "Chile",
  fullName: "Divine Chigere Chile",
  role: "Front-end Developer & IT Specialist",
  location: "Bonny Island, Rivers State, Nigeria",
  email: "divinechile16@gmail.com",
  phone: "+234 816 740 1840",
  bio: "Front-end developer based in Bonny Island, Rivers State, Nigeria — crafting clean, responsive web interfaces with a focus on performance, continuous learning, and precision.",
  resumeViewUrl:
    "https://drive.google.com/file/d/18duDn0521QPsv21a4QdGmq4bnp8wfhOl/view",
  resumeDownloadUrl:
    "https://drive.google.com/uc?export=download&id=18duDn0521QPsv21a4QdGmq4bnp8wfhOl",
  socials: {
    github: "https://github.com/DivineChile",
    linkedin: "https://www.linkedin.com/in/divine-chigere-chile/",
    twitter: "https://x.com/divinechile16",
  },
};

export const projects = [
  {
    id: "zeedara",
    title: "Zeedara",
    tagline:
      "Modern fashion e-commerce platform for style-conscious consumers.",
    category: "Full Stack",
    year: "2026",
    image: "/public/images/zeedara-min.png",
    tags: ["React", "Tailwind CSS", "Python", "API Integration"],
    githubUrl: "https://github.com/cedarsprohub/Zeedara_FrontEnd",
    demoUrl: "https://zeedara.com",
    featured: true,
    overview:
      "A full-stack e-commerce platform with easy navigation, payment processing, and dashboard functionalities. Built with modern web technologies and best practices.",
    architecture: [
      "Engineered responsive product display interface with intuitive user interactions.",
      "REST API integration for managing catalogue data, search indexing, and real-time category filtering.",
      "Accessible UI layout optimized for both desktop and mobile viewing.",
    ],
    metrics: [
      { label: "Category", value: "Full Stack" },
      { label: "Frontend", value: "React" },
      { label: "Deployment", value: "Microsoft Azure" },
    ],
  },
  {
    id: "cedars-pro-hub",
    title: "Cedars Productivity Centre",
    tagline:
      "Multi-page corporate tech platform presenting enterprise services, solutions, and client channels.",
    category: "Full Stack",
    year: "2025",
    image: "/public/images/cedarsImg-min.png",
    tags: ["React", "ChakraUI", "Python", "API Integration"],
    githubUrl: "#",
    demoUrl: "https://cedarsprohub.com",
    featured: true,
    overview:
      "A multi-page tech company website featuring fully responsive web design, animations, interactive newsletter, and customer contact workflows.",
    architecture: [
      "Multi-route navigation structure with animated page transitions and dynamic content sections.",
      "Integrated contact forms and newsletter subscription endpoints with backend validation.",
      "Performance-tuned asset delivery ensuring rapid first-contentful paint across mobile networks.",
    ],
    metrics: [
      { label: "Type", value: "Production Site" },
      { label: "Status", value: "Live" },
      { label: "Stack", value: "React + Python" },
    ],
  },
  {
    id: "dc-portfolio",
    title: "DC Portfolio",
    tagline:
      "Responsive personal developer portfolio showcasing engineering projects, stack, and interactive forms.",
    category: "Frontend",
    year: "2026",
    image: "/public/images/portfolio-min.png",
    tags: ["React", "TailwindCSS", "React Icons", "EmailJS"],
    githubUrl: "https://github.com/DivineChile/my-portfolio",
    demoUrl: "https://my-portfolio-ten-ochre-86.vercel.app",
    featured: true,
    overview:
      "A designed Portfolio Website showcasing projects and technical skills. Featuring animated components, smooth scrolling, and a functional contact form.",
    architecture: [
      "JavaScript typing across component props, data models, and event handlers.",
      "Smooth scroll synchronization with offset navbar calculations for in-page anchors.",
      "EmailJS integration providing direct client-side form submissions.",
    ],
    metrics: [
      { label: "Type", value: "Portfolio" },
      { label: "Language", value: "JavaScript" },
      { label: "Hosting", value: "Vercel" },
    ],
  },
  {
    id: "inventory-ms",
    title: "Inventory Management System",
    tagline:
      "Web application for managing organizational inventory, stock levels, and supply audits.",
    category: "Full Stack",
    year: "2024",
    image: "/public/images/inventory-min.png",
    tags: ["HTML", "CSS", "JavaScript", "TailwindCSS", "PHP", "MySQL"],
    githubUrl: "https://github.com/DivineChile/Inventory_MS",
    demoUrl: "#",
    featured: false,
    overview:
      "A responsive inventory management system built with PHP and MySQL, featuring user authentication, stock tracking, and real-time data updates.",
    architecture: [
      "Relational MySQL schema design with parameterized queries preventing SQL injection vulnerabilities.",
      "Role-based authentication session management for administrative and standard staff access.",
      "Tailwind CSS dashboard layout with responsive data tables and search filtering.",
    ],
    metrics: [
      { label: "Backend", value: "PHP & MySQL" },
      { label: "Styling", value: "Tailwind CSS" },
      { label: "Auth", value: "Role-Based" },
    ],
  },
  {
    id: "library-ms",
    title: "Library Management System",
    tagline:
      "Full-featured library management application for tracking catalog inventory, loans, and returns.",
    category: "Full Stack",
    year: "2024",
    image: "/public/images/library-min.png",
    tags: ["HTML", "CSS", "JavaScript", "TailwindCSS", "PHP", "MySQL"],
    githubUrl: "https://github.com/DivineChile/Library_MS",
    demoUrl: "#",
    featured: false,
    overview:
      "A full-featured library management web application for cataloging books, managing member accounts, and recording loan/return transactions.",
    architecture: [
      "CRUD transaction pipeline for book checkout, return processing, and overdue tracking.",
      "Clean tabular interfaces with instant client-side search across book titles and authors.",
      "Normalized relational database structure ensuring strict referential integrity.",
    ],
    metrics: [
      { label: "Database", value: "MySQL" },
      { label: "Logic", value: "PHP" },
      { label: "Frontend", value: "Vanilla JS" },
    ],
  },
  // {
  //   id: "zeedara",
  //   title: "Zeedara",
  //   tagline:
  //     "Modern streaming platform for entertainment lovers built with React.js and responsive UI.",
  //   category: "Full Stack",
  //   year: "2025",
  //   image: "/images/zeedara-min.png",
  //   tags: ["React", "Tailwind CSS", "Python", "API Integration"],
  //   githubUrl: "https://github.com/cedarsprohub/Zeedara_FrontEnd",
  //   demoUrl: "https://zeedara.com",
  //   featured: true,
  //   overview:
  //     "A full-stack e-commerce platform with easy navigation, payment processing, and dashboard functionalities. Built with modern web technologies and best practices.",
  //   architecture: [
  //     "Engineered responsive video player interface with custom media controls and playback state handlers.",
  //     "REST API integration for streaming catalogue data, search indexing, and real-time category filtering.",
  //     "Accessible UI layout optimized for both desktop and mobile viewing.",
  //   ],
  //   metrics: [
  //     { label: "Category", value: "Full Stack" },
  //     { label: "Frontend", value: "React" },
  //     { label: "Deployment", value: "Cloudflare Pages" },
  //   ],
  // },
];

export const experience = [
  {
    title: "Front-End Development",
    description:
      "Specialized in creating responsive, user-friendly interfaces using React, Next.js, and modern CSS frameworks. Passionate about clean code, accessibility, and performance optimization.",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Chakra UI",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend Development",
    description:
      "Proficient in building secure, scalable applications using PHP and MySQL. Skilled in designing robust backend logic and integrating databases with clean, maintainable code.",
    skills: ["PHP", "MySQL", "Node.js", "Firebase", "REST APIs"],
  },
  {
    title: "IT Specialist & Tooling",
    description:
      "Experienced in diagnosing and resolving technical issues across hardware and software. Dedicated to delivering prompt, effective support and improving overall system efficiency.",
    skills: ["Linux", "Docker", "Git", "GitHub", "Technical Documentation"],
  },
];

export const skillsList = [
  {
    category: "Frontend",
    items: [
      "React",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Chakra UI",
      "HTML5",
      "CSS3",
      "Bootstrap",
    ],
  },
  {
    category: "Backend & Databases",
    items: ["PHP", "MySQL", "Node.js", "Firebase", "REST APIs"],
  },
  {
    category: "Tools & Environments",
    items: ["Git", "GitHub", "Linux", "Docker", "Vite", "VS Code"],
  },
];
