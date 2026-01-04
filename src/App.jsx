import { useEffect, useRef } from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import cvFile from './assets/My_CV.pdf'
import profileImage from './assets/profile.jpeg'
import ScrollToTop from './scrollToTop.jsx'; 
const headerLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mfarhanmughal' },
  { label: 'GitHub', href: 'https://github.com/codevizit' },
  { label: 'Email', href: 'mailto:sardarfarhanmughal627@gmail.com' },
]

const skills = [
  {
    title: 'Programming Languages',
    items: ['Python', 'R', 'SQL', 'C++', 'Java'],
  },
  {
    title: 'ML/DL Frameworks',
    items: [
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'Neural Networks',
      'CNNs',
      'RNNs',
      'Model Optimization',
    ],
  },
  {
    title: 'NLP & GenAI',
    items: [
      'Text & Speech Processing',
      'Sentiment Analysis',
      'Transformer Models',
      'LangChain',
      'LangGraph',
      'RAG',
      'Fine-tuning BERT',
    ],
  },
  {
    title: 'Tools & Libraries',
    items: [
      'Jupyter',
      'Google Colab',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Git',
      'Flask',
      'FastAPI',
      'Pydantic',
      'Streamlit',
      'FAISS',
      'Vertex AI',
    ],
  },
  {
    title: 'Cloud & Automation',
    items: ['AWS', 'Sagemaker', 'n8n.io', 'Data Mining'],
  },
  {
    title: 'Frontend',
    items: ['React Native', 'HTML', 'CSS'],
  },
]

const projects = [
  {
    slug: 'smart-irrigation-system',
    title: 'Smart Irrigation System (FYP)',
    year: '2025',
    description:
      'Neural Network-based irrigation prediction system achieving 98% accuracy with GPT-powered recommendations and IoT integration.',
    tools: ['Python', 'Neural Networks', 'ESP32', 'Arduino', 'React Native'],
    status: 'Completed',
    image:
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80&sat=-20',
    imageAlt: 'Smart irrigation system with sensors and mobile app interface',
    github: 'https://github.com/MFarhanMughal/smart-irrigation-system',
    summary:
      'Developed an intelligent irrigation system that combines sensor data with WeatherAPI to predict optimal irrigation timing. The system uses a Neural Network model to achieve 98% prediction accuracy and integrates GPT-powered recommendations to reduce manual intervention.',
    highlights: [
      'Neural Network model achieving 98% irrigation prediction accuracy',
      'GPT-powered recommendations for automated decision-making',
      'Full-stack implementation with ESP32/Arduino hardware and React Native mobile app',
      'Real-time sensor data integration with WeatherAPI',
    ],
    detailSections: [
      {
        title: 'Problem',
        body: 'Traditional irrigation systems lack intelligence and often waste water resources. Farmers need an automated solution that can predict optimal irrigation timing based on environmental conditions.',
      },
      {
        title: 'Solution',
        body: 'Built a comprehensive IoT-based system that collects sensor data (soil moisture, temperature, humidity) and combines it with WeatherAPI data. A Neural Network model processes this information to predict irrigation needs with 98% accuracy. GPT integration provides intelligent recommendations, and a React Native app enables remote monitoring and control.',
      },
      {
        title: 'Impact',
        body: 'The system significantly reduces water waste and manual intervention while maintaining optimal crop health. The high accuracy rate ensures efficient resource utilization and cost savings for agricultural operations.',
      },
    ],
  },
  {
    slug: 'agentic-chatbot-rag',
    title: 'Agentic Chatbot with RAG and Tools',
    year: '2025',
    description:
      'Advanced agentic AI chatbot capable of retrieving external knowledge using RAG, integrated with multiple tools and APIs for task automation.',
    tools: ['LangChain', 'LangGraph', 'FAISS', 'OpenAI', 'Streamlit'],
    status: 'Completed',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80&sat=-15',
    imageAlt: 'AI chatbot interface with RAG capabilities',
    github: 'https://github.com/MFarhanMughal/agentic-chatbot-rag',
    summary:
      'Developed an agentic AI chatbot that leverages Retrieval-Augmented Generation (RAG) to retrieve and reason over external knowledge. The system integrates multiple tools and APIs to enable task automation and provide contextual responses through an interactive Streamlit interface.',
    highlights: [
      'RAG implementation for knowledge retrieval and contextual reasoning',
      'Multi-tool integration for task automation and API connectivity',
      'Interactive Streamlit interface for real-time AI assistance',
      'Advanced agentic architecture using LangChain and LangGraph',
    ],
    detailSections: [
      {
        title: 'Architecture',
        body: 'Built using LangChain and LangGraph to create an agentic system that can reason, retrieve information, and execute tasks. FAISS vector database enables efficient similarity search for knowledge retrieval, while OpenAI models power the conversational capabilities.',
      },
      {
        title: 'Features',
        body: 'The chatbot can retrieve information from external knowledge bases, integrate with multiple APIs for task automation, and provide contextual responses. The Streamlit interface allows users to interact with the system in real-time, making it suitable for various applications including customer support, research assistance, and workflow automation.',
      },
      {
        title: 'Applications',
        body: 'This system demonstrates practical applications of agentic AI in real-world scenarios, combining RAG for knowledge management with tool integration for actionable AI assistance.',
      },
    ],
  },
]

