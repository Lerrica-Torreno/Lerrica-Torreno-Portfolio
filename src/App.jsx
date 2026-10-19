import { useState } from "react";

import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";

import certiportLogo from "./assets/certiport-logo.png";
import ciscoLogo from "./assets/cisco-logo.png";
import ibmLogo from "./assets/ibm-logo.png";
import datacampLogo from "./assets/datacamp-logo.png";

import programmingImage from "./assets/skills/programming.png";
import analyticsImage from "./assets/skills/analytics.png";
import systemsImage from "./assets/skills/systems.png";
import toolsImage from "./assets/skills/tools.png";

import "./App.css";


/* =========================================================
   PERSONAL INFORMATION
========================================================= */

const personalInfo = {
  name: "Lerrica Torreno",

  shortName: "LT",

  role:
    "Computer Science Student | Web Developer",

  introduction:
    "I build practical web applications and data-driven systems through full-stack development, data analytics, artificial intelligence, and decision-support technologies.",

  email:
    "lerricatorreno007@gmail.com",

  github:
    "https://github.com/Lerrica-Torreno",

  linkedin:
    "https://www.linkedin.com/in/lerrica-jeremy-torreno-555a462a9/",

  credly:
    "https://www.credly.com/users/lerrica-torreno",

  cv:
    "/Lerrica-Jeremy-Torreno_CV.pdf",
};


/* =========================================================
   SKILLS
========================================================= */

const skillGroups = [
  {
    image: programmingImage,

    title: "Web Development",

    skills: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
    ],
  },

  {
    image: analyticsImage,

    title: "Data & Programming",

    skills: [
      "Python",
      "SQL",
      "Pandas",
      "Excel",
      "Power BI",
      "Data Analysis",
      "Machine Learning",
    ],
  },

  {
    image: systemsImage,

    title:
      "Database & Deployment",

    skills: [
      "PostgreSQL",
      "Neon",
      "REST APIs",
      "JWT Authentication",
      "Vercel",
      "Render",
    ],
  },

  {
    image: toolsImage,

    title: "Systems & Tools",

    skills: [
      "Linux",
      "Windows",
      "Git",
      "GitHub",
      "VS Code",
      "Vite",
      "Networking",
      "Cloud Fundamentals",
    ],
  },
];


