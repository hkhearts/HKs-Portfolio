"use client";
import { useEffect, useRef, use } from "react";
import Link from "next/link";
import { allProjects, flagshipProjects } from "@/data/resume";
import { notFound } from "next/navigation";

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { slug } = use(params);
  const project = [...flagshipProjects, ...allProjects].find(p => p.slug === slug);
  if (!project) notFound();

  useEffect(() => {
    const cursor = cursorRef.current; if (!cursor) return;
    const move = (e: MouseEvent) => { cursor.style.left = e.clientX+"px"; cursor.style.top = e.clientY+"px"; };
    document.addEventListener("mousemove", move);
    const els = document.querySelectorAll(".ie");
    const on = () => cursor.classList.add("hover-active");
    const off= () => cursor.classList.remove("hover-active");
    els.forEach(el => { el.addEventListener("mouseenter",on); el.addEventListener("mouseleave",off); });
    return () => {
      document.removeEventListener("mousemove", move);
      els.forEach(el => { el.removeEventListener("mouseenter",on); el.removeEventListener("mouseleave",off); });
    };
  }, []);

  return (
    <>
      <div id="custom-cursor" ref={cursorRef} />
      <header className="header ie">
        <Link href="/" className="header-logo ie" style={{textDecoration:"none",color:"inherit"}}>HK Hearts</Link>
        <nav className="header-nav">
          <Link href="/projects" className="ie">← Projects</Link>
          <a href="/resume/Hari_Krishnan_C_Resume.pdf" target="_blank" rel="noopener noreferrer" className="ie resume-link">Resume</a>
        </nav>
        <div style={{fontSize:".8rem",fontWeight:700,opacity:.5,textTransform:"uppercase",letterSpacing:"1px"}}>{project.year}</div>
      </header>

      <div style={{paddingTop:"72px"}}>
        {/* HERO */}
        <div style={{padding:"5rem 2.5rem 3rem", borderBottom:"var(--border)"}}>
          <Link href="/projects" className="hack-detail-back ie">← All Projects</Link>
          <div style={{fontSize:".7rem",fontWeight:900,textTransform:"uppercase",letterSpacing:"2px",opacity:.4,marginBottom:".5rem"}}>
            {project.year} — {project.category}
          </div>
          <div style={{fontSize:"clamp(2rem,6vw,5rem)",fontWeight:900,textTransform:"uppercase",letterSpacing:"-.04em",lineHeight:.9,marginBottom:"1.5rem"}}>
            {project.name}
          </div>
          <p style={{fontSize:"1.15rem",fontWeight:500,maxWidth:"680px",lineHeight:1.6,opacity:.8,marginBottom:"1.5rem"}}>
            {project.description}
          </p>
          <div style={{display:"flex",flexWrap:"wrap",gap:".5rem",marginBottom:"2rem"}}>
            {project.tech.split(", ").map(t => (
              <span key={t} style={{padding:".4rem .9rem",border:"var(--border)",fontWeight:700,fontSize:".75rem",textTransform:"uppercase",letterSpacing:"1px"}}>
                {t}
              </span>
            ))}
          </div>
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="contact-btn ie" style={{textDecoration:"none",display:"inline-block"}}>
              <span>View on GitHub ↗</span>
            </a>
          )}
          {!project.repo && (
            <span style={{fontSize:".8rem",fontWeight:700,opacity:.4,textTransform:"uppercase",letterSpacing:"1px",padding:".4rem .9rem",border:"2px dashed currentColor",display:"inline-block"}}>
              GitHub — Coming Soon
            </span>
          )}
        </div>

        {/* IMAGES if any */}
        {project.images && project.images.length > 0 && (
          <>
            <div className="section-title-bar" style={{borderTop:"var(--border)"}}>Project Gallery</div>
            <div className="hack-photo-grid">
              {project.images.map((img, i) => (
                <div className="hack-photo-cell" key={i}>
                  <img src={img} alt={`${project.name} — ${i+1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </>
        )}

        {/* NAV */}
        <div style={{display:"flex",justifyContent:"space-between",padding:"2rem 2.5rem",borderTop:"var(--border)"}}>
          <Link href="/projects" className="contact-btn ie" style={{textDecoration:"none"}}>
            <span>← All Projects</span>
          </Link>
          <Link href="/" className="contact-btn ie" style={{textDecoration:"none"}}>
            <span>Portfolio →</span>
          </Link>
        </div>

        <footer className="footer">
          <div>© 2025 Hari Krishnan C</div>
          <Link href="/" style={{textDecoration:"none",color:"inherit"}}>← Portfolio</Link>
        </footer>
      </div>
    </>
  );
}
