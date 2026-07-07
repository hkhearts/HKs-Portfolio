"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { hackathonDetails } from "@/data/resume";

export default function HackathonsPage() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current; if (!cursor) return;
    const move = (e: MouseEvent) => { cursor.style.left = e.clientX+"px"; cursor.style.top = e.clientY+"px"; };
    document.addEventListener("mousemove", move);
    const els = document.querySelectorAll(".ie");
    const on = () => cursor.classList.add("hover-active");
    const off= () => cursor.classList.remove("hover-active");
    els.forEach(el => { el.addEventListener("mouseenter",on); el.addEventListener("mouseleave",off); });
    const obs = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("reveal-active");
      else e.target.classList.remove("reveal-active");
    }), { threshold: 0.06 });
    document.querySelectorAll(".reveal-left,.reveal-right,.reveal-up").forEach(el => obs.observe(el));
    return () => {
      document.removeEventListener("mousemove", move);
      els.forEach(el => { el.removeEventListener("mouseenter",on); el.removeEventListener("mouseleave",off); });
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <div id="custom-cursor" ref={cursorRef} />
      <header className="header ie">
        <Link href="/" className="header-logo ie" style={{textDecoration:"none",color:"inherit"}}>HK Hearts</Link>
        <nav className="header-nav">
          <Link href="/" className="ie">← Home</Link>
          <Link href="/projects" className="ie">Projects</Link>
          <a href="/resume/Hari_Krishnan_C_Resume.pdf" target="_blank" rel="noopener noreferrer" className="ie resume-link">Resume</a>
        </nav>
        <div style={{fontSize:".8rem",fontWeight:700,opacity:.5,textTransform:"uppercase",letterSpacing:"1px"}}>Hackathons</div>
      </header>

      <div style={{paddingTop:"72px"}}>
        <div className="section-title-bar">Hackathon Chronicle — {hackathonDetails.length} Events</div>

        {hackathonDetails.map((h, idx) => {
          const awardClass = h.award === "Winner" || h.award.includes("Place") ? "winner"
            : h.award === "Finalist" ? "finalist" : "";
          const dir = idx % 2 === 0 ? "reveal-right" : "reveal-left";
          return (
            <div key={h.slug} style={{borderBottom:"var(--border)"}}>
              <div className={dir}>
                {/* HEADER ROW */}
                <Link href={`/hackathons/${h.slug}`} className="ie"
                  style={{display:"block",padding:"2.5rem 2.5rem 1.5rem",borderBottom:"var(--border)",textDecoration:"none",color:"inherit"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"1rem"}}>
                    <div>
                      <div style={{fontSize:".68rem",fontWeight:900,textTransform:"uppercase",letterSpacing:"2px",opacity:.4,marginBottom:".4rem"}}>{h.year} · {h.organizer}</div>
                      <div style={{fontSize:"clamp(1.5rem,3vw,2.5rem)",fontWeight:900,textTransform:"uppercase",letterSpacing:"-1.5px",lineHeight:.95,marginBottom:".75rem"}}>
                        {h.name} <span style={{fontSize:"1rem",opacity:.4}}>↗</span>
                      </div>
                      <p style={{fontWeight:500,fontSize:".95rem",lineHeight:1.55,maxWidth:"600px",opacity:.75}}>{h.description}</p>
                    </div>
                    <span className={`hack-detail-award ${awardClass}`}
                      style={{padding:".4rem 1rem",border:"2px solid",fontSize:".7rem",fontWeight:900,textTransform:"uppercase",letterSpacing:"1.5px",whiteSpace:"nowrap",alignSelf:"flex-start"}}>
                      {h.award}
                    </span>
                  </div>
                </Link>

                {/* PHOTOS */}
                {h.images.length > 0 && (
                  <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)"}}>
                    {[...h.images.slice(0, 3), ...Array.from({ length: Math.max(0, 3 - h.images.slice(0,3).length) }).map(() => "")].map((img, i) => (
                      <div key={i} style={{borderRight: i < 2 ? "var(--border)" : "none", borderTop: "var(--border)", aspectRatio:"4/3", overflow:"hidden"}}>
                        {img ? (
                          img.endsWith(".mp4") ? (
                            <video src={img} autoPlay loop muted playsInline
                              style={{width:"100%",height:"100%",objectFit:"cover",transition:"transform .5s",pointerEvents:"none"}}
                            />
                          ) : (
                            <img src={img} alt={`${h.name} ${i+1}`} loading="lazy"
                              style={{width:"100%",height:"100%",objectFit:"cover",transition:"transform .5s"}}
                              onMouseEnter={e => (e.currentTarget.style.transform="scale(1.05)")}
                              onMouseLeave={e => (e.currentTarget.style.transform="scale(1)")}
                            />
                          )
                        ) : null}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        <footer className="footer">
          <div>© 2025 Hari Krishnan C · {hackathonDetails.length} Hackathons</div>
          <Link href="/" style={{textDecoration:"none",color:"inherit"}}>← Portfolio</Link>
        </footer>
      </div>
    </>
  );
}
