export const profile = {
  name: "Franko Prifti",
  username: "frankoprifti",
  avatar: "https://avatars.githubusercontent.com/u/29095780?v=4",
  title: "Senior React Native Engineer",
  headline:
    "Senior React Native Engineer @ Lendable · Expertise in React.js & React Native",
  tagline:
    "I lead the development of polished, production-grade mobile and web apps with React Native, React, and TypeScript.",
  bio: "With over 7 years of experience in web and mobile development, I have acquired a comprehensive skill set in React, React Native, Node.js, Firebase, and other technologies. I have successfully delivered cross-platform mobile applications using React Native and Flutter, and engineered server-side solutions using Node.js and Firebase. I hold a Master's degree in Business Informatics from the University of Tirana, and I am passionate about learning new technologies and creating high-quality applications.",
  currentCompanies: "Lendable",
  location: "Tirana, Albania",
  timezone: "UTC +02:00",
  email: "frankoprifti@gmail.com",
  phone: "+355696744342",
  website: "https://frankoprifti.github.io",
  contributions: 1892,
  social: {
    github: "https://github.com/frankoprifti",
    linkedin: "https://www.linkedin.com/in/frankoprifti",
    facebook: "https://facebook.com/frankoprifti",
    instagram: "https://instagram.com/frankoprifti",
  },
};

export const stats = [
  { label: "Years of experience", value: "7+" },
  { label: "Projects completed", value: "30+" },
  { label: "Companies worked with", value: "9" },
  { label: "Core technologies", value: "10+" },
];

export const skills = [
  { name: "React (Next.js)", level: 100 },
  { name: "React Native", level: 100 },
  { name: "TypeScript", level: 100 },
  { name: "JavaScript", level: 100 },
  { name: "CSS / SCSS", level: 95 },
  { name: "Node.js", level: 80 },
  { name: "AWS (S3, Amplify, Cognito)", level: 75 },
  { name: "Flutter", level: 75 },
  { name: "Firebase", level: 80 },
  { name: "Jest / Playwright", level: 80 },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
};

export const experience: ExperienceEntry[] = [
  {
    role: "Senior React Native Engineer",
    company: "Lendable",
    period: "Jan 2026 — Present",
    location: "London, United Kingdom",
    description:
      "Building and shipping React Native features for Lendable's consumer fintech app, focused on performance, reliability, and clean architecture.",
  },
  {
    role: "Senior Frontend Developer",
    company: "ReN AI",
    period: "Jan 2025 — Present",
    location: "London, United Kingdom",
    description:
      "Leading the development of a dynamic, AI-powered interface for seamless interaction with a large language model — a core component reused across multiple products to enable intelligent, context-aware experiences.",
  },
  {
    role: "Senior Frontend Developer",
    company: "Horizont Labs",
    period: "Jul 2019 — Jan 2026",
    location: "London, United Kingdom",
    description:
      "Led full-stack delivery across React, Next.js, React Native, Flutter, Node.js, Firebase, AWS (S3, Amplify, Cognito), TypeScript, Checkly, Jest, and Playwright. Acted as team lead and primary client contact, owning architecture, documentation, and code quality.",
  },
  {
    role: "Frontend Instructor (4h / week)",
    company: "Brainster",
    period: "Mar 2024 — Oct 2025",
    location: "Tirana, Albania",
    description:
      "Taught modern frontend (React, TypeScript, tooling) to bootcamp cohorts, mentoring students through assignments and capstone projects.",
  },
  {
    role: "Lead Frontend Developer",
    company: "Coachees",
    period: "Nov 2024 — Apr 2025",
    location: "London, United Kingdom",
    description:
      "Owned architecture and delivery of a React Native mobile app — leading a small team, integrating third-party APIs, running CI/CD and code reviews, and aligning the technical roadmap with Product, Design, and Business.",
  },
  {
    role: "Senior Frontend Developer",
    company: "Jennis",
    period: "Jun 2022 — Nov 2022",
    location: "London, United Kingdom",
    description:
      "Refactored the MVP of a React Native women's hormonal-health platform — integrated native HealthKit (iOS) and Google Fit (Android), shipped OAuth 2.0 with Keychain/Keystore credential storage, and built a Firebase Cloud Messaging push system.",
  },
  {
    role: "Senior Frontend Developer",
    company: "truu",
    period: "Aug 2021 — May 2022",
    location: "London, United Kingdom",
    description:
      "Deployed a TypeScript / React.js dashboard and React Native app for secure digital credential management. Implemented Digital Credential flows with NHS Identity, biometric unlock, certificate pinning, and offline token-refresh — including IE11 web compatibility for NHS rollout.",
  },
  {
    role: "Lead Frontend Developer",
    company: "iiNDYVERSE",
    period: "Jul 2019 — Jul 2021",
    location: "United Kingdom",
    description:
      "Defined the frontend architecture and tech stack. Built a modular React component system, introduced Next.js for SSR/SEO, and integrated AWS S3, Amplify, and Cognito for hosting and authentication.",
  },
  {
    role: "Frontend Developer",
    company: "Semos",
    period: "Jul 2018 — Jun 2019",
    location: "Tirana, Albania",
    description:
      "Built React web apps and React Native mobile apps with consistent cross-platform UX. Integrated Firebase Cloud Messaging for real-time push notifications.",
  },
];

