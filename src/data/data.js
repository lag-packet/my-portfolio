export const personal = {
  name: 'Satar Hassni',
  title: 'Full Stack Software Engineer',
  tagline: 'I build full stack applications that are fast, maintainable, and actually ship.',
  email: 'shassni110@gmail.com',
  github: 'https://github.com/lag-packet',
  linkedin: 'https://www.linkedin.com/in/satar-hassni/',
  twitter: null,
}

export const about = {
  bio: `Satar Hassni is a full stack software engineer based in New York City,
  specializing in production web applications across the entire stack. A Computer
  Science graduate from Queens College (2023), with hands-on experience at
  BlueVoyant building Go and Vue.js systems, and at Open Avenues applying machine
  learning with PyTorch. Currently freelancing while building toward a full-time
  role where clean engineering and real product impact intersect.`,
  stats: [
    { value: '3+', label: 'Years of experience' },
    { value: '10+', label: 'Projects shipped' },
    { value: '2', label: 'Companies worked at' },
    { value: '7+', label: 'Languages & frameworks' },
  ],
}

export const skills = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Go', 'Java', 'C++', 'SQL'],
  },
  {
    category: 'Frameworks',
    items: ['React', 'Next.js', 'Node.js', 'Express', 'Vue.js', 'Angular', 'GraphQL'],
  },
  {
    category: 'Infrastructure',
    items: ['MongoDB', 'MySQL', 'Docker', 'Firebase', 'REST API', 'CI/CD', 'Linux'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Figma', 'VS Code', 'IntelliJ', 'Jira', 'Postman'],
  },
]

export const projects = [
  {
    name: 'Blox.Network',
    description:
      'Community Roblox private server directory supporting 4+ games — RESTful API with ExpressJS and MySQL for server submissions, dynamic search and per-game filtering, and a backend validation pipeline to keep listings active and accurate.',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'MySQL'],
    github: 'https://github.com/lag-packet',
    live: null,
    year: '2024',
  },
  {
    name: 'RabyaBakes.com',
    description:
      'Full stack baking reservation platform — owner dashboard for product and order management, customer booking flow with email and Instagram DM notifications, reducing admin time by 25% and improving order accuracy by 20%.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/lag-packet',
    live: 'https://rabyabakes.com',
    year: '2023',
  },
]

export const experience = [
  {
    company: 'Freelance',
    role: 'Full Stack Software Engineer',
    period: 'Aug 2024 — Present',
    bullets: [
      'Developed and maintained core features and resolved bugs across multiple production applications.',
      'Wrote and maintained tests and documentation, and handled deployments and production issue triage.',
    ],
  },
  {
    company: 'BlueVoyant',
    role: 'Full Stack Software Engineer Intern',
    period: 'Jun 2023 — Aug 2023',
    bullets: [
      'Collaborated with a team to architect and test new software features, contributing to a 20% improvement in portal functionality.',
      'Wrote 5,000+ lines in Vue.js and Go, elevating the codebase toward cleaner, maintainable, and well-documented code.',
      'Participated in code reviews, driving a 15% increase in software quality and a 10% boost in system performance.',
    ],
  },
  {
    company: 'Open Avenues',
    role: 'Data Science Intern',
    period: 'Jun 2022 — Aug 2022',
    bullets: [
      'Built and trained a PyTorch machine learning model for strategic decision-making in dynamic environments.',
      'Applied advanced data science techniques to develop adaptive strategies across diverse simulation scenarios.',
    ],
  },
]
