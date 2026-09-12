export const projectsData = [
  {
    title: "Fortis Nexus",
    description: "Developed a mentor–mentee matching system for thesis that applies a modified Gale–Shapley stable matching algorithm and weighted compatibility scoring. The system extracts technical keywords from mentor and mentee profiles and uses cosine similarity to measure research alignment, enabling stable and compatible mentor–mentee pairings.",
    stack: ["TypeScript", "Python", "Supabase", "NextJS", "NodeJS", "Express"],
    content: "Fortis Nexus is a web-based mentor–mentee matching system designed to support thesis mentorship by connecting students with mentors whose expertise aligns with their research needs. The system extracts and analyzes research interests and technical domains from mentor and mentee profiles, then uses cosine similarity to measure compatibility and a modified Gale–Shapley algorithm to generate stable mentor–mentee pairings. For example, a mentee conducting research in machine learning will be matched with a mentor who has expertise in machine learning and related areas, ensuring relevant guidance throughout the thesis development process.",
    websiteLink: "https://project-fs1om.vercel.app/",
    githubRepo: "https://github.com/ieqisg/fortis-nexus"
  },
  {
    title: "Money Tracker",
    description: "Developed a full-stack expense tracking system with complete CRUD functionality for managing user income and expenses. Designed with scalability, maintainability, and clean architecture in mind and applying real-world practices while continuously refactoring the codebase to improve performance, structure, and overall code quality.",
    stack: ["React", "Typescript", "Postgresql", "Tanstack query", "NodeJS", "Express"],
    content: "Expense Tracker is a web-based financial tracking application designed to manage monthly income and expenses. It serves as a practical learning project for exploring full-stack development, CRUD operations, code optimization, refactoring, and real-world technologies and frameworks. Planned improvements include AI-powered receipt data extraction and migrating the backend from Express.js to Java Spring Boot.",
    website: "",
    githubRepo: "https://github.com/ieqisg/money-tracker"
  },
  {
    title: "Scheduler",
    description: "Built a web-based scheduler that scrapes course offerings from FEU Tech’s SOLAR system and generates all conflict-free schedule combinations ranked by user preferences, prioritizing fewer face-to-face days, fewer face-to-face sections, and fewer early morning classes.",
    stack: ["HTML", "Javascript", "NodeJS", "Express"],
    content: "",
    githubRepo: "https://github.com/ieqisg/Scheduler"
  },

];