/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    id: 1,

    number: "01",

    title: "LUMI",

    category:
      "Decision Support System",

    status:
      "Thesis Project · 2026",

    description:
      "A web-based renewable energy decision-support system designed to help users evaluate suitable renewable energy options using environmental, location-based, and energy-related data.",

    technologies: [
      "Decision Support",
      "Data Analysis",
      "Geospatial Data",
      "Renewable Energy",
      "Web Development",
    ],

    link: "#",

    liveLink:
      "https://lumi-frontend-xi.vercel.app/",

    caseStudyLink:
      "https://medium.com/@lerricatorreno007/lumi-a-data-driven-renewable-energy-decision-support-system-81244f5f9524",

    featured: true,
  },

  {
    id: 2,

    number: "02",

    title: "InternTrack",

    category: "Full-Stack Development",

    status: "Completed & Deployed",

    description:
      "A full-stack internship application tracker for organizing applications, tracking statuses and deadlines, and managing internship information through a secure authenticated dashboard.",

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JWT",
      "Neon",
      "Vercel",
      "Render",
    ],

    link: "#",

    liveLink: "https://intern-track-beige.vercel.app/",

    caseStudyLink:
      "https://medium.com/@lerricatorreno007/interntrack-building-a-full-stack-internship-application-tracker-dfc2a8714ff5",

    featured: true,
  },

  {
    id: 3,

    number: "03",

    title: "ELARA",

    category:
      "Full-stack Development",

    status:
      "Completed Project",

    description:
      "A hotel revenue and room management interface designed for administrative operations including room management, reservations, housekeeping workflows, and dynamic pricing.",

    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
      "UI/UX",
    ],

    link:
      "https://github.com/Lerrica-Torreno/Elara-Hotel.git",

    liveLink: "#",

    caseStudyLink: "", // Add ELARA Medium URL after publishing

    featured: true,
  },

  {
    id: 4,

    number: "04",

    title:
      "Customer Churn Prediction",

    category:
      "Machine Learning",

    status:
      "Completed Project",

    description:
      "A machine-learning project that analyzes customer account and behavioral data to predict whether a customer is likely to leave a service.",

    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Machine Learning",
      "Data Analysis",
    ],

    link:
      "https://github.com/Lerrica-Torreno/Customer-Churn-Prediction.git",

    liveLink: "#",

    caseStudyLink:
      "https://medium.com/@lerricatorreno007/customer-churn-prediction-predicting-customer-retention-with-machine-learning-f8a5a658a3c9",

    featured: true,
  },

  {
    id: 5,

    number: "05",

    title:
      "Foreign Students' Mental Health Data Analysis",

    category:
      "Data Analytics",

    status:
      "Completed Project",

    description:
      "A data-analysis project examining factors associated with the mental health of international students, including academic pressure, social connection, and length of stay.",

    technologies: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Data Cleaning",
      "Data Analysis",
    ],

    link:
      "https://github.com/Lerrica-Torreno/Project-1-Foreign-Students-Mental-Health-Data-Analysis.git",

    liveLink: "#",

    caseStudyLink:
      "https://medium.com/@lerricatorreno007/project-1-foreign-students-mental-health-d00de9acf58e",

    featured: true,
  },

  {
    id: 6,

    number: "06",

    title:
      "Customer Sentiment Analysis",

    category:
      "Artificial Intelligence",

    status:
      "Completed Project",

    description:
      "A natural-language-processing project that analyzes customer text and classifies sentiment as positive, negative, or neutral.",

    technologies: [
      "Python",
      "NLP",
      "Machine Learning",
    ],

    link:
      "https://github.com/Lerrica-Torreno/Customer-Sentiment-Analysis.git",

    liveLink: "#",

    caseStudyLink:
      "https://medium.com/@lerricatorreno007/customer-sentiment-analysis-understanding-product-reviews-with-nlp-d2b5cdcd85aa",

    featured: false,
  },

  {
    id: 7,

    number: "07",

    title: "Billbot",

    category:
      "Artificial Intelligence",

    status:
      "Completed Project",

    description:
      "A locally hosted chatbot powered by Ollama that processes user prompts and generates responses using a local language model.",

    technologies: [
      "Python",
      "Ollama",
      "Artificial Intelligence",
      "LLM",
    ],

    link:
      "https://github.com/Lerrica-Torreno/Billbot.git",

    liveLink: "#",

    caseStudyLink:
      "https://medium.com/@lerricatorreno007/billbot-building-a-local-educational-ai-chatbot-with-ollama-d19992289235",

    featured: false,
  },

  {
    id: 8,

    number: "08",

    title:
      "Whistledown Personal Library",

    category:
      "Web Development",

    status:
      "Completed Project",

    description:
      "A browser-based personal library interface for organizing, viewing, and managing book-related information.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    link:
      "https://github.com/Lerrica-Torreno/Whistledown-Personal-Library.git",

    liveLink: "https://whistledown-personal-library.vercel.app/#home",

    caseStudyLink:
      "https://medium.com/@lerricatorreno007/whistledown-personal-library-designing-a-simple-and-user-friendly-reading-experience-034764ebbc60",

    featured: false,
  },

  {
    id: 9,

    number: "09",

    title:
      "Basic Association Analysis",

    category:
      "Data Analytics",

    status:
      "Completed Project",

    description:
      "A data-mining project that identifies relationships, recurring patterns, and frequently occurring combinations within a dataset.",

    technologies: [
      "Python",
      "Pandas",
      "Association Rules",
      "Data Mining",
    ],

    link:
      "https://github.com/Lerrica-Torreno/Basic-Association-Analysis.git",

    liveLink: "#",

    caseStudyLink:
      "https://medium.com/@lerricatorreno007/basic-association-analysis-discovering-product-relationships-with-market-basket-analysis-db2700b83f6a",

    featured: false,
  },

  {
    id: 10,

    number: "10",

    title:
      "Personal Portfolio Website",

    category:
      "Web Development",

    status:
      "Active Project",

    description:
      "A responsive React portfolio designed to present my projects, technical skills, education, certifications, and professional background.",

    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Responsive Design",
    ],

    link:
      "https://github.com/Lerrica-Torreno/Web-Systems-Portfolio.git",

    liveLink: "#",

    caseStudyLink: "", // Add portfolio Medium URL if you publish one later

    featured: false,
  },
];


