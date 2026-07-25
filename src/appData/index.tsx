import { App, GalleryImage, Tab, WorkContent, WorkFile, WorkType } from "src/types";
import error from "../../assets/dialog/error.png";
import info from "../../assets/dialog/info.png";
import warning from "../../assets/dialog/warning.png";
import help from "../../assets/dialog/help.png";
import cmd from "../../assets/cmd.png";
import gallery from "../../assets/folder_image.png";
import outlook from "../../assets/outlook.png";
import file from "../../assets/workaccordion/file.png";
import emptyfile from "../../assets/workaccordion/emptyfile.png";
import github from "../../assets/github.png";
import col1 from "../../assets/gallery/0.webp";
import col2 from "../../assets/gallery/1.webp";
import col3 from "../../assets/gallery/2.webp";
import col4 from "../../assets/gallery/3.webp";
import col5 from "../../assets/gallery/4.webp";
import col6 from "../../assets/gallery/5.webp";

export const TechIcon = {
  JAVA: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white",
  PYTHON:
    "https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white",
  GO: "https://img.shields.io/badge/Go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white",
  TYPESCRIPT:
    "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
  JAVASCRIPT:
    "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  KOTLIN:
    "https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white",
  CPP: "https://img.shields.io/badge/C++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
  SQL: "https://img.shields.io/badge/SQL-%234479A1.svg?style=for-the-badge&logo=postgresql&logoColor=white",
  REACT:
    "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  LITELEMENT:
    "https://img.shields.io/badge/Lit-%23324FFF.svg?style=for-the-badge&logo=lit&logoColor=white",
  HTML: "https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
  CSS: "https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
  AWS: "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
  DOCKER:
    "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white",
  KUBERNETES:
    "https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white",
  KAFKA:
    "https://img.shields.io/badge/Apache%20Kafka-%23231F20.svg?style=for-the-badge&logo=apache-kafka&logoColor=white",
  POSTGRESQL:
    "https://img.shields.io/badge/postgresql-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
  SCIKITLEARN:
    "https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white",
  PROMETHEUS:
    "https://img.shields.io/badge/Prometheus-%23E6522C.svg?style=for-the-badge&logo=prometheus&logoColor=white",
  GRAFANA:
    "https://img.shields.io/badge/grafana-%23F46800.svg?style=for-the-badge&logo=grafana&logoColor=white",
  GIT: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
};