const projectLookup = Object.fromEntries(projects.map((project) => [project.slug, project]))
const featuredProjects = projects.slice(0, 3)

const experiences = [
  {
    role: 'Tech-Intern — Knodemy NSTP',
    period: 'Oct 2025 (1 Month)',
    summary:
      'Contributed to developing and training AI agents integrated into educational platforms to enhance interactivity and personalized learning experiences. Organized and facilitated interactive AI learning sessions and workshops for K–12 learners.',
    link: 'https://drive.google.com/file/d/1vvRzesFR29uyj-6jkl8Zmptdq-Vu747p/view',
  },
  {
    role: 'AI Developer Intern — Wise Tech',
    period: 'Jan 2025 – June 2025 (5 Months)',
    summary:
      'Contributed to the development, optimization, and evaluation of machine learning models, including data preprocessing, feature engineering, and performance tuning. Conducted data analysis and technical research, demonstrating strong problem-solving skills and professional teamwork.',
    link: 'https://drive.google.com/file/d/1yOa0BzuW_DAFhvocW3VM9UWP4yn2QcpI/view',
  },
  {
    role: 'Subject Guide / Tutor — Bright Head Academy',
    period: 'Jan 2024 – June 2024 (6 Months)',
    summary:
      'Guided and mentored students in Artificial Intelligence, Machine Learning, and Python programming projects. Supported international students (US, UK, Canada, Europe) by supervising projects and simplifying complex AI/ML concepts to improve problem-solving skills.',
    link: 'https://drive.google.com/file/d/1EsxwPi4jvCasSHrF6DaoYIpeVlCtIYs7/view',
  },
]

const education = [
  {
    school: 'BS Artificial Intelligence — National University of Modern Languages (NUML), Islamabad',
    detail: 'Feb 2022 – Jan 2026 • CGPA: 3.5 / 4.0 • Among the top 3% of the batch',
  },
]

const certifications = [
  {
    title: 'Fine Tune BERT for Text Classification with TensorFlow',
    href: 'https://www.coursera.org/account/accomplishments/verify/YR6T8KJ6XJ47',
    format: 'Coursera',
  },
  {
    title: 'Introduction to Generative AI',
    href: 'https://www.coursera.org/account/accomplishments/verify/TIPVU2VNYF79',
    format: 'Google Cloud',
  },
  {
    title: 'Programming for Everybody (Getting Started with Python)',
    href: 'https://www.coursera.org/account/accomplishments/verify/DHQWUG2T6VS4',
    format: 'Coursera',
  },
  {
    title: 'Introduction to Computer Vision and Image Processing',
    href: 'https://www.coursera.org/account/accomplishments/verify/0OLH9W0JP304',
    format: 'Coursera',
  },
  {
    title: 'Generative AI with AWS',
    href: 'https://www.udacity.com/certificate/e/730111c6-3f00-11f0-a8fb-5fbc2e85c2eb',
    format: 'Udacity',
  },
]

const statusStyles = {
  Completed:
    'border-emerald-400/40 bg-emerald-400/10 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.15)]',
  'In Progress':
    'border-amber-400/40 bg-amber-400/10 text-amber-200 shadow-[0_0_15px_rgba(251,191,36,0.15)]',
  'Coming Soon':
    'border-cyan-400/40 bg-cyan-400/5 text-cyan-200 shadow-[0_0_15px_rgba(6,182,212,0.12)]',
}

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}