export const education = [
  {
    degree: "Master's degree, Business Informatics",
    school: "University of Tirana",
    period: "Nov 2019 — Jul 2020",
  },
  {
    degree: "Bachelor's degree, Computer Science",
    school: "Universiteti i Tiranës",
    period: "2016 — 2019",
  },
];

export const certifications = [
  {
    name: "Frontend Developer (React) Certificate",
    issuer: "HackerRank",
  },
  {
    name: "React (Basic) Certificate",
    issuer: "HackerRank",
  },
];

export type ProjectCategory = "Web" | "Mobile" | "Other";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  url?: string;
  image?: string;
};

const PROJECT_IMG_BASE = "/projects";

export const projects: Project[] = [
  {
    title: "Zable — Mobile Finance",
    description:
      "Consumer credit & loans app by Lendable, used by 1M+ customers (4.8★ on Google Play). Building React Native features focused on performance and clean architecture.",
    tags: ["React Native", "TypeScript", "Fintech"],
    category: "Mobile",
    url: "https://play.google.com/store/apps/details?id=com.levelcard",
    image: `${PROJECT_IMG_BASE}/zable.jpg`,
  },
  {
    title: "ReN AI",
    description:
      "Financial intelligence platform — stock analysis, peer comparison, ratings, document analysis, and AI-powered insights for public companies.",
    tags: ["React", "TypeScript", "LLM"],
    category: "Web",
    url: "https://app.myrenx.ai",
    image: `${PROJECT_IMG_BASE}/ren-ai.png`,
  },
  {
    title: "Jennis",
    description:
      "Women's hormonal-health platform with HealthKit / Google Fit, OAuth 2.0, and Firebase push.",
    tags: ["React Native", "HealthKit", "Firebase"],
    category: "Mobile",
    url: "https://www.linkedin.com/company/jennis-cyclemapping/",
    image: `${PROJECT_IMG_BASE}/jennis.jpeg`,
  },
  {
    title: "truu",
    description:
      "Secure digital credential management for NHS — biometric unlock, certificate pinning, offline tokens.",
    tags: ["React", "React Native", "NHS Identity"],
    category: "Mobile",
    url: "https://www.linkedin.com/company/truu-id/about/",
    image: `${PROJECT_IMG_BASE}/nhs2.png`,
  },
  {
    title: "iiNDYVERSE Artist Console",
    description:
      "Dashboard for independent artists — managing releases, royalties, and audience growth.",
    tags: ["React", "Next.js", "AWS"],
    category: "Web",
    url: "https://demo.iindy.co",
    image: `${PROJECT_IMG_BASE}/iindy-console.gif`,
  },
  {
    title: "iiNDYVERSE Artist Landing",
    description:
      "Artist landing page template — customizable showcase for releases, tour dates, and merch.",
    tags: ["React", "Next.js"],
    category: "Web",
    url: "https://tommisch.iindy.co",
    image: `${PROJECT_IMG_BASE}/iindy-artist-landing.png`,
  },
  {
    title: "iiNDYVERSE Claim & Wallet",
    description:
      "Web3 claim collection flow and embedded wallet for artist token distribution.",
    tags: ["Next.js", "Web3", "Ethers"],
    category: "Web",
    url: "https://demo.api.iindy.co/c/cKv4qYK",
    image: `${PROJECT_IMG_BASE}/iindy-collectible.png`,
  },
  {
    title: "Cars Insight",
    description:
      "Vehicle inspection and reporting platform with PDF exports and condition tracking.",
    tags: ["Next.js", "React", "Firebase"],
    category: "Web",
    url: "https://carsinsight.xyz",
    image: `${PROJECT_IMG_BASE}/cars-insight.jpg`,
  },
  {
    title: "Cars Insight Mobile",
    description:
      "Companion mobile app for inspectors — capture photos and submit reports on the go.",
    tags: ["React Native", "Firebase", "AdMob"],
    category: "Mobile",
    url: "https://play.google.com/store/apps/details?id=io.github.frankoprifti.carsinsight",
    image: `${PROJECT_IMG_BASE}/cars-insight-mobile.webp`,
  },
  {
    title: "InsightQR",
    description:
      "Dynamic QR code generator with branded designs and real-time scan analytics.",
    tags: ["Next.js", "React", "Firebase"],
    category: "Web",
    url: "https://insightqr.xyz",
    image: `${PROJECT_IMG_BASE}/insight-qr.jpg`,
  },
  {
    title: "FITSQD",
    description:
      "Fitness coaching platform connecting trainers and clients with workouts and progress tracking.",
    tags: ["React Native"],
    category: "Mobile",
    url: "https://play.google.com/store/apps/details?id=com.sqd",
    image: `${PROJECT_IMG_BASE}/fitsqd.png`,
  },
  {
    title: "Parlament.al",
    description:
      "Albanian Parliament transparency portal — votes, sessions, and member profiles.",
    tags: ["React"],
    category: "Web",
    url: "https://www.parlament.al",
    image: `${PROJECT_IMG_BASE}/parlament.png`,
  },
  {
    title: "Movienator Web",
    description:
      "Discover, rate, and build watchlists for movies — built with Flutter web.",
    tags: ["Flutter"],
    category: "Web",
    url: "https://movienator.github.io",
    image: `${PROJECT_IMG_BASE}/movienator-web.png`,
  },
  {
    title: "Movienator Mobile",
    description:
      "Movie discovery on the go — offline watchlists and personalized recommendations.",
    tags: ["Flutter"],
    category: "Mobile",
    url: "https://frankoprifti.itch.io/movienator",
    image: `${PROJECT_IMG_BASE}/movienator-mobile.png`,
  },
  {
    title: "Pokemon UI",
    description:
      "Polished UI demo browsing the Pokémon API with smooth CSS animations and DOM manipulation.",
    tags: ["Next.js", "React", "CSS Animations"],
    category: "Web",
    url: "https://pokemon-ui5.vercel.app/",
    image: `${PROJECT_IMG_BASE}/pokemon.gif`,
  },
  {
    title: "Frassistant",
    description:
      "Voice-driven AI assistant built with p5.js, JavaScript, and the TTS API.",
    tags: ["p5.js", "JavaScript", "TTS API"],
    category: "Web",
    url: "https://frassistant-fp.netlify.app",
    image: `${PROJECT_IMG_BASE}/frassistant.png`,
  },
  {
    title: "Innoscripta News Aggregator",
    description:
      "Multi-source news aggregator with personalized feeds and saved searches.",
    tags: ["Next.js", "NextUI"],
    category: "Web",
    url: "https://innoscripta-task.vercel.app/",
    image: `${PROJECT_IMG_BASE}/innoscripta.jpg`,
  },
  {
    title: "Tech News",
    description:
      "Curated tech news mobile app powered by a WordPress API — built with Flutter.",
    tags: ["Flutter", "WordPress API"],
    category: "Mobile",
    url: "https://play.google.com/store/apps/details?id=com.franko.tech_news",
    image: `${PROJECT_IMG_BASE}/tech-news.png`,
  },
  {
    title: "Payment Tracker",
    description:
      "Personal finance tracker for recurring payments and subscriptions — Flutter.",
    tags: ["Flutter"],
    category: "Mobile",
    url: "https://play.google.com/store/apps/details?id=com.payment_tracker.franko",
    image: `${PROJECT_IMG_BASE}/payment-tracker.png`,
  },
  {
    title: "Punesohu",
    description: "Job board connecting Albanian companies with local talent.",
    tags: ["React", "Firebase"],
    category: "Web",
    url: "https://punesohu.web.app/",
    image: `${PROJECT_IMG_BASE}/punesohu.png`,
  },
  {
    title: "Experience Finder",
    description:
      "Discovery platform for booking unique experiences — TechFest Albania hackathon winner.",
    tags: ["Flutter", "Figma"],
    category: "Mobile",
    url: "https://github.com/erginushi/experience_finder",
    image: `${PROJECT_IMG_BASE}/experience-finder.png`,
  },
  {
    title: "Building Spares",
    description: "E-commerce store for industrial and building spare parts.",
    tags: ["Next.js", "React"],
    category: "Web",
    url: "https://buildingspares.netlify.app/",
    image: `${PROJECT_IMG_BASE}/bs.jpg`,
  },
  {
    title: "Bicycle Speedo",
    description: "Mobile speedometer and ride tracker for cyclists — Flutter.",
    tags: ["Flutter", "Figma"],
    category: "Mobile",
    url: "https://gitlab.com/frankoprifti/bicycle_app",
    image: `${PROJECT_IMG_BASE}/bicycyle-app.png`,
  },
  {
    title: "Fitness App",
    description: "Cross-platform fitness companion with workouts and meal plans.",
    tags: ["React Native", "Expo"],
    category: "Mobile",
    url: "https://github.com/frankoprifti/fitness-app",
    image: `${PROJECT_IMG_BASE}/fitnessapp.gif`,
  },
  {
    title: "Dibbery Landing",
    description: "High-conversion product landing page with rich animations.",
    tags: ["React"],
    category: "Web",
    url: "https://dibbery.co.uk",
    image: `${PROJECT_IMG_BASE}/dibbery-landing.png`,
  },
  {
    title: "Rista Group",
    description: "Corporate website for a multi-brand retail group.",
    tags: ["Next.js", "React"],
    category: "Web",
    url: "https://www.ristagroup.org",
    image: `${PROJECT_IMG_BASE}/ristagroup.png`,
  },
  {
    title: "Arden-Net",
    description: "ISP company site with service plans and customer portal.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web",
    url: "https://arden-net.netlify.app",
    image: `${PROJECT_IMG_BASE}/arden-net.png`,
  },
  {
    title: "Internet Infinity",
    description: "Marketing site for an internet provider with package comparison.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web",
    url: "https://infinityisp.al",
    image: `${PROJECT_IMG_BASE}/infinity.png`,
  },
  {
    title: "Infinit Net",
    description: "Customer-facing portal for billing and connectivity status.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web",
    url: "https://infinit-net.al",
    image: `${PROJECT_IMG_BASE}/infinit-net.png`,
  },
  {
    title: "Horizont Labs",
    description:
      "Studio website with React, Firebase, and the WordPress API for content.",
    tags: ["React", "Firebase", "WordPress API"],
    category: "Web",
    url: "https://horizontlabs.com",
    image: `${PROJECT_IMG_BASE}/horizont.png`,
  },
];

export const testimonials = [
  {
    name: "Kledi Kola",
    role: "CEO, Arden-Net",
    quote:
      "Franko has consistently been there for me whenever I've required assistance — always swift, eager, and thoughtful in his approach.",
    avatar:
      "https://api.dicebear.com/7.x/initials/svg?seed=Kledi%20Kola&backgroundColor=1f6feb&textColor=ffffff",
  },
];
