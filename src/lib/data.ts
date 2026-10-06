// Update when a custom domain is connected; used for the sitemap and absolute share URLs.
export const siteUrl = "https://grishma-portfolio-ruddy.vercel.app";

export const caseStudies = [
  { slug: "alipay-plus", title: "Alipay+ cross-border payments" },
  { slug: "fonepay-circle", title: "Fonepay Circle" },
  { slug: "dispute-management", title: "Dispute Management System" },
];

export const insights = [
  {
    slug: "nepal-qr-lessons-for-australia",
    title: "Scan or tap: what Nepal's QR boom can - and can't - teach Australia",
    summary:
      "Nepal's QR payments grew tenfold in three years while Australians barely use QR at all. What the central bank data - and building payment products at Fonepay - says about paying people, trust and real-time payments.",
    date: "October 2026",
    readTime: "5 min read",
  },
];

export const profile = {
  name: "Grishma Amatya",
  role: "Product & Project Delivery | Fintech & Payments",
  tagline:
    "I deliver payment products that people use every day. At Fonepay, Nepal's leading payment network, I led products built for 20M+ customers and 1.7M+ merchants - from bringing Alipay+ cross-border payments to Nepal to cutting dispute resolution time by 30%.",
  // Same wording as before, split into paragraphs for easier reading.
  bio: [
    "I'm a product and project delivery professional who has shipped payment products at Fonepay, Nepal's leading payment network, which handles over 2 million payments a day and 96% of the country's merchant QR payments. I led the Dispute Management System, Alipay+ cross-border payments and the Fonepay Circle peer-to-peer network, taking every project from initiation to deployment and aligning product, engineering and operations along the way.",
    "I'm a team player with an innovative mindset, at my best when bringing people together to solve problems in new ways. Before moving into product, I was a software developer, so I work closely with engineers on technical trade-offs.",
    "Now based in Sydney, I'm a Teaching Academic at Macquarie University, teaching Project Management and Professional Practice.",
  ],
  photo: "/profile/grishma.webp",
  location: "Sydney, NSW, Australia",
  email: "amatya650@gmail.com",
  // Add the résumé to public/ and set this to e.g. "/resume.pdf" to show the download button
  resumeUrl: "",
  socials: {
    linkedin: "https://www.linkedin.com/in/grishma-amatya",
  },
};

export const skills = [
  {
    category: "Product & Delivery",
    proof: "5 Fonepay products led from initiation to deployment",
    items: [
      "End-to-End Product Delivery",
      "Agile & Scrum (Registered Product Owner™)",
      "Requirements & User Stories",
      "Release Management",
      "Process Optimisation",
      "BPMN Process Modelling",
    ],
  },
  {
    category: "Fintech & Payments",
    proof: "Alipay+ · Fonepay Circle · Dispute Management System",
    items: [
      "Cross-Border Payments",
      "Digital Wallets & QR Payments",
      "Dispute Management",
      "Partner Integrations",
      "Transaction Monitoring & Risk",
    ],
  },
  {
    category: "Leadership & Communication",
    proof: "Fonepay delivery teams · Teaching Academic at Macquarie",
    items: [
      "Stakeholder Management",
      "Cross-functional Team Coordination",
      "Business-Tech Translation",
      "Coaching & Training",
    ],
  },
  {
    category: "Tools & Technical",
    proof: "Developer background - NEO HRM, APIs and databases",
    groups: [
      {
        label: "Delivery",
        items: ["JIRA", "Confluence", "MS Project / Trello / Asana", "Miro / Lucidchart", "Figma"],
      },
      {
        label: "Data",
        items: ["Excel (Advanced)", "Power BI / Tableau", "SQL (Oracle, MySQL, SQL Server, SQLite)"],
      },
      {
        label: "Technical",
        items: ["Postman", "Git / GitHub", "Blazor", "CRM, ERP & HRIS"],
      },
    ],
  },
];