function Section({ id, eyebrow, title, children }) {
  return (
    <Motion.section
      id={id}
      className="py-10 sm:py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeIn}
    >
      <p className="text-sm uppercase tracking-[0.35em] text-gray-500">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
      <div className="mt-6 text-base text-gray-300 sm:text-lg">{children}</div>
    </Motion.section>
  )
}

function ProjectCard({ project, index = 0, compact = false }) {
  const cardStyles = compact
    ? 'bg-white/5 shadow-[0_15px_50px_rgba(0,0,0,0.35)]'
    : 'bg-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.45)]'

  const isComingSoon = project.status === 'Coming Soon'
  const isLinkable = !isComingSoon

  return (
    <Motion.article
      className={`relative rounded-3xl border border-white/5 p-6 ${cardStyles} ${
        isLinkable ? 'transition hover:-translate-y-1 hover:border-[#64ffda]/20 hover:shadow-[0_30px_90px_rgba(100,255,218,0.05)]' : ''
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: index * 0.05, ease: 'easeOut' },
        },
      }}
    >
      {isLinkable ? (
        <Link
          to={`/projects/${project.slug}`}
          className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#64ffda]"
        >
          <CardContent project={project} />
        </Link>
      ) : (
        <CardContent project={project} comingSoon />
      )}
    </Motion.article>
  )
}

function CardContent({ project, comingSoon = false }) {
  return (
    <>
      <span className="absolute -left-[33px] top-8 hidden h-3 w-3 items-center justify-center rounded-full border border-emerald-300/60 bg-emerald-300/20 sm:flex" />
      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
        <p className="font-mono tracking-[0.2em] text-[#64ffda]">{project.year}</p>
        <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[project.status] ?? ''}`}>
          {project.status}
        </span>
      </div>
      <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
      <p className="mt-3 text-gray-300">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        {project.tools.map((tool) => (
          <span key={tool} className="rounded-full bg-white/5 px-3 py-1 text-gray-200">
            {tool}
          </span>
        ))}
      </div>
      {comingSoon && (
        <p className="mt-6 text-sm font-medium text-gray-500">Case study coming soon</p>
      )}
    </>
  )
}

function ProjectStatusLegend() {
  return (
    <div className="mt-6 flex flex-wrap gap-3 text-xs">
      {Object.entries(statusStyles).map(([status, style]) => (
        <span
          key={status}
          className={`flex items-center gap-2 rounded-full border px-3 py-1 font-semibold ${style}`}
        >
          <span className="h-2 w-2 rounded-full bg-current" />
          {status}
        </span>
      ))}
    </div>
  )
}