export const AppDirectory: Map<number, Tab> = new Map([
  [
    0,
    {
      id: 0,
      title: "Welcome To My Website - Quick Start Guide",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.WELCOME,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    1,
    {
      id: 0,
      title: "Outlook Express",
      message: "",
      Icon: outlook,
      isMinimized: false,
      zIndex: 0,
      program: App.OUTLOOK,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    2,
    {
      id: 0,
      title: "My Work",
      message: "",
      Icon: cmd,
      isMinimized: false,
      zIndex: 0,
      program: App.MYWORK,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    4,
    {
      id: 0,
      title: "My Photography Collection",
      message: "",
      Icon: gallery,
      isMinimized: false,
      zIndex: 0,
      program: App.MYGALLERY,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    5,
    {
      id: 0,
      title: "Error",
      message: "",
      Icon: error,
      isMinimized: false,
      zIndex: 0,
      program: App.ERROR,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    6,
    {
      id: 0,
      title: "Warning",
      message: "",
      Icon: warning,
      isMinimized: false,
      zIndex: 0,
      program: App.WARNING,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    7,
    {
      id: 0,
      title: "Info",
      message: "",
      Icon: info,
      isMinimized: false,
      zIndex: 0,
      program: App.INFO,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    8,
    {
      id: 0,
      title: "Help",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.HELP,
      prompt: true,
      backBtnActive: false,
    },
  ],
]);

export const WorkAccordionTitles = [WorkType.EXPERIENCE, WorkType.PROJECTS];

export const GalleryAccordionTitles = ["Details"];

export const WorkData = [
  {
    id: 1,
    title: "Associate Software Engineer - ServiceNow",
    date: "July 2025 - Present",
    gitURL: "",
    techstack: [
      TechIcon.HTML,
      TechIcon.CSS,
      TechIcon.JAVASCRIPT,
      TechIcon.REACT,
      TechIcon.TYPESCRIPT,
      TechIcon.LITELEMENT,
    ],
    gallery: [],
    overview: `On the ServiceNow Store team, I work on SEO improvements, rendering pipeline
    enhancements (SSR/CSR hydration, sorting, filtering, caching) and user-experience
    optimizations. I led the migration of key workflows from CSR to SSR, fixing critical loading
    issues on the purchase page and improving both performance and defect rates. I also engineered
    a multi-persona AI review framework (SE, QA, Performance, Security, DevOps, Devil's Advocate)
    that simulates code reviews, auto-raises PRs and enriches work notes, and built an agentic
    CI/CD workflow that syncs demand records across environments and auto-generates epics and
    stories. To safeguard releases, I developed Playwright end-to-end test automation integrated
    into Jenkins nightly runs to catch regressions before release.`,
  },
  {
    id: 2,
    title: "Software Engineer Intern - Amazon",
    date: "Jan 2025 - June 2025",
    gitURL: "",
    techstack: [
      TechIcon.JAVA,
      TechIcon.JAVASCRIPT,
      TechIcon.AWS,
      TechIcon.PYTHON,
      TechIcon.TYPESCRIPT,
    ],
    gallery: [],
    overview: `During my internship at Amazon, I created an LLM-based floor extraction model using
    Claude 3.5 on Amazon Bedrock, achieving 87% prediction accuracy. I led the ARS transition from
    batch to real-time OpenSearch indexing by streaming Necto updates via Lambda to enable
    incremental upserts, and developed full-stack CloudWatch dashboards using AWS CDK to track
    ingestion health and alert on anomalies. I enforced Step Function ingestion payload limits with
    an S3 payload-offloading mechanism for large payloads, and migrated legacy shared libraries in
    the GAMCore-Live pipeline (GAMCli, GAMAccessLayer, GAMTestCommon) from JDK 8 to JDK 21,
    resolving cascading dependency conflicts and aligning the pipeline with PE risk requirements.`,
  },
  {
    id: 3,
    title: "Associate Software Engineer Intern - ServiceNow",
    date: "June 2024 - August 2024",
    gitURL: "",
    techstack: [
      TechIcon.HTML,
      TechIcon.CSS,
      TechIcon.REACT,
      TechIcon.JAVASCRIPT,
    ],
    gallery: [],
    overview: `My first stint at ServiceNow was with the app-store team in the Platform org, where I
    developed modals and screens and built frontend for the ServiceNow Store website. I also
    contributed to migrating the website from AngularJS to React.js.`,
  },
  {
    id: 4,
    title: "Women Engineers Program (supported by Google)",
    date: "April 2022 - April 2024",
    gitURL: "",
    techstack: [TechIcon.PYTHON, TechIcon.GIT],
    gallery: [],
    overview: `I was awarded a scholarship for being among the top 250 out of 28,000+ applicants to
    the Women Engineers Program supported by Google. Over two years I completed technical and
    corporate training (Clean Coding, OOP with Python, Git, Linux, project management) and was
    mentored directly by engineers at Google.`,
  },
  {
    id: 5,
    title: "EventPulse - Event-Driven Fraud Detection Platform",
    date: "June 2026",
    gitURL: "https://github.com/khushichauhan05/eventpulse",
    techstack: [
      TechIcon.GO,
      TechIcon.KAFKA,
      TechIcon.POSTGRESQL,
      TechIcon.DOCKER,
      TechIcon.KUBERNETES,
      TechIcon.PROMETHEUS,
      TechIcon.GRAFANA,
    ],
    gallery: [],
    overview: `A production-grade, event-driven fraud detection platform that ingests transaction
    events via REST APIs, scores them through a real-time Kafka streaming pipeline, and persists
    fraud alerts in PostgreSQL. Deployed on Kubernetes with Horizontal Pod Autoscaling (2-10
    replicas), RBAC, and full Prometheus/Grafana observability. Load tested at 818 transactions
    with 0 failures and a P99 latency under 48ms.`,
  },
  {
    id: 6,
    title: "Breast Cancer Classification - Adaptive Voting Ensemble",
    date: "March 2025",
    gitURL: "",
    techstack: [TechIcon.PYTHON, TechIcon.SCIKITLEARN],
    gallery: [],
    overview: `A breast cancer classification system integrating Decision Tree and Random Forest
    models with an adaptive weighted voting mechanism, achieving 97% accuracy on the Wisconsin
    Diagnostic Dataset.`,
  },
  {
    id: 7,
    title: "MetroNav+ - Delhi Metro Route Finder",
    date: "May 2023",
    gitURL: "https://github.com/khushichauhan05/metro-delhi-route",
    techstack: [TechIcon.JAVA],
    gallery: [],
    overview: `A Java program that takes the source and destination stations of the Delhi Metro from
    the user and displays the fare and shortest route for a seamless travel experience, along with a
    metro map for better navigation.`,
  },
] as WorkContent[];

export const WorkAccordionContent = [
  {
    id: 1,
    type: WorkType.EXPERIENCE,
    icon: github,
    title: "Associate Software Engineer - ServiceNow",
    content: WorkData[WorkData.findIndex((x) => x.id === 1)],
  },
  {
    id: 2,
    type: WorkType.EXPERIENCE,
    icon: github,
    title: "Software Engineer Intern - Amazon",
    content: WorkData[WorkData.findIndex((x) => x.id === 2)],
  },
  {
    id: 3,
    type: WorkType.EXPERIENCE,
    icon: github,
    title: "ASE Intern - ServiceNow",
    content: WorkData[WorkData.findIndex((x) => x.id === 3)],
  },
  {
    id: 4,
    type: WorkType.EXPERIENCE,
    icon: github,
    title: "Women Engineers Program (Google)",
    content: WorkData[WorkData.findIndex((x) => x.id === 4)],
  },
  {
    id: 5,
    type: WorkType.PROJECTS,
    icon: file,
    title: "EventPulse - Fraud Detection Platform",
    content: WorkData[WorkData.findIndex((x) => x.id === 5)],
  },
  {
    id: 6,
    type: WorkType.PROJECTS,
    icon: file,
    title: "Breast Cancer Classification",
    content: WorkData[WorkData.findIndex((x) => x.id === 6)],
  },
  {
    id: 7,
    type: WorkType.PROJECTS,
    icon: emptyfile,
    title: "MetroNav+ - Delhi Metro Route Finder",
    content: WorkData[WorkData.findIndex((x) => x.id === 7)],
  },
] as WorkFile[];

// For My Photography Collection
export const PhotoCollection = [
  {
    id: 0,
    title: "Rocky afternoon",
    location: "Dingboche-Lobuche, Nepal",
    desc: "Taken enroute to Everest Base Camp",
    date: "31 December 2022",
    img: col1,
  },
  {
    id: 1,
    title: "Himalayan Mountain",
    location: "Lobuche-GorakShep, Nepal",
    desc: "Icy morning",
    date: "1 January 2023",
    img: col2,
  },
  {
    id: 2,
    title: "Autumn Foliage",
    location: "Kyoto, Japan",
    desc: "Japanese Autumn Foliage in the Imperial Palace of Kyoto",
    date: "23 November 2023",
    img: col3,
  },
  {
    id: 3,
    title: "Japanese Symmetry",
    location: "Kiyomizu Temple, Kyoto",
    desc: "One of the most famous temples in Kyoto, Japan",
    date: "22 November 2023",
    img: col4,
  },
  {
    id: 4,
    title: "Australia Forest Trail",
    location: "Aqueduct Road, Melbourne, Australia",
    desc: "Bird eye view of the forest trail during winter",
    date: "June 2022",
    img: col5,
  },
  {
    id: 5,
    title: "Milky Wave",
    location: "Waiao Beach, Yilan, Taiwan",
    desc: "Surfing in the middle of a milky ocean",
    date: "17 November 2022",
    img: col6,
  },
] as GalleryImage[];