const featuredProjects =
  projects.filter(
    (project) =>
      project.featured
  );


const additionalProjects =
  projects.filter(
    (project) =>
      !project.featured
  );


/* =========================================================
   CERTIFICATIONS
========================================================= */

const certifications = [
  {
    id: 1,

    featured: true,

    title:
      "IT Specialist - Python",

    issuer:
      "Certiport",

    logo:
      certiportLogo,

    description:
      "Validates Python programming, debugging, problem-solving, control flow, and core programming concepts.",

    link:
      "https://www.credly.com/badges/b2030220-c0df-4a83-9c69-6be5e866fed2/public_url",
  },

  {
    id: 2,

    featured: true,

    title:
      "IT Specialist - Networking",

    issuer:
      "Certiport",

    logo:
      certiportLogo,

    description:
      "Validates knowledge of TCP/IP, network architecture, connectivity, configuration, and troubleshooting.",

    link:
      "https://www.credly.com/badges/c5004ef1-5c61-4e25-948d-f77bda804e88/public_url",
  },

  {
    id: 3,

    featured: true,

    title:
      "Data Analytics Essentials",

    issuer:
      "Cisco Networking Academy",

    logo:
      ciscoLogo,

    description:
      "Covers data acquisition, transformation, statistical analysis, SQL, spreadsheets, and visualization.",

    link:
      "https://www.credly.com/badges/4a32fe36-421e-4fc9-b3c8-224253090c1e/public_url",
  },

  {
    id: 4,

    featured: true,

    title:
      "Linux Essentials",

    issuer:
      "Cisco Networking Academy",

    logo:
      ciscoLogo,

    description:
      "Demonstrates foundational Linux command-line, file management, permissions, and system skills.",

    link:
      "https://www.credly.com/badges/2d534c0f-9c95-47bd-bcc4-9e1f31a5e42a/public_url",
  },

  {
    id: 5,

    featured: true,

    title:
      "Cloud Computing Fundamentals",

    issuer:
      "IBM SkillsBuild",

    logo:
      ibmLogo,

    description:
      "Covers cloud architecture, service models, virtualization, containers, deployment, and security.",

    link:
      "https://www.credly.com/badges/fc25d9bc-35e7-443b-8c26-c0a1849be632/public_url",
  },

  {
    id: 6,

    featured: true,

    title:
      "Associate Data Analyst",

    issuer:
      "DataCamp",

    logo:
      datacampLogo,

    description:
      "Developed practical SQL skills for querying, filtering, aggregating, and analyzing relational data.",

    link:
      "https://www.datacamp.com/completed/statement-of-accomplishment/track/a4bc873fccb53b1f01e5e291f6f23f004be4efd6?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa",
  },

  {
    id: 7,

    featured: false,

    title:
      "Data Fundamentals",

    issuer:
      "IBM SkillsBuild",

    logo:
      ibmLogo,

    description:
      "Introduces data analytics, data preparation, visualization, and analytical workflows.",

    link:
      "https://www.credly.com/badges/f5e91b5c-f648-468b-9053-ab7ae69a83f8/public_url",
  },

  {
    id: 8,

    featured: false,

    title:
      "Introduction to Cybersecurity",

    issuer:
      "Cisco Networking Academy",

    logo:
      ciscoLogo,

    description:
      "Covers threats, vulnerabilities, security principles, defensive strategies, and digital asset protection.",

    link:
      "https://www.credly.com/badges/c525af24-2820-4077-9933-81ca0a43d036/public_url",
  },

  {
    id: 9,

    featured: false,

    title:
      "Operating Systems Basics",

    issuer:
      "Cisco Networking Academy",

    logo:
      ciscoLogo,

    description:
      "Covers operating system architecture, configuration, security, connectivity, and troubleshooting.",

    link:
      "https://www.credly.com/badges/676c94bc-4c13-4060-b0d4-9e439579a783/public_url",
  },

  {
    id: 10,

    featured: false,

    title:
      "IC3 Digital Literacy Certification GS6 Level 1",

    issuer:
      "Certiport",

    logo:
      certiportLogo,

    description:
      "Validates digital communication, collaboration, information management, and online safety skills.",

    link:
      "https://www.credly.com/badges/70582307-3ca0-4e08-a168-c1edbed7c20c/public_url",
  },

  {
    id: 11,

    featured: false,

    title:
      "Introduction to Shell",

    issuer:
      "DataCamp",

    logo:
      datacampLogo,

    description:
      "Covers Unix command-line navigation, processes, pipelines, shell commands, and automation.",

    link: "#",
  },

  {
    id: 12,

    featured: false,

    title:
      "Understanding Microsoft Azure",

    issuer:
      "DataCamp",

    logo:
      datacampLogo,

    description:
      "Introduces Azure compute, storage, networking, security, and cloud-resource management.",

    link: "#",
  },
];


