export const portfolioData = {
  name: "Harshitha Chandaka",
  title: "AI/ML Engineer",
  tagline: "Full-Stack Developer · AI/ML Engineer · Cloud Native Builder",
  email: "harshithachandaka5103@gmail.com",
  phone: "7702809002",
  linkedin: "https://www.linkedin.com/in/harshitha-chandaka/",
  github: "https://github.com/Harshitha-Chandaka",

  summary:
    "Software Engineer with hands-on experience in full-stack development, Artificial Intelligence, and Machine Learning, building scalable, high-performance applications and AI-driven systems. Skilled in developing and deploying cloud-native solutions, including Generative AI, NLP, and intelligent automation. Experienced in end-to-end development, API design, and integrating machine learning models to enhance user experience and optimize workflows. Strong foundation in data-driven problem-solving and system design.",

  education: [
    {
      degree: "Computer Science & Engineering",
      sub: "Bachelor of Technology",
      institution: "Rajiv Gandhi University of Knowledge Technologies (IIIT)",
      location: "Srikakulam, AP",
      period: "Nov 2021 – Apr 2025",
      cgpa: "8.5",
      icon: "🎓",
    },
    {
      degree: "Mathematics, Physics & Chemistry",
      sub: "Pre-University Course (PUC)",
      institution: "Rajiv Gandhi University of Knowledge Technologies (IIIT)",
      location: "Srikakulam, AP",
      period: "Sep 2019 – Nov 2021",
      cgpa: "9.0",
      icon: "📚",
    },
    {
      degree: "10th Grade Achievement",
      sub: "Higher Secondary (SSC)",
      institution: "APSWR School Vangara",
      location: "Srikakulam, AP",
      period: "2018 – 2019",
      cgpa: "9.8",
      icon: "⭐️",
    },
  ],

  skills: [
    {
      category: "Machine Learning & AI",
      icon: "🤖",
      color: "#a855f7",
      items: [
        "TensorFlow",
        "LangChain",
        "LangGraph",
        "FastAPI",
        "Streamlit",
        "MCP",
        "Prompt Engineering",
        "AI Agents",
        "NLP",
        "CNN",
      ],
    },
    {
      category: "Full-Stack Development",
      icon: "💻",
      color: "#06b6d4",
      items: ["React.js", "Node.js", "Express.js", "REST APIs", "FastAPI"],
    },
    {
      category: "Programming",
      icon: "🐍",
      color: "#f59e0b",
      items: ["Python", "JavaScript", "HTML", "CSS"],
    },
    {
      category: "Databases",
      icon: "🗄️",
      color: "#10b981",
      items: ["MySQL", "PostgreSQL", "SQLite", "FAISS Vector Store"],
    },
    {
      category: "Cloud & Tools",
      icon: "☁️",
      color: "#3b82f6",
      items: [
        "Google Cloud Platform",
        "Cloud Run",
        "Cloud Storage",
        "Pub/Sub",
        "VSCode",
        "Jupyter",
        "Google Colab",
      ],
    },
    {
      category: "Fundamentals",
      icon: "⚙️",
      color: "#ec4899",
      items: ["Data Structures & Algorithms", "OOP", "System Design", "API Design"],
    },
  ],

  experience: [
    {
      role: "AI/ML Engineer",
      company: "Quanteon Solutions",
      location: "Hyderabad, Telangana",
      period: "Jan 2026 – Present",
      type: "Full-time",
      color: "#a855f7",
      tech: ["React.js", "Node.js", "FastAPI", "PostgreSQL", "GenAI", "MCP"],
      points: [
        "Developing and maintaining full-stack applications, working across frontend and backend technologies to deliver scalable, high-performance solutions with clean architecture and efficient APIs.",
        "Building AI-driven systems and features, integrating machine learning models and intelligent automation to enhance user experience, optimize workflows, and enable data-driven decision-making.",
      ],
    },
    {
      role: "Machine Learning Engineer Intern",
      company: "Pragyashal Cloud Solutions Pvt. Ltd.",
      location: "Bengaluru, Karnataka",
      period: "Jul 2025 – Dec 2025",
      type: "Internship",
      color: "#06b6d4",
      tech: ["Flask", "Google Cloud", "Cloud Run", "NLP", "Video Intelligence", "Faiss"],
      points: [
        "Architected Clone My Voice, a secure multi-tenant Generative AI application using Google Cloud models, Flask, and Workload Identity with automated audio normalization and strict consent validation.",
        "Contributed to Content Orchestration, an AI-powered intelligent search and storage system using Google Cloud NLP and Video Intelligence APIs.",
        "Built and deployed cloud-native AI prototypes using Cloud Run, Cloud Storage, and Pub/Sub, enabling automated keyword aggregation and interactive visualizations.",
      ],
    },
    {
      role: "Summer Intern",
      company: "NIT Warangal",
      location: "Telangana",
      period: "May 2024 – Jun 2024",
      type: "Research Internship",
      color: "#10b981",
      tech: ["Python", "Machine Learning", "CNN", "Security"],
      points: [
        "Worked under the guidance of Associate Professor K. V. Kadambari on machine learning research.",
        "Developed a machine learning model to detect, classify, and analyze potentially harmful or malicious QR codes.",
      ],
    },
  ],

  projects: [
    {
      title: "Autonomous Multi-Agent Research System",
      emoji: "🔬",
      color: "#a855f7",
      tags: ["LangChain", "Groq", "AI Agents", "Web Scraping"],
      description:
        "Designed an autonomous agentic system for deep-dive market research without human intervention. Implemented a self-correcting workflow that decomposes queries into structured tasks with live web scraping and multi-source data aggregation.",
      highlights: [
        "Self-correcting agentic workflow",
        "Live web scraping & multi-source aggregation",
        "Automated comparative analysis reports (e.g., iPhone vs Pixel)",
      ],
    },
    {
      title: "EasyReach AI – Automated Recruitment Agent",
      emoji: "🎯",
      color: "#06b6d4",
      tags: ["LangChain", "LangGraph", "Groq", "Streamlit", "SQLite"],
      description:
        "Built an automated recruitment pipeline to process bulk resumes with accurate candidate information extraction and automated end-to-end screening workflow.",
      highlights: [
        "Bulk resume processing pipeline",
        "Automated candidate screening",
        "Streamlit UI with SQLite & automated email outreach",
      ],
    },
    {
      title: "LLM ChatBots (RAG-Based Systems)",
      emoji: "💬",
      color: "#f59e0b",
      tags: ["RAG", "LangChain", "FAISS", "Gemini Pro", "Streamlit"],
      description:
        "Built three production-grade RAG chatbots: WebQueryAI (website scraping + FAISS), PDF-Chatbot (PyMuPDF + LangChain), and Invoice Chatbot (Gemini Pro + Tesseract OCR).",
      highlights: [
        "WebQueryAI with BeautifulSoup + FAISS vector store",
        "PDF-Chatbot with PyMuPDF + context-aware responses",
        "Invoice Chatbot with Gemini Pro + Tesseract OCR",
      ],
    },
    {
      title: "Diabetic Retinopathy Classification & Detection",
      emoji: "🔭",
      color: "#10b981",
      tags: ["CNN", "TensorFlow", "Research", "Medical AI", "Genomics"],
      description:
        "Research project exploring correlations between diabetes, retinal damage, and genomic markers to improve early diagnosis. Developed a CNN-based DR classification model using fundus images.",
      highlights: [
        "CNN-based fundus image classification",
        "Genomic marker integration for enhanced accuracy",
        "Early diagnostic improvement research",
      ],
    },
  ],

  certifications: [
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "LinkedIn Learning",
      image: "/images/cert_linkedin_ai.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
      icon: "🎓",
      color: "#0A66C2",
    },
    {
      title: "Prompt Design in Vertex AI",
      issuer: "Google Cloud",
      image: "/images/cert_gcp_prompt.png",
      logo: "https://www.gstatic.com/images/branding/product/2x/google_cloud_64dp.png",
      icon: "☁️",
      color: "#4285F4",
    },
    {
      title: "Build intelligent agents with ADK",
      issuer: "Google Cloud",
      image: "/images/cert_gcp_adk.png",
      logo: "https://www.gstatic.com/images/branding/product/2x/google_cloud_64dp.png",
      icon: "🤖",
      color: "#EA4335",
    },
    {
      title: "Use Machine Learning APIs on Google Cloud",
      issuer: "Google Cloud",
      image: "/images/cert_ml_final.png",
      logo: "https://www.gstatic.com/images/branding/product/2x/google_cloud_64dp.png",
      icon: "☁️",
      color: "#34A853",
    },
  ],

  activities: [
    {
      role: "Quiz Skills Team Representative & Core Member",
      org: "English Literary Club, RGUKT Srikakulam",
      period: "05/2021 – 04/2024",
      desc: "Contributed to content creation, public speaking, and anchoring events.",
      icon: "🎤",
    },
    {
      role: "General Secretary",
      org: "Cultural & Choreography Club",
      period: "2023 – 2024",
      desc: "Led cultural activities and organized major events including Women's Day and Ugadi.",
      icon: "🎭",
    },
    {
      role: "Training and Placement Cell Member",
      org: "RGUKT Srikakulam",
      period: "09/2023 – 01/2025",
      desc: "Coordinated recruitments, interacted with companies, and gained exposure to corporate culture and hiring trends.",
      icon: "🏢",
    },
  ],
};
