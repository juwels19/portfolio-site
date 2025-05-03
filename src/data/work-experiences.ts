export const workExperiences = [
  {
    title: "Senior Software Engineer (Front-end)",
    company: "Scotiabank",
    companyImage: "./scotiabank.svg",
    startDate: "April 2024",
    endDate: "Present",
    description:
      "In this role I upgraded a core money movement flow, handling over 350 million transactions annually, into a Next.js micro-app with Server Side Rendering. I delivered multiple feature-complete projects aligned with the bank’s design system and Ally standards, supporting thousands of transactions or users daily. By implementing React Query, I improved load times by 30% and cut related bugs by 25%. I also contributed new UI components and enhanced existing ones within the bank’s internal design system. Additionally, I created proof-of-concepts for integrating Tailwind, Next.js app router, and SSR. I was also able to practice my mentoring skills by mentoring five new developers, helping them ramp up in just two weeks instead of a month.",
  },
  {
    title: "Software Engineer (Platform + Front-end)",
    company: "Scotiabank",
    isSequential: true,
    companyImage: "./scotiabank.svg",
    startDate: "June 2023",
    endDate: "April 2024",
    description:
      "I managed the health and reliability of a monorepo with over 10 Next.js micro-apps. I worked closely with the accessibility team to fix around 50 issues flagged by Ally and Google Lighthouse, and I helped reduce internal OWASP defects by 25%. Additionally, I stepped in to develop core banking features whenever other teams needed extra support. It was a great experience balancing maintenance with hands-on development.",
  },
  {
    title: "AI Backend Developer",
    company: "Intact Insurance",
    companyImage: "/intact.jpeg",
    startDate: "September 2022",
    endDate: "December 2022",
    description:
      "I’ve built scalable, resilient data pipelines designed for reliability under heavy workloads. To safeguard critical data, I implemented a dynamic checkpoint system that allows seamless saving and recovery throughout the pipeline. I also integrated cloud services to horizontally scale processing capabilities, enabling efficient concurrent usage and boosting overall system performance.",
    skills: ["Python", "Snowflake", "Databricks"],
  },
  {
    title: "Data Scientist",
    company: "Scotiabank",
    companyImage: "./scotiabank.svg",
    startDate: "January 2022",
    endDate: "April 2022",
    description:
      "I focussed on optimizing data workflows and transforming raw information into actionable insights for the bank's entire GIC portfolio. By overhauling legacy systems with fast, scalable data structures, I reduced the runtime of a critical data pipeline by 500% (yes - that is not a typo). I also designed a customer segmentation program that resolved a persistent error in a deployed pipeline, cutting manual intervention by 97%. To improve team-wide reporting, I automated a PowerBI dashboard to seamlessly parse and visualize multiple data streams. Across all projects, I work closely with stakeholders to deliver insights and visualizations that drive high-impact business decisions.",
    skills: ["Python", "Pandas", "PowerBI"],
  },
  {
    title: "Front-End and Machine Learning Developer",
    company: "Stathletes",
    companyImage: "/stathletes.jpeg",
    startDate: "May 2021",
    endDate: "August 2021",
    description:
      "In this role I built advanced tools to push the boundaries of hockey analytics. I developed a multi-branch Convolutional Deep Learning Network in PyTorch to calculate the “Expected Possession Value” of hockey passes, training the model on over 140,000 tensors and 13 layers of spatiotemporal features extracted from broadcast footage. I also built an Optical Character Recognition model that achieves 85% accuracy in detecting game context—like period, time remaining, and clock location—directly from video frames. To optimize performance, I implemented a centralized datastore that reduced load times by 150% for end-users. On the client side, I designed and deployed three interactive Shiny web applications powered by machine learning models, delivering real-time, data-driven insights to over 200 users.",
    skills: ["Python", "R", "PyTorch", "Pandas", "Matplotlib", "Shiny"],
  },
  {
    title: "Software Developer",
    company: "KPMG Canada",
    companyImage: "/kpmg.jpeg",
    startDate: "September 2020",
    endDate: "December 2020",
    description:
      "I developed an automated VBA tool that integrates with legacy systems, saving over 15 engineering hours annually by extracting KPIs from thousands of client documents. To modernize internal processes, I designed and built a full-stack, RESTful web application using Python and Django to enhance client deliverable tracking. Additionally, I optimized financial operations by improving a Python-based invoicing service that queries the CRA website, resulting in a 50% acceleration in client payments. My work is always backed by comprehensive technical documentation that supports maintainability, troubleshooting, and highlights opportunities for future enhancements.",
    skills: ["Python", "Django", "Selenium", "VBA"],
  },
];
