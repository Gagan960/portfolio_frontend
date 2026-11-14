export const portfolioData = {
  personal: {
    name: "Gagan Kumar",
    firstName: "Gagan",
    lastName: "Kumar",
    role: "Full Stack Developer (MERN) / Software Engineer",
    roles: [
      "Full Stack Developer (MERN)",
      "Software Engineer",
      "React & Node.js Specialist",
      "Production System Builder",
      "IEEE Published Researcher"
    ],
    location: "New Delhi, India",
    email: "gagankumar1102.3@gmail.com",
    phone: "+91-8595812095",
    phoneDisplay: "+91 85958 12095",
    bio: "Full Stack Developer specializing in the MERN stack and modern cloud architectures. Currently building ServExaa (web & mobile service platform) from scratch at Cleanhub India, with a track record of mentoring 20+ developers, publishing AI research with IEEE, and delivering commercial-grade applications to live production.",
    shortBio: "Building high-performance, scalable web applications with clean code, secure authentication, and modern user experiences.",
    avatarUrl: "/profile.webp",
    availability: "Open to Software Engineering & Full Stack Roles",
    resumeUrl: "/Gagan_Kumar_Resume.pdf",
    socialLinks: {
      github: "https://github.com/Gagan960",
      linkedin: "https://linkedin.com/in/gagan-kumar-46b3622ab",
      leetcode: "https://leetcode.com/u/eRkZ8GibfO/",
      email: "mailto:gagankumar1102.3@gmail.com",
      phone: "tel:+918595812095"
    }
  },

  stats: [
    {
      value: "20+",
      label: "Students Mentored",
      description: "Guided through MERN stack, code reviews, and debugging"
    },
    {
      value: "30+",
      label: "Issues Resolved",
      description: "Frontend, backend, and database bugs solved"
    },
    {
      value: "12+",
      label: "REST APIs Built",
      description: "Robust endpoints for marketplace & core services"
    },
    {
      value: "42",
      label: "LeetCode Solved",
      description: "14 Easy, 23 Medium, 5 Hard problems solved"
    },
    {
      value: "40+",
      label: "GitHub Repositories",
      description: "Open source contributions, projects, and utilities"
    },
    {
      value: "1",
      label: "IEEE Publication",
      description: "Research on Disease Prediction using ML & NLP"
    }
  ],

  education: {
    institution: "ABES Engineering College",
    degree: "Bachelor of Technology in Electrical & Computer Engineering",
    duration: "2022 – 2026",
    grade: "CGPA: 7.2",
    location: "Ghaziabad, Uttar Pradesh, India",
    highlights: [
      "Specialized coursework in Data Structures, Algorithms, Web Technologies, and Database Systems",
      "Selected as Student Teaching Assistant for Full Stack Development (MERN)",
      "Authored an IEEE-published research paper during undergraduate study"
    ]
  },

  skills: {
    frontend: [
      { name: "React.js", level: "Advanced", icon: "FaReact", color: "#61DAFB" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "SiJavascript", color: "#F7DF1E" },
      { name: "Tailwind CSS", level: "Advanced", icon: "SiTailwindcss", color: "#06B6D4" },
      { name: "HTML5 & CSS3", level: "Advanced", icon: "FaHtml5", color: "#E34F26" },
      { name: "Responsive UI", level: "Expert", icon: "FaMobileAlt", color: "#8B5CF6" },
      { name: "Framer Motion", level: "Intermediate", icon: "SiFramer", color: "#0055FF" }
    ],
    backend: [
      { name: "Node.js", level: "Advanced", icon: "FaNodeJs", color: "#339933" },
      { name: "Express.js", level: "Advanced", icon: "SiExpress", color: "#FFFFFF" },
      { name: "REST APIs", level: "Advanced", icon: "FaNetworkWired", color: "#10B981" },
      { name: "JWT Authentication", level: "Advanced", icon: "SiJsonwebtokens", color: "#D63AFF" },
      { name: "Role-Based Access (RBAC)", level: "Advanced", icon: "FaUserShield", color: "#F59E0B" },
      { name: "Task Scheduling", level: "Intermediate", icon: "FaClock", color: "#EC4899" }
    ],
    databaseAndCloud: [
      { name: "MongoDB", level: "Advanced", icon: "SiMongodb", color: "#47A248" },
      { name: "SQL", level: "Intermediate", icon: "FaDatabase", color: "#00758F" },
      { name: "AWS Hosting", level: "Intermediate", icon: "FaAws", color: "#FF9900" },
      { name: "Cloudflare", level: "Intermediate", icon: "SiCloudflare", color: "#F38020" }
    ],
    languages: [
      { name: "JavaScript", level: "Advanced", icon: "SiJavascript", color: "#F7DF1E" },
      { name: "Python", level: "Proficient", icon: "FaPython", color: "#3776AB" },
      { name: "SQL", level: "Intermediate", icon: "FaDatabase", color: "#00758F" }
    ],
    tools: [
      { name: "Git", level: "Advanced", icon: "FaGitAlt", color: "#F05032" },
      { name: "GitHub", level: "Advanced", icon: "FaGithub", color: "#FFFFFF" },
      { name: "Postman", level: "Advanced", icon: "SiPostman", color: "#FF6C37" },
      { name: "API Integration", level: "Advanced", icon: "FaExchangeAlt", color: "#06B6D4" },
      { name: "Vite", level: "Advanced", icon: "SiVite", color: "#646CFF" }
    ]
  },

  experience: [
    {
      id: "cleanhub",
      role: "Software Engineer",
      company: "Cleanhub India Private Limited",
      productName: "ServExaa",
      websiteUrl: "https://servexaa.com/",
      playStoreUrl: "https://play.google.com/store/search?q=servexaa&c=apps&hl=en-US",
      location: "Noida, India",
      period: "Apr 2026 – Present",
      isCurrent: true,
      badge: "Full-Time",
      description: "Building ServExaa, a comprehensive digital service platform spanning both a responsive web application (servexaa.com) and an Android mobile application on Google Play Store.",
      achievements: [
        "Architecting and developing core features for the ServExaa service platform using React.js, Node.js, and Express.js.",
        "Engineered REST APIs, subscription workflows, and automated task scheduling systems powering both the web platform and the Android mobile app.",
        "Implemented secure JWT authentication and role-based authorization for protected client routes and user profiles.",
        "Collaborated cross-functionally on third-party API integration, database design, feature enhancements, and production debugging."
      ],
      technologies: ["React.js", "Node.js", "Express.js", "REST APIs", "JWT Auth", "Task Scheduling", "Android API Support"]
    },
    {
      id: "ta-abes",
      role: "Student Teaching Assistant – Full Stack Development (MERN)",
      company: "ABES Engineering College",
      location: "Ghaziabad, India",
      period: "Sep 2025 – Mar 2026",
      isCurrent: false,
      badge: "Academic Mentorship",
      description: "Mentored aspiring engineers in full-stack web development principles, project implementation, and version control best practices.",
      achievements: [
        "Mentored 20+ students in MERN stack development through targeted code reviews, design guidance, and 1-on-1 debugging sessions.",
        "Diagnosed and resolved 30+ complex frontend, backend, and MongoDB database issues, drastically improving student project stability.",
        "Engineered a Git-based tracking system to monitor commits and contributions across 10+ student repositories."
      ],
      technologies: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "Git Tracking", "Code Review"]
    },
    {
      id: "ibm-intern",
      role: "Virtual Internship – Web Development",
      company: "IBM Skill Network",
      location: "Remote",
      period: "Jul 2025 – Aug 2025",
      isCurrent: false,
      badge: "Internship",
      description: "Engineered web applications following modern industry UI standards and agile development practices.",
      achievements: [
        "Developed a responsive food delivery web application using React and Tailwind CSS.",
        "Implemented cart management, dynamic item customization, pricing calculations, and core order workflow APIs.",
        "Ensured seamless cross-device responsiveness and fluid state transitions."
      ],
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "REST APIs", "Cart Management"]
    }
  ],

  projects: [
    {
      id: "amreon-jewellers",
      title: "AMREON Jewellers",
      subtitle: "High-End Luxury Jewelry Showcase & E-Commerce",
      category: "featured",
      isFeatured: true,
      badge: "Featured Freelance Work",
      clientIndustry: "Luxury Retail & Jewelry",
      description: "A production web application built from client requirements to global deployment. Takes high-end jewelry shopping online with ultra-fast page loads, elegant catalogs, and cloud-scale infrastructure.",
      deploymentStory: "Frontend deployed globally on Cloudflare edge CDN for instant load times; backend hosted on AWS for enterprise availability. Proves that real-world engineering goes far beyond local tutorials to production reliability.",
      keyFeatures: [
        "Built for a real client: Translated business requirements into an intuitive, high-conversion jewelry storefront",
        "Frontend deployed through Cloudflare CDN for edge caching and fast global asset delivery",
        "Backend hosted on AWS for robust API services and high uptime",
        "Sophisticated luxury UI design with seamless product discovery and responsive layouts",
        "Bridged code to live production, managing DNS, SSL certificates, and cloud infrastructure"
      ],
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "Cloudflare", "AWS", "REST APIs"],
      liveUrl: "https://amreonjewellers.com",
      githubUrl: null, // Private client repo
      stars: null
    },
    {
      id: "college-marketplace",
      title: "College Marketplace",
      subtitle: "Full-Stack Campus Trading Platform",
      category: "fullstack",
      isFeatured: false,
      badge: "Campus Platform",
      clientIndustry: "Education / E-Commerce",
      description: "A centralized marketplace platform empowering university students and faculty to buy, sell, and trade campus essentials, textbooks, and electronics securely.",
      keyFeatures: [
        "Created a thriving marketplace platform supporting 50+ active campus users",
        "Implemented secure JWT authentication and Role-Based Access Control (RBAC) across 3 distinct user roles (Buyer, Seller, Admin)",
        "Engineered 12+ RESTful APIs handling product listings, advanced filtering, full-text search, multi-field sorting, and image uploads",
        "Designed schema relationships in MongoDB with optimized querying for product categories and user profiles"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs", "Multer"],
      liveUrl: null,
      githubUrl: "https://github.com/Gagan960/College-market-place",
      stars: 0
    },
    {
      id: "smart-health-adviser",
      title: "Smart Health Adviser",
      subtitle: "AI-Powered Disease Prediction System",
      category: "ai-fullstack",
      isFeatured: false,
      badge: "IEEE Research Project",
      clientIndustry: "Healthcare & Artificial Intelligence",
      description: "An intelligent healthcare advisory system integrating Natural Language Processing and Machine Learning to provide accurate symptom-based disease predictions in real time.",
      keyFeatures: [
        "Designed a symptom-based diagnostic pipeline integrating Sentence Transformers for semantic matching and XGBoost classification",
        "Integrated high-performance REST APIs returning sub-2-second disease prediction responses",
        "Contributed directly as the foundational codebase for a peer-reviewed research paper published in IEEE Xplore",
        "Engineered clean user-facing symptom input workflows with responsive medical recommendations"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "Python", "Sentence Transformers", "XGBoost", "Machine Learning"],
      liveUrl: "https://ieeexplore.ieee.org/document/11485698",
      liveText: "View IEEE Publication",
      githubUrl: "https://github.com/Gagan960/disease_AI",
      paperUrl: "https://ieeexplore.ieee.org/document/11485698",
      stars: 0
    }
  ],

  achievements: [
    {
      id: "ieee-publication",
      title: "IEEE Research Paper Publication",
      subtitle: "Hierarchical Disease Prediction System using Sentence Transformers & XGBoost Classification",
      category: "Research",
      date: "Published 2026",
      organization: "IEEE Xplore",
      link: "https://ieeexplore.ieee.org/document/11485698",
      linkText: "Read Paper on IEEE Xplore",
      icon: "FaBookOpen",
      description: "Co-authored peer-reviewed research proposing an AI architecture leveraging Sentence Transformers and XGBoost classification for rapid and accurate disease diagnosis."
    },
    {
      id: "iim-hackathon",
      title: "Top 3 Teams – IIM Lucknow National Hackathon",
      subtitle: "National Level Innovation Challenge",
      category: "Hackathon",
      date: "Competition Winner",
      organization: "IIM Lucknow",
      icon: "FaTrophy",
      description: "Secured a top 3 podium finish among competitive teams across India, developing an innovative tech solution evaluated by industry leaders."
    },
    {
      id: "sih-hackathon",
      title: "Top 50 Teams – Internal SIH Hackathon",
      subtitle: "Smart India Hackathon Institutional Round",
      category: "Hackathon",
      date: "Top Finalist",
      organization: "Smart India Hackathon / ABES",
      icon: "FaAward",
      description: "Ranked among the top 50 teams in the rigorous internal screening round of India's premier national hackathon initiative."
    },
    {
      id: "hackerrank-python",
      title: "3-Star Python Programmer",
      subtitle: "Data Structures & Algorithmic Proficiency",
      category: "Coding",
      date: "Verified",
      organization: "HackerRank",
      link: "https://www.hackerrank.com",
      linkText: "HackerRank Profile",
      icon: "FaStar",
      description: "Awarded 3-Star badge on HackerRank demonstrating strong competencies in Python programming, algorithmic logic, and problem-solving."
    },
    {
      id: "leetcode-stats",
      title: "Active LeetCode Problem Solver",
      subtitle: "42+ Algorithmic Challenges Solved",
      category: "Data Structures & Algorithms",
      date: "Active Profile",
      organization: "LeetCode",
      link: "https://leetcode.com/u/eRkZ8GibfO/",
      linkText: "View LeetCode Profile",
      icon: "SiLeetcode",
      description: "Solved 42 problems (14 Easy, 23 Medium, 5 Hard) across Arrays, Dynamic Programming, Two Pointers, and Graph algorithms."
    }
  ],

  certifications: [
    {
      title: "Full Stack Web Development",
      issuer: "PW Skills",
      icon: "FaCertificate",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "MERN Stack"]
    },
    {
      title: "Python Programming",
      issuer: "Kaggle",
      icon: "FaPython",
      tags: ["Python", "Data Structures", "Algorithms", "Libraries"]
    },
    {
      title: "Problem Solving in C",
      issuer: "NPTEL",
      icon: "FaCode",
      tags: ["C Programming", "Memory Management", "Algorithms", "Pointers"]
    }
  ]
};

