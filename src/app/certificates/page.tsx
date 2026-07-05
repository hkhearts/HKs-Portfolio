"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { certificates } from "@/data/resume";

export default function CertificatesPage() {
  const cursorRef = useRef<HTMLDivElement>(null);
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
  },[]);

  return (
    <>
      <div id="custom-cursor" ref={cursorRef} />
      <header className="header ie">
        <Link href="/" className="header-logo ie" style={{textDecoration:"none",color:"inherit"}}>HK Hearts</Link>
        <nav className="header-nav">
          <Link href="/" className="ie">← Back</Link>
          <Link href="/resume" className="ie resume-link">Resume</Link>
        </nav>
        <div style={{fontSize:".8rem",fontWeight:700,opacity:.5,textTransform:"uppercase",letterSpacing:"1px"}}>Certifications</div>
      </header>

      <div style={{paddingTop:"72px"}}>
        <div className="section-title-bar">Certificates &amp; Credentials</div>

        <div className="cert-grid">
          {certificates.map((c, i) => (
            <div key={i} className="cert-card ie" style={{cursor:"default"}}>
              <div className="cert-img-wrap">
                <img src={`/certificates/${c.folder}/${c.file}`} alt={c.name} loading="lazy" />
              </div>
              <div className="cert-info">
                <div className="cert-name">{c.name}</div>
                <div className="cert-issuer">{c.issuer} · {c.year}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-title-bar" style={{borderTop:"var(--border)"}}>More Coming</div>
        <div style={{padding:"3rem 2.5rem",borderBottom:"var(--border)",opacity:.5,fontWeight:500}}>
          Upload your remaining certificates to the <code style={{background:"#e8e8e4",padding:".2rem .4rem"}}>public/certificates/</code> folder and they will appear here automatically.
        </div>

        <footer className="footer">
          <div>© 2025 Hari Krishnan C</div>
          <Link href="/" style={{textDecoration:"none",color:"inherit"}}>← Portfolio</Link>
        </footer>
      </div>
    </>
  );
}
