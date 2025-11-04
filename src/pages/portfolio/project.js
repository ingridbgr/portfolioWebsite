// src/pages/portfolio/Project.js
import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { projects, meta } from "../../content_option";
import "./style.css"; // reuse portfolio styles if you like

export const Project = () => {
  const { slug } = useParams();

  // Find the project once per render
  const project = useMemo(
    () => (projects || []).find(p => p.slug === slug),
    [slug]
  );

  if (!project) {
    // 404-like fallback for unknown slugs
    return (
      <HelmetProvider>
        <Container className="py-5">
          <Helmet>
            <title>Not found | {meta?.title ?? "Portfolio"}</title>
            <meta name="robots" content="noindex" />
          </Helmet>

          <p className="mb-3">
            <Link to="/portfolio">← Back to portfolio</Link>
          </p>
          <h1 className="mb-3">Project not found</h1>
          <p>No project matches “{slug}”.</p>
        </Container>
      </HelmetProvider>
    );
  }

  return (
    <HelmetProvider>
      <Container className="py-5 project-page">
        <Helmet>
          <title>{project.title} | {meta?.title ?? "Portfolio"}</title>
          <meta name="description" content={project.summary ?? meta?.description} />
        </Helmet>

        <p className="mb-3">
          <Link to="/portfolio">← Back to portfolio</Link>
        </p>

        <h1 className="mb-3">{project.title}</h1>

        {project.tech?.length > 0 && (
          <p className="mb-4">
            <strong>Tech:</strong> {project.tech.join(", ")}
          </p>
        )}

        {project.cover && (
          <div className="project-hero mb-4">
            <img
              src={project.cover}
              alt={project.title}
              className="img-fluid rounded"
              loading="lazy"
              decoding="async"
            />
          </div>
        )}

        {/* If your content is HTML (string), render it safely */}
        {typeof project.content === "string" ? (
          <div
            className="project-content"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        ) : (
          // Or render JSX/blocks if you store structured content instead of HTML
          <div className="project-content">
            <p>{project.summary}</p>
          </div>
        )}

        {(project.links?.live || project.links?.repo) && (
          <div className="mt-4 project-links">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="portfolio-cta"
              >
                Live site →
              </a>
            )}
            {" "}
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
                className="portfolio-cta"
              >
                Source code →
              </a>
            )}
          </div>
        )}
      </Container>
    </HelmetProvider>
  );
};
