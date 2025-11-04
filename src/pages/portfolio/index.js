import { useMemo, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";            // ← add this
import { dataportfolio, meta, projects } from "../../content_option";

const INITIAL_VISIBLE = 4;
const EXPANDED_MAX = 12;

export const Portfolio = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const slugForTitle = (title) =>
    (projects || []).find(p => p.title === title)?.slug ?? null;

  const items = useMemo(() => {
    return (dataportfolio || []).map((p, idx) => ({
      id: p.id ?? idx,
      img: p.img,
      link: p.link,
      slug: p.slug ?? slugForTitle(p.title),
      title: p.title ?? p.description ?? "Untitled",
      description: p.description ?? "",
      subtitle: p.subtitle ?? "",
      tags: Array.isArray(p.tags) ? p.tags : (p.role ? [p.role] : []),
    }));
  }, []);

  const displayed = items.slice(0, Math.min(visibleCount, items.length));
  const canExpand = items.length > INITIAL_VISIBLE && visibleCount <= INITIAL_VISIBLE;

  const handleToggle = () => {
    setVisibleCount(prev =>
      prev <= INITIAL_VISIBLE ? Math.min(EXPANDED_MAX, items.length) : INITIAL_VISIBLE
    );
    const el = document.getElementById("portfolio-grid-top");
    if (el && visibleCount > INITIAL_VISIBLE) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Portfolio</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <div id="portfolio-grid-top" className="portfolio-grid">
          {displayed.map((data) => (
            <article key={data.id} className="portfolio-card">
              <div className="portfolio-media">
                <img
                  src={data.img}
                  alt={data.title}
                  loading="lazy"
                  decoding="async"
                />
                <div className="portfolio-hover">
                  {data.slug ? (
                    <Link to={`/portfolio/${data.slug}`} className="portfolio-cta">
                      View details →
                    </Link>
                  ) : data.link ? (
                    <a href={data.link} target="_blank" rel="noreferrer" className="portfolio-cta">
                      Visit site →
                    </a>
                  ) : null}
                </div>
              </div>

              <div className="portfolio-meta">
                {data.subtitle && <span className="portfolio-kicker">{data.subtitle}</span>}
                <h3 className="portfolio-title">{data.title}</h3>
                {data.description && <p className="portfolio-description">{data.description}</p>}
                {data.tags?.length > 0 && (
                  <div className="portfolio-tags">
                    {data.tags.map((t, i) => (
                      <span key={i} className="tag-pill">{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="portfolio-actions">
          <p className="freelance-text">
          I am currently the Lead Creative Designer of <Link to={`https://inextremis.be/`}>inextremis</Link> <br/> agency but I also work as a freelancer. <br />
          If you are interested in knowing how you can work with me check out my freelancer website, Not In Grid. 
          
          </p>

          <a
            className="see-more-btn"
            href="https://yourfreelancerwebsite.com"  // <-- change this URL
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit my freelance website →
          </a>
        </div>
      </Container>
    </HelmetProvider>
  );
};