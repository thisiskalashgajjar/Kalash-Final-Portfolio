export const projects: Project[] = [
  {
    id: 1,
    title: "AI-Virtual Try-ON ",
    description: "Developed an extensive AI application to try-on clothes virtually.",
    technologies: ["TensorFlow", "OpenPose", "MediaPipe", "VAE Encoders & Decoders", "UNET"],
    image: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Shopping_SS.width-1300.jpg",
    githubUrl: "https://github.com/jjohn277/AICapstone_COMP385_001"
  },
  {
    id: 2,
    title: "Tumor Detection from Brain-MRI",
    description: "Developed models that can predict Tumor from Brain MRI images.",
    technologies: ["Python", "CNN", "EfficientNetB3", "Tensorflow"],
    image: "https://storage.googleapis.com/kaggle-datasets-images/1608934/2645886/44583c7826d1bdea68598f0eef8e6cfc/dataset-card.jpg?t=2021-09-25-22-03-08",
    githubUrl: "https://github.com/Anupriyanain/Deep_Learning"
  },
  {
    id: 3,
    title: "Mental Health Analysis",
    description: "Developed a Cloud-based application using Sentiment Analysis and used LLM fallback.",
    technologies: ["AWS S3", "Python", "React", "AWS Comprehend", "AWS Lex"],
    image: "https://zimfact.org/wp-content/uploads/2021/07/mental-health.jpg",
    githubUrl: "https://github.com/yourusername/ml-pipeline"
  }
];

export const skills: Skill[] = [
  { name: "Express.js", level: 90, category: "web" },
  { name: "TensorFlow", level: 85, category: "ai" },
  { name: "PyTorch", level: 80, category: "ai" },
  { name: "Machine Learning", level: 85, category: "ai" },
  { name: "Deep Learning", level: 80, category: "ai" },
  { name: "Computer Vision", level: 75, category: "ai" },
  { name: "NLP", level: 80, category: "ai" },
  { name: "React", level: 85, category: "web" },
  { name: "TypeScript", level: 80, category: "web" },
  { name: "Node.js", level: 75, category: "web" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Git", level: 85, category: "tools" },
  { name: "AWS", level: 90, category: "cloud" },
  { name: "Microsoft Azure", level: 90, category: "cloud" },
  { name: "Apache Airflow", level: 90, category: "cloud"},
  { name: "SQL", level: 90, category: "tools" },
  { name: "MongoDB", level: 90, category: "tools" },
  { name: "SQLite", level: 80, category: "tools" }
];

export const education: Education[] = [
  {
    degree: "Software Engineering Technology - Artificial Intelligence",
    institution: "Centennial College",
    duration: "2023 - 2025",
    description: "Specialized in AI and Machine Learning, with focus on Neural Networks, Computer Vision, Deep Learning, and Natural Language Processing."
  }
];