const featuredCertifications =
  certifications.filter(
    (certification) =>
      certification.featured
  );


const additionalCertifications =
  certifications.filter(
    (certification) =>
      !certification.featured
  );


/* =========================================================
   CERTIFICATION CARD
========================================================= */

function CertificationCard({
  certification,
}) {
  const hasCertificate =
    certification.link &&
    certification.link !== "#";

  return (
    <article className="certification-card">

      <div className="certification-header">

        <div className="certification-logo-container">
          <img
            className="certification-logo"
            src={certification.logo}
            alt={`${certification.issuer} logo`}
          />
        </div>

        <div className="certification-heading-content">

          <p className="certification-issuer">
            {certification.issuer}
          </p>

          <h3>
            {certification.title}
          </h3>

        </div>

      </div>

      <p className="certification-description">
        {certification.description}
      </p>

      {hasCertificate ? (
        <a
          className="certification-link"
          href={certification.link}
          target="_blank"
          rel="noreferrer"
        >
          View credential
          <span>↗</span>
        </a>
      ) : (
        <span className="certificate-unavailable">
          Credential link coming soon
        </span>
      )}

    </article>
  );
}


/* =========================================================
   APP
========================================================= */

function App() {
  const [
    showAdditionalProjects,
    setShowAdditionalProjects,
  ] = useState(false);

  const [
    showAdditionalCertifications,
    setShowAdditionalCertifications,
  ] = useState(false);


  const gmailComposeUrl =
    `https://mail.google.com/mail/?view=cm&fs=1` +
    `&to=${encodeURIComponent(
      personalInfo.email
    )}` +
    `&su=${encodeURIComponent(
      "Portfolio Inquiry"
    )}`;


  return (
    <div className="app">

      {/* ===================================================
          HERO
      =================================================== */}

      <Header
        name={personalInfo.name}
        shortName={personalInfo.shortName}
        role={personalInfo.role}
        introduction={personalInfo.introduction}
        github={personalInfo.github}
        linkedin={personalInfo.linkedin}
        cv={personalInfo.cv}
      />


      <main>

        {/* =================================================
            ABOUT
        ================================================= */}

        <section
          className="section about-skills-section"
          id="about"
          data-nav-theme="light"
        >
          <div className="section-container">

            <div className="section-heading">

              <p className="section-label">
                About me
              </p>

              <h2 className="section-title">
                Building practical solutions
                through software and data.
              </h2>

            </div>


            <div className="about-skills-layout">

              <div className="about-skills-content">

                <p className="about-lead">
                  I am a fourth-year Computer Science
                  student focused on developing practical,
                  user-centered technology solutions.
                </p>

                <p>
                  My work includes full-stack web
                  applications, machine-learning and
                  data-analysis projects, and LUMI, a
                  renewable-energy decision-support
                  system developed as our capstone
                  project.
                </p>

                <p>
                  I enjoy working across software,
                  databases, data, and IT systems. I am
                  currently seeking an internship where I
                  can contribute to real-world projects
                  while continuing to strengthen my
                  technical experience.
                </p>

              </div>


              <div className="about-skills-technical">

                <p className="about-skills-small-heading">
                  Technical toolkit
                </p>


                <div className="compact-skills-grid">

                  {skillGroups.map(
                    (group) => (
                      <article
                        className="compact-skill-card"
                        key={group.title}
                      >

                        <div className="compact-skill-heading">

                          <div className="compact-skill-icon">

                            <img
                              src={group.image}
                              alt=""
                            />

                          </div>

                          <h3>
                            {group.title}
                          </h3>

                        </div>


                        <div className="compact-skill-list">

                          {group.skills.map(
                            (skill) => (
                              <span
                                className="compact-skill-tag"
                                key={skill}
                              >
                                {skill}
                              </span>
                            )
                          )}

                        </div>

                      </article>
                    )
                  )}

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =================================================
            PROJECTS
        ================================================= */}

        <section
          className="section projects-section"
          id="projects"
          data-nav-theme="blue"
        >
          <div className="section-container">

            <div className="project-heading">

              <div>

                <p className="section-label">
                  Selected work
                </p>

                <h2 className="section-title">
                  Projects that turn ideas into
                  working solutions.
                </h2>

              </div>


              <p className="project-heading-description">
                A selection of work across full-stack
                development, data analytics, artificial
                intelligence, and decision-support
                systems.
              </p>

            </div>


            <div className="projects-grid">

              {featuredProjects.map(
                (project) => (
                  <ProjectCard
                    key={project.id}
                    {...project}
                  />
                )
              )}

            </div>


            <div className="collapsible-section">

              <button
                type="button"
                className="collapsible-toggle"
                aria-expanded={
                  showAdditionalProjects
                }
                aria-controls="additional-projects"
                onClick={() =>
                  setShowAdditionalProjects(
                    (current) =>
                      !current
                  )
                }
              >

                <div className="collapsible-toggle-text">

                  <p className="section-label">
                    More projects
                  </p>

                  <h3>
                    Additional technical work
                  </h3>

                  <p>
                    Explore smaller projects and
                    experiments across web development,
                    AI, and data.
                  </p>

                </div>


                <span
                  className={`dropdown-arrow ${
                    showAdditionalProjects
                      ? "open"
                      : ""
                  }`}
                >
                  ↓
                </span>

              </button>


              <div
                id="additional-projects"
                className={`collapsible-content ${
                  showAdditionalProjects
                    ? "open"
                    : ""
                }`}
              >

                <div className="projects-grid">

                  {additionalProjects.map(
                    (project) => (
                      <ProjectCard
                        key={project.id}
                        {...project}
                      />
                    )
                  )}

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =================================================
            EDUCATION + CREDENTIALS
        ================================================= */}

        <section
          className="section credentials-section"
          id="credentials"
          data-nav-theme="light"
        >
          <div className="section-container">

            <div className="section-heading">

              <p className="section-label">
                Background
              </p>

              <h2 className="section-title">
                Education & credentials.
              </h2>

              <p className="section-description">
                Academic experience and technical
                certifications supporting my foundation
                across software, data, networking,
                systems, and cloud technologies.
              </p>

            </div>


            <article className="education-card">

              <div className="education-main">

                <p className="education-label">
                  Education
                </p>

                <h3>
                  Bachelor of Science in Computer Science
                </h3>

                <p className="education-school">
                  University of Perpetual Help System
                  DALTA – Molino Campus
                </p>

              </div>


              <div className="education-meta">

                <span>
                  4th Year
                </span>

                <span>
                  Present
                </span>

              </div>

            </article>


            <div className="selected-certifications">

              <div className="credentials-heading-row">

                <div>

                  <p className="section-label">
                    Selected certifications
                  </p>

                  <h3>
                    Technical credentials
                  </h3>

                </div>


                <a
                  className="credentials-profile-link"
                  href={personalInfo.credly}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Credly
                  <span>↗</span>
                </a>

              </div>


              <div className="certifications-grid">

                {featuredCertifications.map(
                  (certification) => (
                    <CertificationCard
                      key={certification.id}
                      certification={
                        certification
                      }
                    />
                  )
                )}

              </div>

            </div>


            <div className="collapsible-section">

              <button
                type="button"
                className="collapsible-toggle"
                aria-expanded={
                  showAdditionalCertifications
                }
                aria-controls="additional-certifications"
                onClick={() =>
                  setShowAdditionalCertifications(
                    (current) =>
                      !current
                  )
                }
              >

                <div className="collapsible-toggle-text">

                  <p className="section-label">
                    More credentials
                  </p>

                  <h3>
                    Additional certifications
                  </h3>

                  <p>
                    View additional technical courses and
                    certifications.
                  </p>

                </div>


                <span
                  className={`dropdown-arrow ${
                    showAdditionalCertifications
                      ? "open"
                      : ""
                  }`}
                >
                  ↓
                </span>

              </button>


              <div
                id="additional-certifications"
                className={`collapsible-content ${
                  showAdditionalCertifications
                    ? "open"
                    : ""
                }`}
              >

                <div className="certifications-grid">

                  {additionalCertifications.map(
                    (certification) => (
                      <CertificationCard
                        key={certification.id}
                        certification={
                          certification
                        }
                      />
                    )
                  )}

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =================================================
            CONTACT
        ================================================= */}

        <section
          className="section contact-section"
          id="contact"
          data-nav-theme="dark"
        >
          <div className="section-container">

            <div className="contact-layout">

              <div className="simple-contact-content">

                <p className="section-label light-label">
                  Contact
                </p>

                <h2>
                  Let's build something useful.
                </h2>

                <p className="contact-description">
                  I am currently seeking internship
                  opportunities in software development,
                  IT, data, and related technology roles.
                </p>

              </div>


              <div className="contact-right">

                <div className="contact-actions">

                  <a
                    className="primary-button light-button"
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Email me
                  </a>


                  <a
                    className="secondary-button dark-outline-button"
                    href={personalInfo.cv}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View CV ↗
                  </a>


                  <a
                    className="secondary-button dark-outline-button"
                    href={personalInfo.cv}
                    download="Lerrica-Jeremy-Torreno_CV.pdf"
                  >
                    Download CV ↓
                  </a>


                  <a
                    className="secondary-button dark-outline-button"
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn ↗
                  </a>


                  <a
                    className="secondary-button dark-outline-button"
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>

                </div>


                <a
                  className="contact-email"
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {personalInfo.email}
                </a>

              </div>

            </div>

          </div>
        </section>

      </main>


      {/* ===================================================
          FOOTER
      =================================================== */}

      <footer className="footer">

        <div className="footer-container">

          <div>

            <p className="footer-name">
              {personalInfo.name}
            </p>

            <p className="footer-description">
              Computer Science · Web · Data · IT
            </p>

          </div>


          <nav
            className="footer-links"
            aria-label="Footer navigation"
          >

            <a href="#about">
              About
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#credentials">
              Credentials
            </a>

            <a
              href={personalInfo.cv}
              target="_blank"
              rel="noreferrer"
            >
              CV
            </a>

            <a href="#contact">
              Contact
            </a>

          </nav>


          <p className="copyright">
            © 2026 {personalInfo.name}
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;