export const projects = [
  {
    title: "Alipay+",
    role: "Led from initiation to deployment",
    impact: "11+ countries · 1.7M+ merchants",
    description:
      "Led delivery of Fonepay's Alipay+ integration, letting international visitors pay across Nepal with their home e-wallets such as Alipay, KakaoPay and GCash. Coordinated the Alipay+ team, banks, settlement and finance, compliance and engineering through to deployment.",
    tags: ["Cross-Border Payments", "Fintech", "Partnerships"],
    caseStudy: "/case-studies/alipay-plus",
    image: "/projects/alipay.png",
    imagePosition: "top",
  },
  {
    title: "Fonepay Circle",
    role: "Led from initiation to deployment",
    impact: "Send · Request · Split - with just a mobile number",
    description:
      "Led Fonepay Circle, one of Fonepay's flagship features and similar to Australia's PayID, letting users send money, request payments and split bills using only a mobile number. Turned user flows into clear requirements and worked with the tech team through to deployment, improving transaction success rates and user adoption.",
    tags: ["Product Management", "Payments", "P2P", "PayID-style payments"],
    caseStudy: "/case-studies/fonepay-circle",
    image: "/projects/fonepay-circle.jpg",
    imagePosition: "top",
  },
  {
    title: "Dispute Management System",
    role: "Led from initiation to deployment",
    impact: "30% faster dispute resolution",
    description:
      "Every customer and merchant dispute was handled manually, creating heavy effort for the operations team. I led delivery of a centralised platform that introduced automation for case tracking, resolution workflows and notifications, so teams could resolve disputes faster with far less manual work.",
    tags: ["Fintech", "Product Management", "Operations", "Automation"],
    caseStudy: "/case-studies/dispute-management",
    image: "/projects/dispute.jpeg",
    imagePosition: "left",
  },
  {
    title: "NEO HRM",
    role: "Developer",
    description:
      "Developed features for a comprehensive HR management platform covering the full employee lifecycle - recruitment, onboarding, attendance tracking, leave management and performance evaluation.",
    tags: ["HRIS", "Development"],
  },
  {
    title: "Cashback Management System",
    role: "Led from initiation to deployment",
    description:
      "A platform to automate cashback campaigns for new and existing users, covering calculation, approval, tracking, and reporting to boost user engagement and campaign ROI.",
    tags: ["Product Management", "Growth", "Fintech"],
  },
  {
    title: "Winner Announcement System",
    role: "Led from initiation to deployment",
    description:
      "An automated system for selecting and announcing winners of promotional campaigns, ensuring transparency, accuracy and timely communication with participants.",
    tags: ["Automation", "Product Management"],
  },
];

// Qualities named in the recommendations below, in their own words.
export const recommendationQualities = [
  "Creativity",
  "Analytical skills",
  "Managerial oversight",
  "Ownership",
  "Teamwork",
  "Quality results",
];

export const recommendations = [
  {
    name: "Sweta Kapali Shrestha",
    title: "Ex-Head of PM, Fonepay",
    currentRole: "Now Senior Project Manager, Wealthlane Financial",
    relationship: "Managed Grishma directly",
    source: "LinkedIn recommendation",
    date: "Feb 2026",
    headline: "Creativity and infectious enthusiasm",
    highlights: ["sharp analytical skills", "strong managerial oversight", "outstanding professional"],
    quote:
      "She consistently impressed me with her creativity and infectious enthusiasm. She possesses a rare blend of sharp analytical skills and strong managerial oversight, making her an outstanding professional. Grishma will undoubtedly add significant value to any organization she joins.",
  },
  {
    name: "Babul Shrestha",
    title: "Sr. Business Analyst & Product Owner",
    relationship: "Worked on the same team at Fonepay",
    source: "LinkedIn recommendation",
    date: "Feb 2026",
    headline: "Took ownership of key deliverables",
    highlights: [
      "strong grasp of product workflows",
      "Dispute Management and Fonepay Circle",
      "deliver quality results",
    ],
    quote:
      "She has a strong grasp of product workflows and took ownership of key deliverables, including Dispute Management and Fonepay Circle, one of Fonepay's prominent features. Her professionalism, teamwork, and ability to deliver quality results make her a valuable asset to any organization.",
  },
];

