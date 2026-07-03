import { type Job } from "@/types";
import { companies } from "./companies";

const co = (id: string) => companies.find((c) => c.id === id)!;

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Engineer",
    slug: "senior-frontend-engineer-google",
    company: co("google"),
    description: "Join Google's Search team to build the next generation of search experiences. You'll work on performance-critical UI components used by billions of users daily, collaborating with world-class engineers and designers.",
    responsibilities: [
      "Design and implement complex, high-performance web applications",
      "Lead technical architecture decisions for frontend systems",
      "Mentor junior and mid-level engineers on best practices",
      "Collaborate with UX designers and product managers",
      "Optimize web vitals and core performance metrics",
      "Contribute to internal design system and component library"
    ],
    requirements: [
      "5+ years of experience in frontend development",
      "Expert knowledge of TypeScript and modern JavaScript",
      "Deep experience with React or Angular",
      "Strong understanding of web performance optimization",
      "Experience with large-scale web applications",
      "BS/MS in Computer Science or equivalent"
    ],
    niceToHave: ["Experience with WebAssembly", "Knowledge of accessibility standards"],
    salaryMin: 14800000, salaryMax: 22400000, currency: "INR",
    location: "Bengaluru, Karnataka", workMode: "Hybrid",
    employmentType: "Full-time", experienceLevel: "Senior",
    skills: ["TypeScript", "React", "Angular", "Web Performance", "CSS", "Testing"],
    benefits: ["Health Insurance", "401(k) Match", "Free Meals", "Gym", "Education Stipend"],
    category: "engineering", postedAt: "2026-06-28T10:00:00Z",
    featured: true, urgent: false, applicantCount: 234, matchScore: 92,
  },
  {
    id: "2",
    title: "Staff Machine Learning Engineer",
    slug: "staff-ml-engineer-openai",
    company: co("openai"),
    description: "Work at the frontier of AI research and deployment at OpenAI. You'll build and optimize large-scale machine learning systems that power the next generation of AI products used by millions.",
    responsibilities: [
      "Design and implement production ML pipelines",
      "Optimize model training and inference at scale",
      "Collaborate with research scientists on new architectures",
      "Build robust monitoring and evaluation systems",
      "Drive technical decisions across the ML platform"
    ],
    requirements: [
      "7+ years in machine learning engineering",
      "Expert-level Python and PyTorch/TensorFlow",
      "Experience training and deploying large language models",
      "Strong distributed systems knowledge",
      "Published research or equivalent industry experience"
    ],
    salaryMin: 24000000, salaryMax: 40000000, currency: "INR",
    location: "Bengaluru, Karnataka", workMode: "Hybrid",
    employmentType: "Full-time", experienceLevel: "Lead",
    skills: ["Python", "PyTorch", "Distributed Systems", "LLMs", "CUDA", "Kubernetes"],
    benefits: ["Competitive Equity", "Health Insurance", "Unlimited PTO", "Meals", "Learning Budget"],
    category: "ai-ml", postedAt: "2026-06-27T09:00:00Z",
    featured: true, urgent: true, applicantCount: 156, matchScore: 85,
  },
  {
    id: "3",
    title: "Product Design Lead",
    slug: "product-design-lead-stripe",
    company: co("adobe"),
    description: "Lead the design of Stripe's payment products used by millions of businesses. You'll shape the future of financial infrastructure through elegant, user-centered design.",
    responsibilities: [
      "Lead design for a major product area",
      "Define design strategy and vision",
      "Mentor and grow a team of product designers",
      "Partner with engineering and PM to ship high-quality products",
      "Establish and evolve design systems"
    ],
    requirements: [
      "8+ years of product design experience",
      "Portfolio demonstrating complex product design work",
      "Experience leading design teams",
      "Strong prototyping and interaction design skills",
      "Fintech or developer tools experience preferred"
    ],
    salaryMin: 17600000, salaryMax: 27200000, currency: "INR",
    location: "Mumbai, Maharashtra", workMode: "Remote",
    employmentType: "Full-time", experienceLevel: "Lead",
    skills: ["Figma", "Design Systems", "Prototyping", "User Research", "Interaction Design"],
    benefits: ["Remote Work", "Equity", "Health Insurance", "Learning Budget", "Home Office Stipend"],
    category: "design", postedAt: "2026-06-29T14:00:00Z",
    featured: true, urgent: false, applicantCount: 89, matchScore: 78,
  },
  {
    id: "4",
    title: "Senior Backend Engineer",
    slug: "senior-backend-engineer-netflix",
    company: co("amazon"),
    description: "Build and scale Netflix's streaming platform serving 260M+ subscribers worldwide. Work on microservices that handle millions of requests per second with world-class reliability.",
    responsibilities: [
      "Design and build scalable microservices",
      "Optimize streaming infrastructure for global scale",
      "Implement A/B testing frameworks",
      "Improve system reliability and observability",
      "Participate in on-call rotations"
    ],
    requirements: [
      "6+ years of backend engineering experience",
      "Strong Java or Python expertise",
      "Experience with distributed systems at scale",
      "Knowledge of cloud infrastructure (AWS preferred)",
      "Experience with streaming or real-time systems"
    ],
    salaryMin: 16000000, salaryMax: 32000000, currency: "INR",
    location: "Mumbai, Maharashtra", workMode: "Hybrid",
    employmentType: "Full-time", experienceLevel: "Senior",
    skills: ["Java", "Python", "AWS", "Kafka", "Microservices", "Docker"],
    benefits: ["Unlimited PTO", "Top-of-Market Pay", "Stock Options", "Health Insurance"],
    category: "engineering", postedAt: "2026-06-26T11:00:00Z",
    featured: true, urgent: false, applicantCount: 312, matchScore: 88,
  },
  {
    id: "5",
    title: "iOS Engineer",
    slug: "ios-engineer-apple",
    company: co("microsoft"),
    description: "Join Apple's iOS team to create exceptional experiences across iPhone, iPad, and Apple Watch. Build features used by over a billion users with a relentless focus on quality and performance.",
    responsibilities: [
      "Develop new features for iOS applications",
      "Optimize app performance and battery efficiency",
      "Collaborate with hardware and design teams",
      "Write clean, testable Swift code",
      "Contribute to Apple's human interface guidelines"
    ],
    requirements: [
      "4+ years iOS development with Swift",
      "Deep knowledge of UIKit and SwiftUI",
      "Experience with Core Data, Core Animation",
      "Strong CS fundamentals",
      "Passion for Apple products"
    ],
    salaryMin: 14000000, salaryMax: 22400000, currency: "INR",
    location: "Bengaluru, Karnataka", workMode: "On-site",
    employmentType: "Full-time", experienceLevel: "Senior",
    skills: ["Swift", "SwiftUI", "UIKit", "Core Data", "Xcode", "Metal"],
    benefits: ["Product Discounts", "Health Insurance", "Stock Purchase", "Fitness Centers"],
    category: "mobile", postedAt: "2026-06-25T08:00:00Z",
    featured: false, urgent: false, applicantCount: 198, matchScore: 72,
  },
  {
    id: "6",
    title: "Cloud Platform Engineer",
    slug: "cloud-platform-engineer-amazon",
    company: co("amazon"),
    description: "Shape the future of cloud computing at AWS. Build the core infrastructure services that power millions of active customers and trillions of API calls per year.",
    responsibilities: [
      "Design and implement cloud infrastructure services",
      "Automate deployment and scaling processes",
      "Build monitoring, alerting, and incident response systems",
      "Optimize resource utilization and cost efficiency",
      "Collaborate with service teams across AWS"
    ],
    requirements: [
      "5+ years in cloud infrastructure or platform engineering",
      "Strong Linux systems knowledge",
      "Experience with containerization (Docker, Kubernetes)",
      "Programming in Python, Go, or Java",
      "Understanding of networking and security"
    ],
    salaryMin: 12800000, salaryMax: 20800000, currency: "INR",
    location: "Bengaluru, Karnataka", workMode: "Hybrid",
    employmentType: "Full-time", experienceLevel: "Senior",
    skills: ["AWS", "Kubernetes", "Docker", "Terraform", "Python", "Linux"],
    benefits: ["Stock Options", "Health Insurance", "Relocation", "Career Growth"],
    category: "devops", postedAt: "2026-06-24T09:00:00Z",
    featured: false, urgent: true, applicantCount: 267, matchScore: 81,
  },
  {
    id: "7",
    title: "Data Scientist",
    slug: "data-scientist-spotify",
    company: co("nvidia"),
    description: "Use data to create magical music experiences for 600M+ users. Build recommendation algorithms, analyze user behavior, and drive product decisions with rigorous experimentation.",
    responsibilities: [
      "Develop and improve recommendation algorithms",
      "Design and analyze A/B experiments",
      "Build predictive models for user engagement",
      "Create data pipelines and dashboards",
      "Present insights to stakeholders"
    ],
    requirements: [
      "3+ years in data science or analytics",
      "Strong Python and SQL skills",
      "Experience with machine learning frameworks",
      "Statistical modeling expertise",
      "MS or PhD in a quantitative field preferred"
    ],
    salaryMin: 11200000, salaryMax: 17600000, currency: "INR",
    location: "Pune, Maharashtra", workMode: "Remote",
    employmentType: "Full-time", experienceLevel: "Mid",
    skills: ["Python", "SQL", "Machine Learning", "Statistics", "Spark", "A/B Testing"],
    benefits: ["Remote Work", "Flexible Hours", "Learning Budget", "Equity", "Health Insurance"],
    category: "data-science", postedAt: "2026-06-30T15:00:00Z",
    featured: false, urgent: false, applicantCount: 145, matchScore: 90,
  },
  {
    id: "8",
    title: "Senior Product Manager",
    slug: "senior-pm-microsoft",
    company: co("microsoft"),
    description: "Drive the product vision for Microsoft's AI-powered productivity tools. Shape how millions of knowledge workers collaborate, create, and achieve more with intelligent software.",
    responsibilities: [
      "Define product strategy and roadmap",
      "Gather and prioritize customer requirements",
      "Work closely with engineering and design teams",
      "Analyze market trends and competitive landscape",
      "Drive product launches and go-to-market strategy"
    ],
    requirements: [
      "6+ years of product management experience",
      "Experience with AI/ML-powered products",
      "Strong analytical and communication skills",
      "Technical background preferred",
      "MBA or equivalent experience"
    ],
    salaryMin: 13600000, salaryMax: 21600000, currency: "INR",
    location: "Hyderabad, Telangana", workMode: "Hybrid",
    employmentType: "Full-time", experienceLevel: "Senior",
    skills: ["Product Strategy", "Agile", "Data Analysis", "User Research", "Roadmapping"],
    benefits: ["Stock Options", "Health Insurance", "Flexible Hours", "Education", "Wellness"],
    category: "product", postedAt: "2026-06-23T12:00:00Z",
    featured: false, urgent: false, applicantCount: 178, matchScore: 65,
  },
  {
    id: "9",
    title: "Security Engineer",
    slug: "security-engineer-meta",
    company: co("google"),
    description: "Protect billions of users by building security systems at Meta. Work on threat detection, vulnerability management, and security architecture across one of the world's largest platforms.",
    responsibilities: [
      "Design and implement security controls and monitoring",
      "Perform security reviews and threat modeling",
      "Develop automated security testing tools",
      "Respond to and investigate security incidents",
      "Collaborate with product teams on secure design"
    ],
    requirements: [
      "4+ years in security engineering",
      "Experience with application and infrastructure security",
      "Programming skills in Python, C++, or Go",
      "Knowledge of common attack vectors and defenses",
      "Security certifications (CISSP, OSCP) a plus"
    ],
    salaryMin: 14400000, salaryMax: 23200000, currency: "INR",
    location: "Gurugram, Haryana", workMode: "Hybrid",
    employmentType: "Full-time", experienceLevel: "Senior",
    skills: ["Security", "Python", "Threat Modeling", "Cryptography", "Linux", "Incident Response"],
    benefits: ["Health Insurance", "Stock Options", "Free Meals", "Wellness", "Commuter Benefits"],
    category: "security", postedAt: "2026-06-22T10:00:00Z",
    featured: false, urgent: false, applicantCount: 95, matchScore: 74,
  },
  {
    id: "10",
    title: "Full Stack Engineer",
    slug: "full-stack-engineer-salesforce",
    company: co("oracle"),
    description: "Build the future of CRM at Salesforce. Create powerful, scalable web applications that help businesses grow and connect with their customers in meaningful ways.",
    responsibilities: [
      "Develop full-stack features using React and Java",
      "Design RESTful APIs and database schemas",
      "Implement responsive and accessible UI components",
      "Write comprehensive unit and integration tests",
      "Participate in code reviews and technical planning"
    ],
    requirements: [
      "3+ years of full-stack development experience",
      "Strong React and TypeScript skills",
      "Backend experience with Java or Node.js",
      "Database design experience (SQL and NoSQL)",
      "Understanding of CI/CD pipelines"
    ],
    salaryMin: 11600000, salaryMax: 18400000, currency: "INR",
    location: "Mumbai, Maharashtra", workMode: "Hybrid",
    employmentType: "Full-time", experienceLevel: "Mid",
    skills: ["React", "TypeScript", "Java", "PostgreSQL", "REST APIs", "Testing"],
    benefits: ["Volunteer Time Off", "Health Insurance", "Equity", "Education", "Wellness"],
    category: "engineering", postedAt: "2026-06-21T14:00:00Z",
    featured: false, urgent: false, applicantCount: 203, matchScore: 86,
  },
  {
    id: "11",
    title: "AI Research Scientist",
    slug: "ai-research-scientist-nvidia",
    company: co("nvidia"),
    description: "Push the boundaries of AI at NVIDIA. Conduct groundbreaking research in deep learning, computer vision, and generative AI, leveraging the world's most powerful GPU infrastructure.",
    responsibilities: [
      "Conduct research in deep learning and AI",
      "Publish papers at top-tier conferences",
      "Develop novel architectures and training methods",
      "Collaborate with product teams for research transfer",
      "Mentor junior researchers and interns"
    ],
    requirements: [
      "PhD in CS, ML, or related field",
      "Strong publication record (NeurIPS, ICML, CVPR)",
      "Expert in PyTorch or TensorFlow",
      "Experience with large-scale GPU training",
      "Strong mathematical foundations"
    ],
    salaryMin: 20000000, salaryMax: 36000000, currency: "INR",
    location: "Pune, Maharashtra", workMode: "Hybrid",
    employmentType: "Full-time", experienceLevel: "Lead",
    skills: ["PyTorch", "CUDA", "Deep Learning", "Computer Vision", "Research", "Python"],
    benefits: ["Stock Options", "Health Insurance", "Learning Budget", "401(k)", "Wellness"],
    category: "ai-ml", postedAt: "2026-06-20T09:00:00Z",
    featured: true, urgent: false, applicantCount: 78, matchScore: 69,
  },
  {
    id: "12",
    title: "Growth Marketing Manager",
    slug: "growth-marketing-manager-airbnb",
    company: co("openai"),
    description: "Drive growth for Airbnb's global marketplace. Build and optimize marketing campaigns that connect travelers with unique stays and experiences around the world.",
    responsibilities: [
      "Develop and execute growth marketing strategies",
      "Optimize user acquisition funnels",
      "Manage multi-channel marketing campaigns",
      "Analyze campaign performance and ROI",
      "Collaborate with product and data teams"
    ],
    requirements: [
      "5+ years in growth or performance marketing",
      "Experience with paid social, SEM, and programmatic",
      "Strong analytical skills with SQL proficiency",
      "Experience in marketplace or e-commerce",
      "Data-driven decision-making mindset"
    ],
    salaryMin: 11200000, salaryMax: 16800000, currency: "INR",
    location: "Bengaluru, Karnataka", workMode: "Remote",
    employmentType: "Full-time", experienceLevel: "Senior",
    skills: ["Growth Marketing", "SQL", "A/B Testing", "Google Ads", "Analytics", "SEO"],
    benefits: ["Travel Credits", "Flexible Work", "Health Insurance", "Equity", "Learning Budget"],
    category: "marketing", postedAt: "2026-06-19T11:00:00Z",
    featured: false, urgent: false, applicantCount: 134, matchScore: 55,
  },
  {
    id: "13",
    title: "DevOps Engineer",
    slug: "devops-engineer-adobe",
    company: co("adobe"),
    description: "Build and scale Adobe's cloud infrastructure powering Creative Cloud, Document Cloud, and Experience Cloud. Design systems that support millions of creative professionals.",
    responsibilities: [
      "Design and maintain CI/CD pipelines",
      "Manage cloud infrastructure on AWS and Azure",
      "Implement infrastructure as code with Terraform",
      "Optimize container orchestration with Kubernetes",
      "Build monitoring and alerting systems"
    ],
    requirements: [
      "4+ years in DevOps or SRE roles",
      "Strong Kubernetes and Docker experience",
      "Infrastructure as code expertise (Terraform, Pulumi)",
      "Experience with AWS or Azure",
      "Scripting skills in Python or Bash"
    ],
    salaryMin: 12400000, salaryMax: 19600000, currency: "INR",
    location: "Noida, Uttar Pradesh", workMode: "Hybrid",
    employmentType: "Full-time", experienceLevel: "Senior",
    skills: ["Kubernetes", "Docker", "Terraform", "AWS", "CI/CD", "Python"],
    benefits: ["Health Insurance", "Stock Purchase", "Learning Fund", "Hybrid Work", "Wellness"],
    category: "devops", postedAt: "2026-06-18T13:00:00Z",
    featured: false, urgent: false, applicantCount: 167, matchScore: 82,
  },
  {
    id: "14",
    title: "Android Engineer",
    slug: "android-engineer-google",
    company: co("google"),
    description: "Shape the future of Android, the world's most popular mobile operating system. Build features and APIs that billions of users and millions of developers depend on every day.",
    responsibilities: [
      "Develop Android framework and platform features",
      "Optimize performance and battery life",
      "Design public APIs for developer ecosystem",
      "Write comprehensive tests and documentation",
      "Collaborate with Pixel hardware teams"
    ],
    requirements: [
      "4+ years of Android development",
      "Strong Kotlin and Java proficiency",
      "Deep understanding of Android internals",
      "Experience with Jetpack Compose",
      "Performance profiling expertise"
    ],
    salaryMin: 14400000, salaryMax: 22800000, currency: "INR",
    location: "Bengaluru, Karnataka", workMode: "Hybrid",
    employmentType: "Full-time", experienceLevel: "Senior",
    skills: ["Kotlin", "Java", "Jetpack Compose", "Android SDK", "Performance", "Testing"],
    benefits: ["Health Insurance", "401(k)", "Free Meals", "Education", "Gym"],
    category: "mobile", postedAt: "2026-06-17T10:00:00Z",
    featured: false, urgent: false, applicantCount: 245, matchScore: 70,
  },
  {
    id: "15",
    title: "Enterprise Account Executive",
    slug: "enterprise-ae-salesforce",
    company: co("oracle"),
    description: "Drive enterprise sales for the world's #1 CRM platform. Build relationships with Fortune 500 companies and help them transform their businesses with Salesforce solutions.",
    responsibilities: [
      "Manage enterprise accounts with $1M+ revenue targets",
      "Build executive relationships with C-suite buyers",
      "Develop strategic account plans",
      "Negotiate complex enterprise contracts",
      "Collaborate with solution engineers and success teams"
    ],
    requirements: [
      "7+ years in enterprise B2B sales",
      "Track record of exceeding quota",
      "Experience selling SaaS to enterprise customers",
      "Strong presentation and negotiation skills",
      "CRM and sales methodology expertise"
    ],
    salaryMin: 12000000, salaryMax: 28000000, currency: "INR",
    location: "Mumbai, Maharashtra", workMode: "Hybrid",
    employmentType: "Full-time", experienceLevel: "Senior",
    skills: ["Enterprise Sales", "SaaS", "Negotiation", "CRM", "Account Management"],
    benefits: ["Commission", "Stock Options", "Health Insurance", "Travel Allowance", "Club Trips"],
    category: "sales", postedAt: "2026-06-16T09:00:00Z",
    featured: false, urgent: true, applicantCount: 89, matchScore: 45,
  },
  {
    id: "16",
    title: "React Native Developer",
    slug: "react-native-developer-meta",
    company: co("google"),
    description: "Build cross-platform mobile experiences at Meta using React Native. Contribute to the framework itself and build features for apps used by billions of people worldwide.",
    responsibilities: [
      "Develop cross-platform mobile features with React Native",
      "Optimize performance across iOS and Android",
      "Contribute to React Native open-source framework",
      "Build reusable component libraries",
      "Collaborate with native platform teams"
    ],
    requirements: [
      "4+ years React Native experience",
      "Strong JavaScript/TypeScript skills",
      "Understanding of iOS and Android platforms",
      "Experience with native module development",
      "Performance optimization expertise"
    ],
    salaryMin: 13600000, salaryMax: 22000000, currency: "INR",
    location: "Gurugram, Haryana", workMode: "Hybrid",
    employmentType: "Full-time", experienceLevel: "Senior",
    skills: ["React Native", "TypeScript", "iOS", "Android", "Performance", "JavaScript"],
    benefits: ["Health Insurance", "Stock Options", "Free Meals", "Wellness", "Parental Leave"],
    category: "mobile", postedAt: "2026-06-15T14:00:00Z",
    featured: false, urgent: false, applicantCount: 187, matchScore: 91,
  },
  {
    id: "17",
    title: "Data Engineer",
    slug: "data-engineer-amazon",
    company: co("amazon"),
    description: "Build the data infrastructure that powers Amazon's world-class recommendations, supply chain, and customer experience. Process petabytes of data at unprecedented scale.",
    responsibilities: [
      "Design and build data pipelines at petabyte scale",
      "Develop real-time streaming data systems",
      "Optimize data warehouse performance",
      "Build data quality and governance frameworks",
      "Partner with data scientists and analysts"
    ],
    requirements: [
      "4+ years in data engineering",
      "Expert SQL and Python skills",
      "Experience with Spark, Kafka, or similar",
      "AWS data services experience (Redshift, Glue, EMR)",
      "Data modeling and warehouse design skills"
    ],
    salaryMin: 12400000, salaryMax: 20000000, currency: "INR",
    location: "Bengaluru, Karnataka", workMode: "Hybrid",
    employmentType: "Full-time", experienceLevel: "Senior",
    skills: ["Python", "SQL", "Spark", "Kafka", "AWS", "Data Modeling"],
    benefits: ["Stock Options", "Health Insurance", "Relocation", "Career Growth"],
    category: "data-science", postedAt: "2026-06-14T11:00:00Z",
    featured: false, urgent: false, applicantCount: 198, matchScore: 83,
  },
  {
    id: "18",
    title: "UX Researcher",
    slug: "ux-researcher-google",
    company: co("google"),
    description: "Uncover insights that shape Google's products. Conduct user research that informs design decisions across Search, Maps, and Cloud, impacting billions of daily users.",
    responsibilities: [
      "Plan and conduct qualitative and quantitative research",
      "Synthesize findings into actionable insights",
      "Present research to stakeholders and leadership",
      "Develop research frameworks and best practices",
      "Collaborate with designers and product managers"
    ],
    requirements: [
      "5+ years UX research experience",
      "Expertise in mixed-methods research",
      "Strong analytical and presentation skills",
      "Experience with enterprise or consumer products",
      "MS or PhD in HCI, Psychology, or related field"
    ],
    salaryMin: 12000000, salaryMax: 19200000, currency: "INR",
    location: "Bengaluru, Karnataka", workMode: "Hybrid",
    employmentType: "Full-time", experienceLevel: "Senior",
    skills: ["User Research", "Usability Testing", "Data Analysis", "Surveys", "Prototyping"],
    benefits: ["Health Insurance", "401(k)", "Free Meals", "Education", "Wellness"],
    category: "design", postedAt: "2026-06-13T10:00:00Z",
    featured: false, urgent: false, applicantCount: 112, matchScore: 67,
  },
  {
    id: "19",
    title: "Platform Engineer",
    slug: "platform-engineer-stripe",
    company: co("adobe"),
    description: "Build Stripe's developer platform that processes billions of dollars annually. Design APIs and infrastructure that developers love, with world-class reliability.",
    responsibilities: [
      "Design and build platform APIs and services",
      "Improve developer experience and documentation",
      "Ensure 99.999% uptime for payment infrastructure",
      "Build internal tools and automation",
      "Contribute to engineering culture and standards"
    ],
    requirements: [
      "5+ years in platform or backend engineering",
      "Experience with Ruby, Go, or Java",
      "API design and distributed systems expertise",
      "Experience building developer tools",
      "Strong reliability engineering mindset"
    ],
    salaryMin: 15200000, salaryMax: 24800000, currency: "INR",
    location: "Mumbai, Maharashtra", workMode: "Remote",
    employmentType: "Full-time", experienceLevel: "Senior",
    skills: ["Go", "Ruby", "API Design", "Distributed Systems", "PostgreSQL", "AWS"],
    benefits: ["Equity", "Health Insurance", "Remote Work", "Learning Budget", "Wellness"],
    category: "engineering", postedAt: "2026-06-12T08:00:00Z",
    featured: true, urgent: false, applicantCount: 134, matchScore: 87,
  },
  {
    id: "20",
    title: "ML Ops Engineer",
    slug: "ml-ops-engineer-tesla",
    company: co("nvidia"),
    description: "Build the ML infrastructure powering Tesla's Autopilot and Full Self-Driving. Deploy and monitor models that make real-time decisions for millions of vehicles on the road.",
    responsibilities: [
      "Build and maintain ML training and inference pipelines",
      "Deploy models to edge devices in vehicles",
      "Monitor model performance and data quality",
      "Optimize GPU cluster utilization",
      "Automate model evaluation and rollout processes"
    ],
    requirements: [
      "4+ years in ML engineering or MLOps",
      "Strong Python and infrastructure skills",
      "Experience with model serving (TFServing, Triton)",
      "Knowledge of computer vision models",
      "Experience with GPU clusters"
    ],
    salaryMin: 13600000, salaryMax: 22400000, currency: "INR",
    location: "Bengaluru, Karnataka", workMode: "On-site",
    employmentType: "Full-time", experienceLevel: "Senior",
    skills: ["Python", "Kubernetes", "Docker", "PyTorch", "MLOps", "Computer Vision"],
    benefits: ["Stock Options", "Health Insurance", "Employee Discounts", "Career Growth"],
    category: "ai-ml", postedAt: "2026-06-11T09:00:00Z",
    featured: false, urgent: true, applicantCount: 98, matchScore: 76,
  },
  {
    id: "21",
    title: "Senior Product Designer",
    slug: "senior-product-designer-spotify",
    company: co("microsoft"),
    description: "Design delightful audio experiences for hundreds of millions of listeners. Create intuitive interfaces that make discovering and enjoying music effortless and joyful.",
    responsibilities: [
      "Design end-to-end product experiences",
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user testing and iterate on feedback",
      "Collaborate with cross-functional squads",
      "Contribute to and evolve the design system"
    ],
    requirements: [
      "5+ years of product design experience",
      "Strong portfolio of shipped consumer products",
      "Expert in Figma and prototyping tools",
      "Experience with design systems",
      "Understanding of audio or media products a plus"
    ],
    salaryMin: 12000000, salaryMax: 18400000, currency: "INR",
    location: "Pune, Maharashtra", workMode: "Remote",
    employmentType: "Full-time", experienceLevel: "Senior",
    skills: ["Figma", "Prototyping", "Design Systems", "User Testing", "Interaction Design"],
    benefits: ["Remote Work", "Flexible Hours", "Health Insurance", "Learning Budget", "Equity"],
    category: "design", postedAt: "2026-06-10T12:00:00Z",
    featured: false, urgent: false, applicantCount: 156, matchScore: 79,
  },
  {
    id: "22",
    title: "Content Marketing Lead",
    slug: "content-marketing-lead-adobe",
    company: co("adobe"),
    description: "Shape Adobe's content strategy across all digital touchpoints. Create compelling narratives that inspire creative professionals and drive adoption of Creative Cloud tools.",
    responsibilities: [
      "Develop and execute content marketing strategy",
      "Create blog posts, whitepapers, and case studies",
      "Manage editorial calendar and content team",
      "Optimize content for SEO and engagement",
      "Measure and report on content performance"
    ],
    requirements: [
      "6+ years in content marketing",
      "Experience in B2B SaaS or creative tools",
      "Excellent writing and editing skills",
      "SEO and analytics expertise",
      "Team management experience"
    ],
    salaryMin: 10400000, salaryMax: 16000000, currency: "INR",
    location: "Noida, Uttar Pradesh", workMode: "Hybrid",
    employmentType: "Full-time", experienceLevel: "Senior",
    skills: ["Content Strategy", "SEO", "Copywriting", "Analytics", "Team Management"],
    benefits: ["Health Insurance", "Stock Purchase", "Learning Fund", "Hybrid Work"],
    category: "marketing", postedAt: "2026-06-09T14:00:00Z",
    featured: false, urgent: false, applicantCount: 87, matchScore: 52,
  },
  {
    id: "23",
    title: "Solutions Architect",
    slug: "solutions-architect-oracle",
    company: co("oracle"),
    description: "Help enterprise customers architect solutions on Oracle Cloud Infrastructure. Design scalable, secure, and cost-effective cloud solutions for mission-critical workloads.",
    responsibilities: [
      "Design cloud architecture solutions for enterprise customers",
      "Conduct technical workshops and presentations",
      "Create reference architectures and best practices",
      "Support pre-sales with technical expertise",
      "Drive cloud adoption and migration strategies"
    ],
    requirements: [
      "7+ years in solutions architecture or consulting",
      "Cloud certifications (OCI, AWS, or Azure)",
      "Strong understanding of enterprise architecture",
      "Excellent communication and presentation skills",
      "Experience with database and middleware technologies"
    ],
    salaryMin: 12800000, salaryMax: 20800000, currency: "INR",
    location: "Hyderabad, Telangana", workMode: "Hybrid",
    employmentType: "Full-time", experienceLevel: "Lead",
    skills: ["Cloud Architecture", "OCI", "Java", "SQL", "Kubernetes", "Enterprise Architecture"],
    benefits: ["Health Insurance", "401(k)", "Stock Purchase", "Education", "Travel"],
    category: "devops", postedAt: "2026-06-08T10:00:00Z",
    featured: false, urgent: false, applicantCount: 76, matchScore: 58,
  },
  {
    id: "24",
    title: "Frontend Engineer",
    slug: "frontend-engineer-netflix",
    company: co("amazon"),
    description: "Build the Netflix TV and web UI experienced by hundreds of millions of members. Create smooth, performant, and accessible interfaces across every screen size.",
    responsibilities: [
      "Build and optimize Netflix's web application",
      "Implement A/B tested UI experiments",
      "Optimize Core Web Vitals and performance",
      "Create accessible, responsive components",
      "Collaborate with designers on interaction patterns"
    ],
    requirements: [
      "4+ years frontend development experience",
      "Strong React and TypeScript expertise",
      "Web performance optimization experience",
      "Understanding of A/B testing and experimentation",
      "Passion for building great user experiences"
    ],
    salaryMin: 15200000, salaryMax: 29600000, currency: "INR",
    location: "Mumbai, Maharashtra", workMode: "Hybrid",
    employmentType: "Full-time", experienceLevel: "Senior",
    skills: ["React", "TypeScript", "Web Performance", "A/B Testing", "CSS", "Node.js"],
    benefits: ["Unlimited PTO", "Top-of-Market Pay", "Stock Options", "Health Insurance"],
    category: "engineering", postedAt: "2026-06-07T11:00:00Z",
    featured: false, urgent: false, applicantCount: 278, matchScore: 94,
  },
  {
    id: "25",
    title: "NLP Engineer",
    slug: "nlp-engineer-openai",
    company: co("openai"),
    description: "Advance the state of natural language processing at OpenAI. Build systems that understand and generate human language with unprecedented fluency and accuracy.",
    responsibilities: [
      "Develop NLP models and systems",
      "Fine-tune and evaluate language models",
      "Build text processing and analysis pipelines",
      "Collaborate with research on language understanding",
      "Deploy NLP systems to production"
    ],
    requirements: [
      "4+ years in NLP engineering",
      "Strong Python and PyTorch skills",
      "Experience with transformer architectures",
      "Understanding of linguistics and semantics",
      "Experience with RLHF or instruction tuning"
    ],
    salaryMin: 18400000, salaryMax: 32000000, currency: "INR",
    location: "Bengaluru, Karnataka", workMode: "Hybrid",
    employmentType: "Full-time", experienceLevel: "Senior",
    skills: ["Python", "PyTorch", "NLP", "Transformers", "LLMs", "RLHF"],
    benefits: ["Equity", "Health Insurance", "Unlimited PTO", "Meals", "Learning Budget"],
    category: "ai-ml", postedAt: "2026-06-06T09:00:00Z",
    featured: false, urgent: false, applicantCount: 112, matchScore: 80,
  },
  {
    id: "26",
    title: "SRE Manager",
    slug: "sre-manager-google",
    company: co("google"),
    description: "Lead a team of Site Reliability Engineers ensuring Google's services maintain world-class availability. Drive reliability culture across one of the world's largest distributed systems.",
    responsibilities: [
      "Lead and grow a team of 8-12 SREs",
      "Define SLOs and error budgets for services",
      "Drive automation and toil reduction",
      "Manage incident response and postmortems",
      "Collaborate with development teams on reliability"
    ],
    requirements: [
      "8+ years in SRE, DevOps, or systems engineering",
      "3+ years of engineering management experience",
      "Deep knowledge of distributed systems",
      "Experience with SLO-based reliability practices",
      "Strong leadership and communication skills"
    ],
    salaryMin: 17600000, salaryMax: 28000000, currency: "INR",
    location: "Bengaluru, Karnataka", workMode: "Hybrid",
    employmentType: "Full-time", experienceLevel: "Lead",
    skills: ["SRE", "Kubernetes", "Go", "Python", "Distributed Systems", "Leadership"],
    benefits: ["Health Insurance", "401(k)", "Free Meals", "Education", "Parental Leave"],
    category: "devops", postedAt: "2026-06-05T10:00:00Z",
    featured: false, urgent: false, applicantCount: 67, matchScore: 71,
  },
  {
    id: "27",
    title: "Product Analyst",
    slug: "product-analyst-airbnb",
    company: co("openai"),
    description: "Drive data-informed product decisions at Airbnb. Analyze how millions of hosts and guests interact with the platform to unlock growth and improve experiences.",
    responsibilities: [
      "Analyze product metrics and user behavior",
      "Design and evaluate experiments",
      "Build dashboards and self-serve analytics tools",
      "Partner with PMs and engineers on feature development",
      "Identify opportunities for product improvement"
    ],
    requirements: [
      "3+ years in product analytics or data analysis",
      "Expert SQL and Python skills",
      "Experience with experimentation platforms",
      "Strong statistical knowledge",
      "Excellent communication and storytelling skills"
    ],
    salaryMin: 10400000, salaryMax: 16000000, currency: "INR",
    location: "Bengaluru, Karnataka", workMode: "Remote",
    employmentType: "Full-time", experienceLevel: "Mid",
    skills: ["SQL", "Python", "Statistics", "A/B Testing", "Tableau", "Product Analytics"],
    benefits: ["Travel Credits", "Flexible Work", "Health Insurance", "Equity", "Learning Budget"],
    category: "data-science", postedAt: "2026-06-04T13:00:00Z",
    featured: false, urgent: false, applicantCount: 145, matchScore: 73,
  },
  {
    id: "28",
    title: "Rust Systems Engineer",
    slug: "rust-systems-engineer-microsoft",
    company: co("microsoft"),
    description: "Build high-performance systems software in Rust at Microsoft. Work on critical infrastructure powering Azure, Windows, and developer tools used by millions.",
    responsibilities: [
      "Design and implement systems software in Rust",
      "Optimize performance and memory safety",
      "Build core libraries and frameworks",
      "Contribute to Rust ecosystem and tooling",
      "Collaborate with platform teams across Microsoft"
    ],
    requirements: [
      "5+ years systems programming experience",
      "Strong Rust or C++ expertise",
      "Deep understanding of memory management",
      "Experience with operating systems or networking",
      "Open source contributions a plus"
    ],
    salaryMin: 14800000, salaryMax: 23600000, currency: "INR",
    location: "Hyderabad, Telangana", workMode: "Hybrid",
    employmentType: "Full-time", experienceLevel: "Senior",
    skills: ["Rust", "C++", "Systems Programming", "Linux", "Performance", "Memory Safety"],
    benefits: ["Stock Options", "Health Insurance", "Flexible Hours", "Education", "Wellness"],
    category: "engineering", postedAt: "2026-06-03T09:00:00Z",
    featured: false, urgent: false, applicantCount: 87, matchScore: 63,
  },
  {
    id: "29",
    title: "VP of Engineering",
    slug: "vp-engineering-stripe",
    company: co("adobe"),
    description: "Lead Stripe's engineering organization building the economic infrastructure for the internet. Drive technical strategy, grow world-class teams, and ship products that millions of businesses rely on.",
    responsibilities: [
      "Lead multiple engineering teams (50+ engineers)",
      "Define technical strategy and architecture",
      "Recruit, mentor, and develop engineering talent",
      "Drive engineering culture and operational excellence",
      "Partner with CPO and CTO on product direction"
    ],
    requirements: [
      "12+ years in software engineering, 5+ in senior leadership",
      "Track record of scaling engineering organizations",
      "Experience with payments, fintech, or platform engineering",
      "Strong technical background with hands-on credibility",
      "Exceptional communication and strategic thinking"
    ],
    salaryMin: 28000000, salaryMax: 48000000, currency: "INR",
    location: "Mumbai, Maharashtra", workMode: "Hybrid",
    employmentType: "Full-time", experienceLevel: "Executive",
    skills: ["Engineering Leadership", "Strategy", "Scaling", "Fintech", "Team Building"],
    benefits: ["Significant Equity", "Health Insurance", "Executive Benefits", "Sabbatical"],
    category: "engineering", postedAt: "2026-06-02T08:00:00Z",
    featured: true, urgent: false, applicantCount: 34, matchScore: 42,
  },
  {
    id: "30",
    title: "Application Security Engineer",
    slug: "appsec-engineer-amazon",
    company: co("amazon"),
    description: "Secure Amazon's vast e-commerce and cloud infrastructure. Build security tools and processes that protect millions of customers and their data across all Amazon services.",
    responsibilities: [
      "Perform security assessments and code reviews",
      "Build automated security scanning tools",
      "Design secure architecture patterns",
      "Train development teams on security best practices",
      "Respond to security incidents and vulnerabilities"
    ],
    requirements: [
      "5+ years in application security",
      "Experience with OWASP Top 10 and common vulnerabilities",
      "Programming skills in Python, Java, or Go",
      "Experience with CI/CD security integration",
      "Security certifications preferred"
    ],
    salaryMin: 13200000, salaryMax: 21600000, currency: "INR",
    location: "Bengaluru, Karnataka", workMode: "Hybrid",
    employmentType: "Full-time", experienceLevel: "Senior",
    skills: ["Application Security", "Python", "SAST/DAST", "AWS Security", "Threat Modeling"],
    benefits: ["Stock Options", "Health Insurance", "Relocation", "Career Growth"],
    category: "security", postedAt: "2026-06-01T10:00:00Z",
    featured: false, urgent: false, applicantCount: 78, matchScore: 75,
  },
  {
    id: "31",
    title: "Creative Director",
    slug: "creative-director-adobe",
    company: co("adobe"),
    description: "Lead Adobe's brand creative vision across global campaigns. Shape how the world's most creative professionals perceive and interact with Adobe's products and brand.",
    responsibilities: [
      "Define creative direction for brand campaigns",
      "Lead a team of designers and art directors",
      "Oversee brand consistency across all touchpoints",
      "Drive innovative creative concepts",
      "Collaborate with marketing and product teams"
    ],
    requirements: [
      "10+ years in creative leadership",
      "Exceptional portfolio of brand campaigns",
      "Experience managing creative teams",
      "Deep understanding of digital and traditional media",
      "Strong strategic thinking and communication"
    ],
    salaryMin: 14400000, salaryMax: 24000000, currency: "INR",
    location: "Noida, Uttar Pradesh", workMode: "Hybrid",
    employmentType: "Full-time", experienceLevel: "Lead",
    skills: ["Creative Direction", "Brand Strategy", "Team Leadership", "Design Thinking", "Art Direction"],
    benefits: ["Health Insurance", "Stock Purchase", "Sabbatical", "Learning Fund", "Wellness"],
    category: "design", postedAt: "2026-05-31T11:00:00Z",
    featured: false, urgent: false, applicantCount: 56, matchScore: 48,
  },
  {
    id: "32",
    title: "Robotics Software Engineer",
    slug: "robotics-engineer-tesla",
    company: co("nvidia"),
    description: "Build the software that powers Tesla's next-generation robots and manufacturing automation. Work at the intersection of AI, perception, and physical systems.",
    responsibilities: [
      "Develop control software for robotic systems",
      "Implement perception and planning algorithms",
      "Integrate hardware and software systems",
      "Optimize real-time performance",
      "Test and validate robotic behaviors"
    ],
    requirements: [
      "4+ years in robotics software",
      "Strong C++ and Python skills",
      "Experience with ROS, perception, or controls",
      "Knowledge of kinematics and dynamics",
      "Experience with real-time systems"
    ],
    salaryMin: 13200000, salaryMax: 22000000, currency: "INR",
    location: "Bengaluru, Karnataka", workMode: "On-site",
    employmentType: "Full-time", experienceLevel: "Senior",
    skills: ["C++", "Python", "ROS", "Computer Vision", "Controls", "Real-Time Systems"],
    benefits: ["Stock Options", "Health Insurance", "Employee Discounts", "Career Growth"],
    category: "engineering", postedAt: "2026-05-30T09:00:00Z",
    featured: false, urgent: false, applicantCount: 92, matchScore: 60,
  },
  {
    id: "33",
    title: "Senior Data Analyst",
    slug: "senior-data-analyst-microsoft",
    company: co("microsoft"),
    description: "Turn data into strategic insights at Microsoft. Analyze complex datasets to inform product decisions across Office 365, Azure, and emerging AI products.",
    responsibilities: [
      "Analyze large-scale product and business data",
      "Build automated reports and dashboards",
      "Identify trends and growth opportunities",
      "Partner with product teams on metric definition",
      "Present insights to senior leadership"
    ],
    requirements: [
      "4+ years in data analysis",
      "Advanced SQL and Excel skills",
      "Proficiency in Python or R",
      "Experience with Power BI or similar tools",
      "Strong business acumen"
    ],
    salaryMin: 10400000, salaryMax: 16000000, currency: "INR",
    location: "Hyderabad, Telangana", workMode: "Hybrid",
    employmentType: "Full-time", experienceLevel: "Mid",
    skills: ["SQL", "Python", "Power BI", "Excel", "Statistics", "Data Visualization"],
    benefits: ["Stock Options", "Health Insurance", "Flexible Hours", "Education"],
    category: "data-science", postedAt: "2026-05-29T12:00:00Z",
    featured: false, urgent: false, applicantCount: 213, matchScore: 77,
  },
  {
    id: "34",
    title: "Technical Program Manager",
    slug: "tpm-amazon",
    company: co("amazon"),
    description: "Drive complex cross-team technical programs at Amazon. Coordinate engineering efforts across distributed teams to deliver world-class products at massive scale.",
    responsibilities: [
      "Lead cross-functional technical programs",
      "Define program roadmaps and milestones",
      "Manage risks, dependencies, and escalations",
      "Drive alignment across engineering teams",
      "Report program status to leadership"
    ],
    requirements: [
      "6+ years in technical program management",
      "Strong technical background",
      "Experience managing programs with 5+ teams",
      "Excellent communication and stakeholder management",
      "Agile and waterfall methodology expertise"
    ],
    salaryMin: 12800000, salaryMax: 20800000, currency: "INR",
    location: "Bengaluru, Karnataka", workMode: "Hybrid",
    employmentType: "Full-time", experienceLevel: "Senior",
    skills: ["Program Management", "Agile", "Technical Planning", "Stakeholder Management"],
    benefits: ["Stock Options", "Health Insurance", "Relocation", "Career Growth"],
    category: "product", postedAt: "2026-05-28T10:00:00Z",
    featured: false, urgent: false, applicantCount: 134, matchScore: 56,
  },
  {
    id: "35",
    title: "Go Backend Engineer",
    slug: "go-backend-engineer-spotify",
    company: co("microsoft"),
    description: "Build backend microservices in Go that power Spotify's music streaming infrastructure. Handle millions of concurrent streams with world-class reliability.",
    responsibilities: [
      "Design and implement Go microservices",
      "Build APIs for mobile and web clients",
      "Optimize service performance and latency",
      "Implement distributed system patterns",
      "Contribute to internal Go libraries"
    ],
    requirements: [
      "3+ years Go development experience",
      "Experience with microservice architectures",
      "Knowledge of gRPC and REST APIs",
      "Understanding of distributed systems",
      "Experience with GCP or AWS"
    ],
    salaryMin: 11600000, salaryMax: 18000000, currency: "INR",
    location: "Pune, Maharashtra", workMode: "Hybrid",
    employmentType: "Full-time", experienceLevel: "Mid",
    skills: ["Go", "gRPC", "Kubernetes", "GCP", "Microservices", "PostgreSQL"],
    benefits: ["Flexible Hours", "Remote Work", "Health Insurance", "Learning Budget", "Equity"],
    category: "engineering", postedAt: "2026-05-27T14:00:00Z",
    featured: false, urgent: false, applicantCount: 98, matchScore: 84,
  },
  {
    id: "36",
    title: "Computer Vision Engineer",
    slug: "computer-vision-engineer-nvidia",
    company: co("nvidia"),
    description: "Develop cutting-edge computer vision systems at NVIDIA. Work on perception algorithms for autonomous vehicles, robotics, and video analytics using state-of-the-art GPU technology.",
    responsibilities: [
      "Develop computer vision models and pipelines",
      "Optimize inference on NVIDIA GPUs",
      "Build training data pipelines",
      "Evaluate model accuracy and robustness",
      "Collaborate with hardware teams on GPU optimization"
    ],
    requirements: [
      "3+ years in computer vision",
      "Strong Python and C++ skills",
      "Experience with CNNs, object detection, segmentation",
      "Familiarity with TensorRT and CUDA",
      "MS or PhD preferred"
    ],
    salaryMin: 14400000, salaryMax: 24000000, currency: "INR",
    location: "Pune, Maharashtra", workMode: "Hybrid",
    employmentType: "Full-time", experienceLevel: "Mid",
    skills: ["Python", "C++", "Computer Vision", "CUDA", "TensorRT", "PyTorch"],
    benefits: ["Stock Options", "Health Insurance", "Learning Budget", "401(k)"],
    category: "ai-ml", postedAt: "2026-05-26T09:00:00Z",
    featured: false, urgent: false, applicantCount: 67, matchScore: 71,
  },
  {
    id: "37",
    title: "Head of People Operations",
    slug: "head-people-ops-openai",
    company: co("openai"),
    description: "Shape OpenAI's people strategy during a period of unprecedented growth. Build the culture, processes, and programs that attract and retain the world's best AI talent.",
    responsibilities: [
      "Define and execute people operations strategy",
      "Build scalable HR processes and systems",
      "Design compensation and benefits programs",
      "Drive diversity, equity, and inclusion initiatives",
      "Partner with leadership on organizational design"
    ],
    requirements: [
      "10+ years in HR/People Operations",
      "Experience scaling teams in high-growth tech companies",
      "Strong knowledge of employment law",
      "Experience with HRIS and people analytics",
      "Excellent leadership and communication skills"
    ],
    salaryMin: 16000000, salaryMax: 25600000, currency: "INR",
    location: "Bengaluru, Karnataka", workMode: "Hybrid",
    employmentType: "Full-time", experienceLevel: "Executive",
    skills: ["People Strategy", "HR Operations", "Compensation", "Culture", "DEI", "Leadership"],
    benefits: ["Equity", "Health Insurance", "Unlimited PTO", "Meals", "Learning Budget"],
    category: "product", postedAt: "2026-05-25T11:00:00Z",
    featured: false, urgent: false, applicantCount: 45, matchScore: 38,
  },
  {
    id: "38",
    title: "Performance Marketing Specialist",
    slug: "performance-marketing-meta",
    company: co("google"),
    description: "Drive user acquisition and engagement for Meta's family of apps. Optimize multi-million dollar advertising campaigns across channels to grow the world's largest social platforms.",
    responsibilities: [
      "Manage large-scale paid media campaigns",
      "Optimize campaigns for ROAS and LTV",
      "Analyze performance data and create reports",
      "Test creative variants and targeting strategies",
      "Collaborate with creative and product teams"
    ],
    requirements: [
      "3+ years in performance marketing",
      "Experience managing $1M+ monthly budgets",
      "Strong analytical skills with SQL",
      "Experience with Meta Ads, Google Ads",
      "Knowledge of attribution and measurement"
    ],
    salaryMin: 9600000, salaryMax: 15200000, currency: "INR",
    location: "Gurugram, Haryana", workMode: "Hybrid",
    employmentType: "Full-time", experienceLevel: "Mid",
    skills: ["Paid Media", "Analytics", "SQL", "A/B Testing", "Meta Ads", "Google Ads"],
    benefits: ["Health Insurance", "Stock Options", "Free Meals", "Wellness"],
    category: "marketing", postedAt: "2026-05-24T14:00:00Z",
    featured: false, urgent: false, applicantCount: 167, matchScore: 49,
  },
  {
    id: "39",
    title: "Database Reliability Engineer",
    slug: "dbre-oracle",
    company: co("oracle"),
    description: "Ensure the world's most mission-critical databases run with exceptional reliability. Work on Oracle's autonomous database technology serving the largest enterprises globally.",
    responsibilities: [
      "Manage and optimize enterprise database systems",
      "Implement automated failover and recovery",
      "Monitor database performance and health",
      "Develop automation for database operations",
      "Support mission-critical customer environments"
    ],
    requirements: [
      "5+ years in database administration or DBA engineering",
      "Expert Oracle Database knowledge",
      "Experience with cloud database services",
      "Strong scripting skills (Python, Bash, SQL)",
      "Understanding of replication and HA patterns"
    ],
    salaryMin: 11600000, salaryMax: 18800000, currency: "INR",
    location: "Hyderabad, Telangana", workMode: "Hybrid",
    employmentType: "Full-time", experienceLevel: "Senior",
    skills: ["Oracle DB", "SQL", "Python", "Linux", "High Availability", "Automation"],
    benefits: ["Health Insurance", "401(k)", "Stock Purchase", "Education"],
    category: "devops", postedAt: "2026-05-23T10:00:00Z",
    featured: false, urgent: false, applicantCount: 54, matchScore: 62,
  },
  {
    id: "40",
    title: "Staff Software Engineer — Payments",
    slug: "staff-engineer-payments-apple",
    company: co("amazon"),
    description: "Build Apple's payment infrastructure powering Apple Pay, App Store, and Apple Card. Design systems processing billions of transactions with world-class security and reliability.",
    responsibilities: [
      "Architect payment processing systems",
      "Design APIs for Apple Pay integrations",
      "Ensure PCI compliance and security standards",
      "Lead technical design reviews",
      "Mentor engineering team members"
    ],
    requirements: [
      "8+ years in software engineering",
      "Experience with payment systems or fintech",
      "Strong distributed systems background",
      "Experience with Java, Swift, or Go",
      "Understanding of financial regulations"
    ],
    salaryMin: 17600000, salaryMax: 29600000, currency: "INR",
    location: "Bengaluru, Karnataka", workMode: "On-site",
    employmentType: "Full-time", experienceLevel: "Lead",
    skills: ["Java", "Distributed Systems", "Payments", "Security", "API Design", "Swift"],
    benefits: ["Product Discounts", "Health Insurance", "Stock Purchase", "Fitness Centers"],
    category: "engineering", postedAt: "2026-05-22T08:00:00Z",
    featured: false, urgent: false, applicantCount: 112, matchScore: 66,
  },
];

export function getJobById(id: string): Job | undefined {
  return jobs.find((j) => j.id === id);
}

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}

export function getFeaturedJobs(): Job[] {
  return jobs.filter((j) => j.featured);
}

export function getJobsByCategory(category: string): Job[] {
  return jobs.filter((j) => j.category === category);
}

export function getJobsByCompany(companyId: string): Job[] {
  return jobs.filter((j) => j.company.id === companyId);
}

export function searchJobs(query: string): Job[] {
  const q = query.toLowerCase();
  return jobs.filter(
    (j) =>
      j.title.toLowerCase().includes(q) ||
      j.company.name.toLowerCase().includes(q) ||
      j.skills.some((s) => s.toLowerCase().includes(q)) ||
      j.location.toLowerCase().includes(q) ||
      j.category.toLowerCase().includes(q)
  );
}
