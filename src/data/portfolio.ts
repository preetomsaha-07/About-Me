
export interface VerificationTag {
  status: 'verified' | 'confirmed_by_records' | 'pending_confirmation';
  note: string;
}

export interface PersonalInfo {
  name: string;
  headline: string;
  subheadline: string;
  location: string;
  email: string;
  phone: string;
  photoUrl: string;
  resumePdfUrl: string;
  verificationNotice: string;
  bio: string[];
}

export interface SocialLink {
  platform: 'LinkedIn' | 'GitHub';
  url: string;
  label: string;
  isAvailable: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category:
    | 'Artificial Intelligence & Vision'
    | 'System & Security'
    | 'Data & Research';
  status:
    | 'Prototype / Under Development'
    | 'Hackathon Submission'
    | 'Academic Research';
  problemStatement: string;
  overview: string;
  features: string[];
  technologies: string[];
  myContribution: string;
  team?: string;
  eventOrContext?: string;
  githubUrl?: string;
  liveUrl?: string;
  verification: VerificationTag;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  topicsCovered: string[];
  imagePath?: string;
  pdfPath?: string;
  verificationUrl?: string;
  verification: VerificationTag;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  period: string;
  location: string;
  status: string;
  rollNumber?: string;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  duration?: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  referenceId?: string;
  hasDocument?: boolean;
  documentPath?: string;
  verification: VerificationTag;
}

export interface EventItem {
  id: string;
  title: string;
  organizationOrHost: string;
  year: string;
  roleOrTeam: string;
  description: string;
  outcomeOrStatus: string;
}

export interface SkillItem {
  name: string;
  levelDescription: string;
  verifiedBy: string;
}

export interface SkillCategory {
  categoryName: string;
  description: string;
  skills: SkillItem[];
}

export interface PortfolioData {
  projects: ProjectItem[];
  personal: PersonalInfo;
  socialLinks: SocialLink[];
  education: EducationItem[];
  experience: ExperienceItem[];
  certifications: CertificationItem[];
  events: EventItem[];
  skills: SkillCategory[];
}

const recordedCredential: VerificationTag = {
  status: 'confirmed_by_records',
  note:
    'Credential details were supplied by the portfolio owner. Independent verification should be completed using the official certificate or credential URL.',
};