function HeroSection() {
  return (
    <Motion.header className="space-y-6 pb-14" initial="hidden" animate="visible" variants={fadeIn}>
      <p className="text-xs uppercase tracking-[0.5em] text-gray-500">Portfolio</p>
      <div className="flex items-center justify-between gap-6">
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">
          M Farhan Mughal<span className="text-[#64ffda]">.</span>
        </h1>
        <Motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex-shrink-0"
        >
          <div className="relative h-28 w-28 sm:h-40 sm:w-40">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#64ffda]/20 to-[#64ffda]/5 blur-xl" />
            <img
              src={profileImage}
              alt="M Farhan Mughal"
              className="relative h-full w-full rounded-full border-4 border-[#64ffda]/30 object-cover shadow-[0_0_30px_rgba(100,255,218,0.3)]"
            />
          </div>
        </Motion.div>
      </div>
      <div className="text-lg text-gray-300 sm:text-xl">
        <p className="font-medium text-white">Associate AI/ML Engineer</p>
        <p className="text-gray-400">Islamabad, Pakistan</p>
      </div>
      <div className="text-base text-gray-400">
        <p>
          Aspiring AI professional equipped with hands-on experience in machine learning, deep learning, Agentic AI and data science, 
          gained through real-world projects and top-rated certifications. Skilled in Python and working with large language models. 
          Passionate about transforming complex data into intelligent solutions and exploring the potential of intelligent systems to create meaningful impact.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 text-sm">
        {headerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-gray-200 transition hover:-translate-y-0.5 hover:border-[#64ffda] hover:text-[#64ffda]"
            target="_blank"
            rel="noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 text-sm">
        <a
          href={cvFile}
          download="M_Farhan_Mughal_CV.pdf"
          className="inline-flex items-center gap-2 rounded-full border border-[#64ffda]/70 bg-[#64ffda]/10 px-5 py-2 font-semibold text-[#64ffda] shadow-[0_10px_30px_rgba(100,255,218,0.25)] transition hover:-translate-y-0.5 hover:bg-[#64ffda]/20"
        >
          Download CV
          <span aria-hidden="true" className="text-base">
            ↓
          </span>
        </a>
      </div>
    </Motion.header>
  )
}

function SkillsSection() {
  return (
    <Section id="skills" eyebrow="Capabilities" title="Skills & Focus Areas">
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-white/5 bg-white/5 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">{group.title}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function ProjectsHighlight() {
  return (
    <Section id="projects" eyebrow="Selected Work" title="Projects & Experiments">
      <div className="relative pl-0 md:pl-8">
        <span className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-[#64ffda] via-emerald-300/40 to-transparent sm:block" />
        <div className="space-y-10">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} compact />
          ))}
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-3 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
        <p>Click any project to dive into the dedicated case study page.</p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-gray-200 transition hover:-translate-y-0.5 hover:border-[#64ffda] hover:text-[#64ffda]"
        >
          Browse the archive
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </Section>
  )
}

function ExperienceSection() {
  return (
    <Section id="experience" eyebrow="Journey" title="Experience">
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.role} className="rounded-2xl border border-white/5 bg-white/10 p-6 shadow-inner shadow-black/30">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xl font-semibold text-white">{exp.role}</p>
              <p className="text-sm font-mono uppercase tracking-[0.3em] text-gray-500">{exp.period}</p>
            </div>
            <p className="mt-3 text-gray-300">{exp.summary}</p>
            {exp.link && (
              <a
                href={exp.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-[#64ffda] transition hover:text-[#64ffda]/80 hover:underline"
              >
                View Experience Letter
                <span aria-hidden="true" className="text-xs">↗</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}

function EducationSection() {
  return (
    <Section id="education" eyebrow="Learning" title="Education">
      <div className="space-y-6">
        {education.map((edu) => (
          <div key={edu.school} className="flex flex-col gap-1 rounded-2xl border border-white/5 bg-white/10 p-5">
            <p className="text-lg font-semibold text-white">{edu.school}</p>
            <p className="text-sm text-gray-400">{edu.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function CertificationsSection() {
  return (
    <Section id="certifications" eyebrow="Validation" title="Certifications">
      <div className="flex flex-wrap gap-3">
        {certifications.map((cert) => (
          <a
            key={cert.title}
            href={cert.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200 transition hover:-translate-y-0.5 hover:border-[#64ffda] hover:text-[#64ffda]"
          >
            {cert.title}
            <span className="text-xs text-gray-500">{cert.format}</span>
          </a>
        ))}
      </div>
    </Section>
  )
}

function ProjectsPage() {
  const activeProjects = projects.filter((project) => project.status !== 'Coming Soon')
  const upcomingProjects = projects.filter((project) => project.status === 'Coming Soon')

  return (
    <div className="flex-1">
      <Motion.section className="py-10" initial="hidden" animate="visible" variants={fadeIn}>
        <p className="text-sm uppercase tracking-[0.35em] text-gray-500">Project Archive</p>
        <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">All Projects & Experiments</h1>
        <p className="mt-4 max-w-2xl text-base text-gray-300 sm:text-lg">
          Every build, experiment, and prototype that keeps my stack sharp. Completed launches are listed first,
          followed by upcoming drops currently in the lab.
        </p>
        <ProjectStatusLegend />
      </Motion.section>

      <div className="space-y-4">
        {activeProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>

      {upcomingProjects.length > 0 && (
        <Section id="upcoming" eyebrow="Soon" title="On the Roadmap">
          <div className="space-y-6">
            {upcomingProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </Section>
      )}
    </div>
  )
}

function ProjectDetailPage() {
  const { slug } = useParams()
  const project = slug ? projectLookup[slug] : null

  if (!project) {
    return (
      <Motion.section className="py-20" initial="hidden" animate="visible" variants={fadeIn}>
        <p className="text-sm uppercase tracking-[0.35em] text-gray-500">Project</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Project not found</h1>
        <p className="mt-4 text-gray-400">The case study you’re looking for doesn’t exist yet.</p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <Link
            to="/"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-gray-200 transition hover:-translate-y-0.5 hover:border-[#64ffda] hover:text-[#64ffda]"
          >
            ← Back home
          </Link>
          <Link
            to="/projects"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-gray-200 transition hover:-translate-y-0.5 hover:border-[#64ffda] hover:text-[#64ffda]"
          >
            Browse archive
          </Link>
        </div>
      </Motion.section>
    )
  }

  const isComingSoon = project.status === 'Coming Soon'
  const { image, imageAlt, summary, highlights = [], detailSections = [], github } = project

  return (
    <Motion.section className="py-10" initial="hidden" animate="visible" variants={fadeIn}>
      <p className="text-sm uppercase tracking-[0.35em] text-gray-500">Case Study</p>
      <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{project.title}</h1>
      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-400">
        <span className="font-mono tracking-[0.2em] text-[#64ffda]">{project.year}</span>
        <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[project.status] ?? ''}`}>
          {project.status}
        </span>
      </div>
      {image && (
        <div className="mt-8 overflow-hidden rounded-3xl border border-white/5 bg-white/5">
          <img src={image} alt={imageAlt ?? project.title} className="h-full w-full object-cover" loading="lazy" />
        </div>
      )}
      <p className="mt-8 text-lg text-gray-200">{summary ?? project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2 text-xs">
        {project.tools.map((tool) => (
          <span key={tool} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-gray-200">
            {tool}
          </span>
        ))}
      </div>
      {!isComingSoon && highlights.length > 0 && (
        <ul className="mt-8 space-y-3 text-sm text-gray-300">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#64ffda]" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-10 space-y-6 text-base text-gray-300">
        {detailSections.length > 0 ? (
          detailSections.map((section) => (
            <div key={`${project.slug}-${section.title}`}>
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500">{section.title}</p>
              <p className="mt-2 text-gray-200">{section.body}</p>
            </div>
          ))
        ) : (
          <p>
            I’m still polishing the full breakdown for this build. Check back soon for architecture notes, dataset
            choices, and deployment lessons.
          </p>
        )}
      </div>
      <div className="mt-10 flex flex-wrap gap-3 text-sm">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-gray-200 transition hover:-translate-y-0.5 hover:border-[#64ffda] hover:text-[#64ffda]"
          >
            View on GitHub
            <span aria-hidden="true">↗</span>
          </a>
        )}
        <Link
          to="/projects"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-gray-200 transition hover:-translate-y-0.5 hover:border-[#64ffda] hover:text-[#64ffda]"
        >
          Archive
        </Link>
        <Link
          to="/"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-gray-200 transition hover:-translate-y-0.5 hover:border-[#64ffda] hover:text-[#64ffda]"
        >
          ← Back home
        </Link>
      </div>
    </Motion.section>
  )
}

function NotFoundPage() {
  return (
    <Motion.section className="py-20" initial="hidden" animate="visible" variants={fadeIn}>
      <p className="text-sm uppercase tracking-[0.35em] text-gray-500">Not Found</p>
      <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">This page drifted off.</h1>
      <p className="mt-4 max-w-xl text-gray-400">
        The URL you entered doesn’t exist. Head back to the homepage or explore the project archive.
      </p>
      <div className="mt-8 flex flex-wrap gap-3 text-sm">
        <Link
          to="/"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-gray-200 transition hover:-translate-y-0.5 hover:border-[#64ffda] hover:text-[#64ffda]"
        >
          ← Back home
        </Link>
        <Link
          to="/projects"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-gray-200 transition hover:-translate-y-0.5 hover:border-[#64ffda] hover:text-[#64ffda]"
        >
          Browse projects
        </Link>
      </div>
    </Motion.section>
  )
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ProjectsHighlight />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
    </>
  )
}

function SiteFooter() {
  return (
    <Motion.footer
      className="mt-auto border-t border-white/5 pt-8 text-sm text-gray-500"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="flex flex-wrap items-center gap-3 text-gray-400">
        {headerLinks.map((link) => (
          <a key={link.label} href={link.href} className="hover:text-[#64ffda]" target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
      <p className="mt-4 text-gray-500">
        <span>M Farhan Mughal</span> — © 2025
      </p>
    </Motion.footer>
  )
}

function App() {
  const glowRef = useRef(null)

  useEffect(() => {
    const glowEl = glowRef.current
    if (!glowEl) return

    const handlePointerMove = (event) => {
      glowEl.style.left = `${event.clientX}px`
      glowEl.style.top = `${event.clientY}px`
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  return (
    <div className="min-h-screen text-gray-100" style={{ backgroundColor: 'var(--page-bg)' }}>
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-5 pb-16 pt-10 sm:px-6 lg:px-0">
        <ScrollToTop />  {/* for scroll to above */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <SiteFooter />
      </div>
    </div>
  )
}

export default App
