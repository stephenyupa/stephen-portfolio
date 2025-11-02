export const siteConfig = {
  name: "Stephen Yupa",
  title: "CS & Economics @ Georgetown • Aspiring AI/ML & SWE",
  description: "Portfolio website of Stephen Yupa",
  accentColor: "#1d4ed8",
  social: {
    email: "stepheny042405@gmail.com",
    linkedin: "https://www.linkedin.com/in/stephen-yupa-sy21/",
    twitter: "https://x.com/stephenyupa",
    github: "https://github.com/stephenyupa",
  },
  // Path or URL to your photo (e.g., "/me.jpg" in public or a hosted URL)
  photo: "/me.jpg",
  resume: "https://drive.google.com/file/d/1U-WwI_9O9R2_np6zZQHN_C1Ys2kWv4hf/view?usp=sharing", 
  aboutMe:
    "My name is Stephen Yupa, and I am a Junior studying Economics and Computer Science at Georgetown University. I am spending a semester abroad in Edinburgh, Scotland. I am passionate about AI/ML engineering and eager to apply my skills to real-world challenges. Beyond coding, I enjoy running, basketball, and singing, which inspire my creativity and problem-solving approach.",
  skills: ["C++", "SQL", "Javascript", "React", "Node.js", "Python", "AWS", "Docker", "Tableau"],
  projects: [
    {
      name: "Financial Foreacasting Model",
      description:
        "Developed a Python tool for S&P 500 forecasting and risk analysis using ARIMA and Prophet models. Automated scenario simulations and risk metrics (VaR, CVaR, volatility) with Tableau-ready exports for real-time decision support.",
      link: "https://github.com/stephenyupa/FinancialForecasting",
      skills: ["Python", "Excel", "Tableau"],
    },
    {
      name: "Damages Analysis & Econometrics Modeling of Wage Inequality",
      description:
        "Designed a reproducible Stata workflow using CPS microdata to model wage disparities by education, gender, and age. Delivered robust regressions and interpretable insights for policy analysis.",
      link: "https://github.com/stephenyupa/CPS_Wage_Disparities",
      skills: ["Stata"],
    },
    {
      name: "Pointerless Disk-Based B+-Tree Indexing Engine",
      description:
        "Engineered a high-performance, pointerless B+-Tree in C++ optimized for disk-based storage. Features efficient insert/search/delete operations, polynomial hashing, and real-time performance tracking via CLI.",
      link: "https://github.com/stephenyupa/P3",
      skills: ["C++"],
    },
  ],
  experience: [],
  education: [
    {
      school: "Georgetown University",
      degree: "Bachelor of Arts in Economics and Computer Science",
      dateRange: "2023 - 2027",
      gpa: "3.877/4.0",
      coursework: [
        "Data Structures & Algorithms",
        "Discrete Mathematics",
        "Object Oriented Programming",
        "Econometrics",
        "Mathematical Statistics",
        "Database Systems",
      ],
      achievements: [
        "Dean's List all semesters",
        "Omicron Delta Epsilon",
      ],
    },
  ],
};