export const experience = [
  {
    role: "Teaching Academic",
    company: "Macquarie University",
    logo: "/logos/macquarie.png",
    period: "Jul 2026 – present",
    bullets: [
      "Facilitating learning in Project Management and Professional Practice by connecting academic theory with real-world industry practice.",
    ],
  },
  {
    role: "Technical Product Coordinator-Lead",
    company: "Fonepay",
    logo: "/logos/fonepay.jpg",
    period: "Feb 2024 – Jul 2025",
    bullets: [
      "Led multi-market payment initiatives from initiation to deployment, including the Dispute Management System, Alipay+, Fonepay Circle, Winner Announcement System, and Cashback Management System, enhancing operational scalability and supporting thousands of daily transactions.",
      "Optimised workflows across cross-functional teams (product, tech, and operations), reducing dispute resolution time by 30% and improving process efficiency.",
      "Implemented system enhancements and monitoring dashboards across the Fonepay platform, strengthening transaction oversight and mitigating operational risk.",
      "Bridged communication between business and technical stakeholders, translating requirements into actionable solutions and improving project delivery speed and quality.",
    ],
  },
  {
    role: "Developer",
    company: "Neosoftware Private Limited",
    logo: "/logos/neosoftware.png",
    period: "Jun 2022 – Feb 2024",
    bullets: [
      "Developed and enhanced web-based applications, including the NEO HRM platform, designing scalable solutions aligned with business requirements and user needs.",
      "Built and integrated backend services, APIs, and database solutions to improve system functionality, data management, and application performance.",
      "Collaborated with cross-functional teams in Agile environments to analyse requirements, troubleshoot issues, and deliver successful software solutions.",
    ],
  },
  {
    role: "CAE Coach",
    company: "Stamford International University",
    logo: "/logos/stamford.png",
    period: "Mar 2018 – Oct 2018",
    bullets: [
      "Coached university students in core computing subjects - data structures and algorithms, operating systems, networking and statistics - through interactive, problem-solving sessions.",
    ],
  },
];

export const education = [
  {
    school: "Macquarie University",
    degree: "Master of Information Systems Management",
    logo: "/logos/macquarie.png",
  },
  {
    school: "University of Sunderland",
    degree: "Computer Systems Engineering",
    logo: "/logos/sunderland.png",
  },
];

export const certifications = [
  {
    title: "Registered Product Owner™",
    issuer: "Agile Education by Scrum Inc.™",
    logo: "/logos/agile-education.png",
    issued: "Oct 2024",
    credentialUrl: "https://s3.amazonaws.com/scruminc-certs/RPO-4516817",
  },
  {
    title: "Agile Project Management",
    issuer: "Google",
    logo: "/logos/google.jpg",
    issued: "Jul 2024",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/6WMCTXX2FTCS",
  },
  {
    title: "Scrum Master Capstone",
    issuer: "Google",
    logo: "/logos/google.jpg",
    issued: "Sep 2024",
    credentialUrl: "https://coursera.org/share/4257b9db405d76a0af459c7b8fc3e884",
  },
  {
    title: "Project Execution: Running the Project",
    issuer: "Google",
    logo: "/logos/google.jpg",
    credentialUrl: "https://coursera.org/share/83641d0c1bca507d808f76bca513b9eb",
  },
  {
    title: "Product Foundations",
    issuer: "Product Vidhyalaya",
    issued: "Apr 2025",
    credentialUrl: "https://credsverse.com/credentials/d01f0231-ed02-481d-b26f-7d6c163951de",
  },
  {
    title: "Product Owner Roles, Scrum & Beyond",
    issuer: "F1Soft International Pvt. Ltd.",
    logo: "/logos/f1soft.png",
    issued: "Mar 2025",
  },
  {
    title: "Mastering Software Architecture",
    issuer: "Nepal Mentor",
    logo: "/logos/nepal-mentor.png",
    issued: "Apr 2025",
  },
];