const pendingCredential: VerificationTag = {
  status: 'pending_confirmation',
  note:
    'Credential details are incomplete or pending confirmation. Do not present this credential as independently verified.',
};

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Preetom Saha',
    headline: 'AI & Data Enthusiast',
    subheadline:
      'Computer Science & Engineering student focused on practical AI, data science, and real-world problem solving through hands-on projects and verified learning.',
    location: 'Kolkata, West Bengal, India',
    email: 'mr.preetomsaha@gmail.com',
    phone: '+91 8100645894',
    photoUrl: '/assets/preetom-profile-graded.jpg',
    resumePdfUrl: '/assets/Preetom_Saha_Resume.pdf',
    verificationNotice:
      'Credential and project information is presented according to the available records. Official verification links are provided when available.',
    bio: [
      'I am a technology student pursuing B.Tech in Computer Science and Engineering with a specialization in Data Science at Narula Institute of Technology.',
      'My focus lies in applied AI, data analysis, and engineering workflows that connect theoretical learning to meaningful software solutions and research-oriented projects.',
      'I enjoy building practical systems around data pipelines, cloud-based AI workflows, and problem-driven prototypes that can be validated with real outcomes.',
    ],
  },

  socialLinks: [
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/preetom-saha-5a8760398/',
      label: 'LinkedIn',
      isAvailable: true,
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/preetomsaha-07',
      label: 'GitHub',
      isAvailable: true,
    },
  ],

  projects: [
    {
      id: 'ai-sentinel',
      title: 'AI Sentinel',
      subtitle: 'Artificial Intelligence & Computer Vision',
      category: 'Artificial Intelligence & Vision',
      status: 'Prototype / Under Development',
      problemStatement:
        'Identifying important visual information and interpreting image-based data can require automated analysis.',
      overview:
        'AI Sentinel is an AI-focused project. Explore the project repository for its implementation, capabilities, and technical details.',
      features: [
        'AI-focused project concept',
        'Computer vision and visual analysis focus',
        'Prototype development',
      ],
      technologies: ['Artificial Intelligence', 'Computer Vision'],
      myContribution:
        'Project development and implementation. Refer to the source code for exact technical details.',
      verification: {
        status: 'pending_confirmation',
        note:
          'Project details and implementation technologies should be checked against the source repository.',
      },
    },
    {
      id: 'secure-vault',
      title: 'Secure Vault',
      subtitle: 'Secure Digital Document Management Platform',
      category: 'System & Security',
      status: 'Prototype / Under Development',
      problemStatement:
        'Digital documents need to be managed carefully, with attention to secure access and protection against unauthorized use.',
      overview:
        'Secure Vault is a web-based document management project. Visit the live deployment or source repository to explore the actual implementation.',
      features: [
        'Live web application',
        'Source code available on GitHub',
        'Digital document management project',
      ],
      technologies: [
        'Web Development',
        'Digital Document Management',
        'Security',
      ],
      myContribution:
        'Developed the Secure Vault project. Specific implementation details should be confirmed from the repository.',
      githubUrl: 'https://github.com/preetomsaha-07/securevault',
      liveUrl: 'https://securevault-nine-theta.vercel.app/',
      eventOrContext: 'Personal Project',
      verification: {
        status: 'confirmed_by_records',
        note: 'Live deployment and repository links supplied by the project owner.',
      },
    },
    {
      id: 'aegisos',
      title: 'AegisOS',
      subtitle: 'System & Security Project',
      category: 'System & Security',
      status: 'Hackathon Submission',
      problemStatement:
        'Security-focused systems need thoughtful approaches to protecting resources and handling potential threats.',
      overview:
        'AegisOS is a system and security project associated with team COFFEE CODE REPEAT and the HexaFalls 2 context.',
      features: [
        'Security-focused project',
        'Hackathon-related development',
        'Team-based project work',
      ],
      technologies: ['System Security', 'Software Development'],
      myContribution:
        'Contributed to the project as part of the team. Refer to the project records for the exact implementation details.',
      team: 'COFFEE CODE REPEAT',
      eventOrContext: 'HexaFalls 2',
      verification: {
        status: 'pending_confirmation',
        note: 'Confirm the technical stack and features against the original project records.',
      },
    },
    {
      id: 'biofuels-renewable-energy',
      title: 'Biofuels & Renewable Energy Assessment',
      subtitle:
        'Technical & Computational Analysis of 3 Generations of Biofuel Technologies',
      category: 'Data & Research',
      status: 'Academic Research',
      problemStatement:
        'Evaluating biofuel technologies requires structured comparison of different generations and their characteristics.',
      overview:
        'An academic research project focused on the technical and computational assessment of three generations of biofuel technologies.',
      features: [
        'Assessment of three generations of biofuel technologies',
        'Technical comparison and research',
        'Computational analysis focus',
      ],
      technologies: [
        'Research',
        'Data Analysis',
        'Computational Analysis',
        'Renewable Energy',
      ],
      myContribution:
        'Contributed to the academic research and assessment. Refer to the original research materials for the complete methodology.',
      verification: {
        status: 'pending_confirmation',
        note: 'Use the original research records to confirm the complete methodology and findings.',
      },
    },
    {
      id: 'supermarket-sales-analysis',
      title: 'Supermarket Sales Analysis',
      subtitle: 'Supermarket Sales Data Analysis',
      category: 'Data & Research',
      status: 'Prototype / Under Development',
      problemStatement:
        'Sales datasets can be difficult to interpret without a clear presentation of sales patterns and business performance.',
      overview:
        'Supermarket Sales Analyse is a deployed data-focused project. Visit the live website and GitHub repository to explore the actual analysis and implementation.',
      features: [
        'Live project deployment',
        'Source code available on GitHub',
        'Supermarket sales analysis focus',
      ],
      technologies: [
        'Data Analysis',
        'Sales Analytics',
        'Data Visualization',
      ],
      myContribution:
        'Developed the Supermarket Sales Analyse project. Confirm the exact tools and analysis methods from the source repository.',
      githubUrl:
        'https://github.com/preetomsaha-07/Supermarket-Sales-Analysis',
      liveUrl: 'https://supermarket-sales-analysis-sigma.vercel.app/',
      eventOrContext: 'Data Analytics Project',
      verification: {
        status: 'confirmed_by_records',
        note: 'Live deployment and repository links supplied by the project owner.',
      },
    },
  ],

  education: [
    {
      id: 'btech-nit',
      institution: 'Narula Institute of Technology',
      degree: 'B.Tech',
      fieldOfStudy: 'Computer Science & Engineering (Data Science)',
      period: '2025 – 2029',
      location: 'Agarpara, Kolkata, West Bengal',
      status: 'Current Program',
    
      highlights: [
        'Focused on data-centric computing, analytics, and applied engineering workflows.',
        'Building practical foundation in AI, machine learning workflows, and system-oriented thinking.',
        'Participating in coursework, project-based learning, and technical skill validation.',
      ],
    },
    {
      id: 'hs',
      institution: 'Ariadaha Kalachand High School',
      degree: 'Higher Secondary',
      fieldOfStudy: 'Science & Academic Preparation',
      period: '2023 – 2025',
      location: 'Kolkata, West Bengal',
      status: 'Completed',
      highlights: [
        'Academic foundation in scientific reasoning and quantitative problem solving.',
        'Built the base for future engineering and data science learning.',
      ],
    },
  ],

  experience: [
    {
      id: 'ibm-data-analytics-ai',
      role: 'Data Analyst & AI Intern',
      organization: 'IBM',
      period: 'August 2026 – September 2026',
      duration: '2 months',
      location: 'Remote',
      type: 'Internship',
      summary:
        'Data Analytics with AI Internship, as listed in the supplied LinkedIn Experience details.',
      responsibilities: [
        'LinkedIn role listed as Data Analyst & AI.',
        'Associated document title: Data Analytics with AI Internship.',
        'Associated skills include Statistical Data Analysis and Statistical Analysis.',
      ],
      technologies: [
        'Data Analytics',
        'Artificial Intelligence',
        'Statistical Analysis',
      ],
      hasDocument: true,
      verification: {
        status: 'confirmed_by_records',
        note:
          'LinkedIn Experience details supplied by the portfolio owner. Confirm the certificate or internship document before claiming independent verification.',
      },
    },
    {
      id: 'alfido-data-science',
      role: 'Data Science Intern',
      organization: 'Alfido Tech',
      period: 'May 2026 – June 2026',
      duration: '2 months',
      location: 'Remote',
      type: 'Internship',
      summary:
        'Data Science internship listed in the supplied LinkedIn Experience details.',
      responsibilities: [
        'LinkedIn role listed as Data Science Intern.',
        'Associated post title: Data Science Internship Completion: 1 Month of Learning & Growth.',
        'Data Science is listed as an associated skill.',
      ],
      technologies: ['Data Science', 'Data Analysis'],
      hasDocument: true,
      verification: {
        status: 'confirmed_by_records',
        note:
          'LinkedIn Experience details supplied by the portfolio owner. Confirm the certificate or internship document before claiming independent verification.',
      },
    },
    {
      id: 'eduskills-ai',
      role: 'AICTE EduSkills Virtual Internship',
      organization: 'EduSkills / AICTE',
      period: '2025',
      duration: 'Virtual Internship',
      location: 'Remote',
      type: 'Virtual Internship',
      summary:
        'Virtual internship record retained from the previous portfolio data.',
      responsibilities: [
        'Structured virtual internship learning activities.',
        'Practical digital technology learning.',
      ],
      technologies: ['Generative AI', 'Cloud Skills', 'Practical Learning'],
      referenceId: 'Ref: C18Y2026M091578812',
      hasDocument: true,
      documentPath: '/assets/eduskills-internship-offer.jpg',
      verification: {
        status: 'confirmed_by_records',
        note:
          'Existing portfolio record retained. Check the actual document and dates before publishing.',
      },
    },
    {
      id: 'infosys-spark',
      role: 'Data Engineering & PySpark',
      organization: 'Infosys Springboard',
      period: '2025',
      location: 'Online Learning',
      type: 'Certification Pathway',
      summary:
        'Existing data engineering and PySpark learning record.',
      responsibilities: [
        'Learning in PySpark and distributed data processing.',
        'Exploration of data transformation concepts.',
      ],
      technologies: ['PySpark', 'Big Data', 'Data Processing'],
      verification: {
        status: 'confirmed_by_records',
        note:
          'Existing portfolio record retained. Confirm supporting certificate details before publishing.',
      },
    },
  ],

  certifications: [
    {
      id: 'ibm-genai-llm-data',
      title: 'Generative AI Essentials: Using LLMs to Work with Data',
      issuer: 'IBM SkillsBuild',
      issueDate: 'August 23, 2026',
      topicsCovered: [
        'Large Language Models (LLMs)',
        'Data Extraction and Analysis',
        'Ethical AI Governance',
        'Hallucination Mitigation',
      ],
      verification: recordedCredential,
    },
    {
      id: 'ibm-granite-software',
      title: 'IBM Granite Models for Software Development',
      issuer: 'IBM SkillsBuild',
      issueDate: 'August 23, 2026',
      topicsCovered: [
        'Granite Model Capabilities and Architecture',
        'Code Generation',
        'Code Refactoring',
        'Unit Test Assistance',
        'Developer Productivity',
      ],
      verification: recordedCredential,
    },
    {
      id: 'ibm-genai-data-analytics',
      title: 'Supercharge Your Data Analytics with Generative AI',
      issuer: 'IBM SkillsBuild',
      issueDate: 'August 23, 2026',
      topicsCovered: [
        'AI-Powered Exploratory Data Analysis',
        'Automated Visualization',
        'Pattern Recognition',
        'Business Intelligence',
      ],
      verification: recordedCredential,
    },
    {
      id: 'ibm-course-completion',
      title: 'IBM SkillsBuild Course Completion Certificate',
      issuer: 'IBM SkillsBuild',
      issueDate: 'August 23, 2026',
      topicsCovered: [
        'Enterprise AI',
        'Technical Lab Assessments',
        'Machine Learning Foundations',
        'LLM Engineering Foundations',
      ],
      verification: {
        ...recordedCredential,
        note:
          'An official PDF is indicated in the supplied details. Add its real file path to enable preview.',
      },
    },
    {
      id: 'infosys-pyspark-beginners',
      title: 'PySpark Python - Beginners',
      issuer: 'Infosys Springboard',
      issueDate: 'August 21, 2026',
      topicsCovered: [
        'Distributed Computing',
        'Apache Spark',
        'PySpark DataFrames',
        'Schema Definition',
        'Data Transformations',
        'Filtering and Aggregation',
      ],
      verification: recordedCredential,
    },
    {
      id: 'google-vertex-prompt-design',
      title: 'Prompt Design in Vertex AI - Skill Badge',
      issuer: 'Google Cloud',
      issueDate: 'October 2026',
      topicsCovered: [
        'Zero-Shot Prompting',
        'Few-Shot Prompting',
        'Temperature, Top-K and Top-P',
        'Vertex AI Generative AI Studio',
      ],
      verification: recordedCredential,
    },
    {
      id: 'tcs-career-edge-genai',
      title: 'TCS iON Career Edge – Generative AI & Professional Essentials',
      issuer: 'Tata Consultancy Services (TCS iON)',
      issueDate: 'July 21, 2026',
      credentialId: '8766-29971339-1016',
      topicsCovered: [
        'Generative AI Essentials',
        'Modern AI Landscape',
        'Business Etiquette',
        'Professional Conduct',
        'IT Foundational Skills',
        'Accounting Basics',
      ],
      verification: {
        ...recordedCredential,
        note:
          'Credential ID supplied. Add the official verification URL when available.',
      },
    },
    {
      id: 'best-computer-advance-excel',
      title: 'Advance Excel (1 Month Intensive)',
      issuer: 'Best Computer Technology',
      issueDate: 'July 2026',
      credentialId: 'BCT/2026/689773',
      topicsCovered: [
        'VLOOKUP and XLOOKUP',
        'INDEX/MATCH',
        'PivotTables',
        'Dynamic Charts and Dashboard Design',
        'Data Validation',
        'Conditional Formatting',
        'Macro Basics',
      ],
      verification: {
        ...recordedCredential,
        note:
          'Credential ID supplied. Add the actual official PDF path to enable document preview.',
      },
    },
    {
      id: 'nasscom-genai-tools',
      title: 'Gen AI Tools Course',
      issuer: 'Nasscom FutureSkills Prime',
      issueDate: '2026',
      topicsCovered: [
        'Generative AI Tools',
        'Productivity and Automation',
        'Emerging AI Standards',
      ],
      verification: {
        ...pendingCredential,
        note:
          'Credential ID is pending according to the supplied details.',
      },
    },
    {
      id: 'officemaster-be10x-excel-ai',
      title: 'Microsoft Excel Using AI Workshops',
      issuer: 'OfficeMaster & Be10x',
      issueDate: '2026',
      topicsCovered: [
        'AI-Assisted Excel Workflows',
        'AI Formulas and Copilots',
        'Prompt Templates for Spreadsheets',
        'Report Generation',
      ],
      verification: {
        ...recordedCredential,
        note:
          'Workshop details supplied. Credential ID and official verification link have not yet been supplied.',
      },
    },
  ],

  events: [
    {
      id: 'hexa-falls',
      title: 'HexaFalls 2',
      organizationOrHost: 'HexaFalls',
      year: '2025',
      roleOrTeam: 'Team Member',
      description:
        'Participation in a competitive developer sprint focused on collaborative problem solving and creative engineering approaches.',
      outcomeOrStatus:
        'Project-based participation and team contribution',
    },
    {
      id: 'college-representation',
      title: 'Institutional Representation',
      organizationOrHost: 'Narula Institute of Technology',
      year: '2025',
      roleOrTeam: 'Student Representative',
      description:
        'Supported academic and technical community activities while building practical visibility across student initiatives.',
      outcomeOrStatus:
        'Active participation in campus and technical engagement',
    },
    {
      id: 'tech-initiative',
      title: 'Student Tech Initiative',
      organizationOrHost: 'Academic Community',
      year: '2025',
      roleOrTeam: 'Collaborator',
      description:
        'Engaged with peer-driven learning and practical technical activities aimed at visible problem solving and innovation mindset.',
      outcomeOrStatus:
        'Co-curricular contribution and learning exposure',
    },
  ],

  skills: [
    {
      categoryName: 'Artificial Intelligence & Data Science',
      description:
        'Hands-on learning across AI, model workflows, data-driven exploration, and applied analytics.',
      skills: [
        {
          name: 'Machine Learning Fundamentals',
          levelDescription:
            'Understanding of model thinking, pattern recognition, and practical AI workflows.',
          verifiedBy: 'Coursework & Projects',
        },
        {
          name: 'Prompt Design & Generative AI',
          levelDescription:
            'Applied use of AI assistants, prompt techniques, and GenAI workflows for problem solving.',
          verifiedBy: 'Google Cloud & IBM SkillsBuild',
        },
        {
          name: 'Data Analysis',
          levelDescription:
            'Interpretation of datasets, insights extraction, and research-oriented analytics approaches.',
          verifiedBy: 'IBM SkillsBuild',
        },
      ],
    },
    {
      categoryName: 'Big Data & Processing',
      description:
        'Distributed data operations and practical data engineering concepts for analytics and learning.',
      skills: [
        {
          name: 'PySpark',
          levelDescription:
            'Working knowledge of distributed processing and scalable data operations.',
          verifiedBy: 'Infosys Springboard',
        },
        {
          name: 'Data Pipelines',
          levelDescription:
            'Understanding of transformation flow, structured data handling, and processing logic.',
          verifiedBy: 'Practical Learning',
        },
        {
          name: 'Spreadsheet Analytics',
          levelDescription:
            'Excel-driven data handling, reporting, and business analysis workflows.',
          verifiedBy: 'Best Computer Technology',
        },
      ],
    },
    {
      categoryName: 'Development & Security',
      description:
        'Practical software development concepts with emphasis on secure and useful system building.',
      skills: [
        {
          name: 'Web Application Development',
          levelDescription:
            'Experience creating responsive interfaces and functional web-based solutions.',
          verifiedBy: 'Project Experience',
        },
        {
          name: 'System Security Awareness',
          levelDescription:
            'Conceptual understanding of secure systems and protective design for digital applications.',
          verifiedBy: 'Project Work',
        },
        {
          name: 'Research & Documentation',
          levelDescription:
            'Ability to structure technical narratives, problem statements, and project outcomes.',
          verifiedBy: 'Academic & Project Work',
        },
      ],
    },
  ],
};
