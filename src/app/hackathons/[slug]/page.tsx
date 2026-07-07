"use client";
import { useEffect, useRef, use } from "react";
import Link from "next/link";
import { hackathonDetails } from "@/data/resume";
import { notFound } from "next/navigation";

export default function HackathonDetail({ params }: { params: Promise<{ slug: string }> }) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { slug } = use(params);
  const h = hackathonDetails.find(x => x.slug === slug);
  if (!h) notFound();

  const awardClass = h.award === "Winner" || h.award.includes("Place") ? "winner"
    : h.award === "Finalist" ? "finalist" : "";

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
          <Link href="/hackathons" className="ie">← Hackathons</Link>
          <a href="/resume/Hari_Krishnan_C_Resume.pdf" target="_blank" rel="noopener noreferrer" className="ie resume-link">Resume</a>
        </nav>
        <div style={{fontSize:".8rem",fontWeight:700,opacity:.5,textTransform:"uppercase",letterSpacing:"1px"}}>{h.year}</div>
      </header>

      <div style={{paddingTop:"72px"}}>
        <div className="hack-detail-hero">
          <Link href="/hackathons" className="hack-detail-back ie">← All Hackathons</Link>
          <div className="hack-detail-title">{h.name}</div>
          <div style={{display:"flex",alignItems:"center",gap:"1rem",flexWrap:"wrap",marginBottom:"1rem"}}>
            <span className={`hack-detail-award ${awardClass}`}>{h.award}</span>
            <span style={{fontWeight:700,opacity:.55,fontSize:".95rem"}}>{h.organizer} · {h.year}</span>
          </div>
          <p className="hack-detail-desc">{h.description}</p>
        </div>

        {h.images.length > 0 && (
          <>
            <div className="section-title-bar" style={{borderTop:"var(--border)"}}>
              Event Gallery — {h.images.length} Photos
            </div>
            <div className="hack-photo-grid">
              {h.images.map((img, i) => (
                <div className="hack-photo-cell" key={i}>
                  {img.endsWith(".mp4") ? (
                    <video src={img} controls playsInline style={{width:"100%",height:"100%",objectFit:"cover"}} />
                  ) : (
                    <img src={img} alt={`${h.name} photo ${i+1}`} loading="lazy" />
                  )}
                </div>
              ))}
              {Array.from({ length: h.images.length % 3 === 0 ? 0 : 3 - (h.images.length % 3) }).map((_, i) => (
                <div className="hack-photo-cell" key={`empty-${i}`} />
              ))}
            </div>
          </>
        )}

        <div style={{display:"flex",justifyContent:"space-between",padding:"2rem 2.5rem",borderTop:"var(--border)"}}>
          <Link href="/hackathons" className="contact-btn ie" style={{textDecoration:"none"}}>
            <span>← All Hackathons</span>
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
