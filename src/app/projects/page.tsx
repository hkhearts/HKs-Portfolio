"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { allProjects, projectCategories } from "@/data/resume";

export default function ProjectsPage() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("All");

  useEffect(() => {
    const cursor = cursorRef.current; if (!cursor) return;
    const move = (e: MouseEvent) => { cursor.style.left = e.clientX+"px"; cursor.style.top = e.clientY+"px"; };
    document.addEventListener("mousemove", move);
    const els = document.querySelectorAll(".ie");
    const on = () => cursor.classList.add("hover-active");
    const off= () => cursor.classList.remove("hover-active");
    els.forEach(el => { el.addEventListener("mouseenter", on); el.addEventListener("mouseleave", off); });
    return () => {
      document.removeEventListener("mousemove", move);
      els.forEach(el => { el.removeEventListener("mouseenter",on); el.removeEventListener("mouseleave",off); });
    };
  }, []);

  const filtered = active === "All" ? allProjects : allProjects.filter(p => p.category === active);
  const colors = ["blue","black","red","blue","black","red"] as const;

  return (
    <>
      <div id="custom-cursor" ref={cursorRef} />
      <header className="header ie">
        <Link href="/" className="header-logo ie" style={{textDecoration:"none",color:"inherit"}}>HK Hearts</Link>
        <nav className="header-nav">
          <Link href="/" className="ie">← Home</Link>
          <Link href="/hackathons" className="ie">Hackathons</Link>
          <Link href="/resume" className="ie resume-link">Resume</Link>
        </nav>
        <div style={{fontSize:".8rem",fontWeight:700,opacity:.5,textTransform:"uppercase",letterSpacing:"1px"}}>Projects</div>
      </header>

      <div style={{paddingTop:"72px"}}>
        <div className="section-title-bar" style={{borderBottom:"var(--border)"}}>
          All Projects — {filtered.length} Works
        </div>

        {/* CATEGORY TABS */}
        <div style={{display:"flex",flexWrap:"wrap",borderBottom:"var(--border)"}}>
          {projectCategories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className="ie"
              style={{
                padding:"1rem 1.5rem", border:"none", background:"none",
                fontFamily:"inherit", fontWeight:900, fontSize:".82rem",
                textTransform:"uppercase", letterSpacing:"1px",
                cursor:"none", borderRight:"var(--border)",
                color: active === cat ? "var(--bg)" : "var(--text)",
                backgroundColor: active === cat ? "var(--text)" : "transparent",
                transition:"background .2s, color .2s",
              }}>
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", borderBottom:"var(--border)"}}>
          {filtered.map((p, i) => (
            <Link key={p.slug} href={`/projects/${p.slug}`}
              className={`flagship-cell ie ${colors[i % 6]}`}
              style={{minHeight:"220px", aspectRatio:"auto", padding:"2rem"}}>
              <div className="flagship-cell-inner">
                <div className="flagship-num">{p.year} — {p.category}</div>
                <div className="flagship-name" style={{fontSize:"1.6rem"}}>{p.name}</div>
                <div className="flagship-desc" style={{fontSize:".88rem"}}>{p.description}</div>
                <div className="flagship-tech">
                  {p.tech.split(", ").map(t => <span className="flagship-tag" key={t}>{t}</span>)}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <footer className="footer">
          <div>© 2025 Hari Krishnan C</div>
          <Link href="/" style={{textDecoration:"none",color:"inherit"}}>← Portfolio</Link>
        </footer>
      </div>
    </>
  );
}
