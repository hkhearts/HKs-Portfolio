import { allProjects } from "@/data/resume";
import Link from "next/link";
import { ArrowLeft, ExternalLink, MonitorPlay, Layers } from "lucide-react";

export function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = allProjects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "1rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 700 }}>Project Not Found</h1>
        <Link href="/#projects" className="btn-primary">Return to Portfolio</Link>
      </div>
    );
  }

  return (
    <main style={{ minHeight: "100vh", paddingTop: "6rem", paddingBottom: "4rem" }}>
      <div className="aurora-bg" />
      <div className="grid-overlay" />
      
      <div className="section-container" style={{ position: "relative", zIndex: 2, maxWidth: 900 }}>
        <Link href="/#projects" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--text-secondary)", textDecoration: "none", marginBottom: "3rem", fontSize: "0.9rem", transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent-cyan)"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-secondary)"}>
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.85rem", color: "var(--accent-purple)", letterSpacing: "0.2em", marginBottom: "1rem", textTransform: "uppercase" }}>
          {project.category} • {project.year}
        </div>
        
        <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.03em" }}>
          {project.name}
        </h1>

        <div className="glass-card" style={{ padding: "2rem", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <MonitorPlay size={20} className="gradient-text" /> Overview
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
            {project.description}
          </p>
        </div>

        <div className="glass-card" style={{ padding: "2rem", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Layers size={20} className="gradient-text" /> Technology Stack
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {project.tech.split(", ").map((t) => (
              <span key={t} className="tech-tag" style={{ fontSize: "0.9rem", padding: "0.5rem 1rem" }}>{t}</span>
            ))}
          </div>
        </div>

        {project.repo && (
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg> View Repository
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
