function ProjectCard({
  number,
  title,
  category,
  status,
  description,
  technologies = [],
  link,
  liveLink,
  caseStudyLink,
  featured,
}) {
  const hasGithub = link && link !== "#";
  const hasLive = liveLink && liveLink !== "#";
  const hasCaseStudy =
    caseStudyLink && caseStudyLink !== "#";

  return (
    <article
      className={`project-card ${
        featured ? "featured-project" : ""
      }`}
    >
      <div className="project-card-top">
        <span className="project-number">
          {number}
        </span>

        {status && (
          <span className="project-status">
            {status}
          </span>
        )}
      </div>

      <div className="project-card-content">
        <p className="project-category">
          {category}
        </p>

        <h3>{title}</h3>

        <p className="project-description">
          {description}
        </p>

        <div className="technology-list">
          {technologies.map((technology) => (
            <span
              className="technology-tag"
              key={technology}
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      <div className="project-links">
        {hasCaseStudy && (
          <a
            className="project-link case-study-link"
            href={caseStudyLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Case Study
            <span aria-hidden="true">↗</span>
          </a>
        )}

        {hasLive && (
          <a
            className="project-link"
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Project
            <span aria-hidden="true">↗</span>
          </a>
        )}

        {hasGithub && (
          <a
            className="project-link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;