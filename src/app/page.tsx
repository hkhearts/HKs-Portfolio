"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  personalInfo, education, roles, internships,
  coreSkills, flagshipProjects, allProjects,
  certificates, hackathonDetails, stats, extraCurricular,
} from "@/data/resume";

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current; if (!cursor) return;
    const move = (e: MouseEvent) => { cursor.style.left = e.clientX+"px"; cursor.style.top = e.clientY+"px"; };
    document.addEventListener("mousemove", move);
    const portrait = document.querySelector(".portrait-img");
    const on  = () => cursor.classList.add("hover-active");
    const off = () => cursor.classList.remove("hover-active");
    const ion = () => cursor.classList.add("image-hover");
    const ioff= () => cursor.classList.remove("image-hover");
    document.querySelectorAll(".ie").forEach(el => {
      el.addEventListener("mouseenter", on); el.addEventListener("mouseleave", off);
    });
    portrait?.addEventListener("mouseenter", ion);
    portrait?.addEventListener("mouseleave", ioff);
    const obs = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("reveal-active");
      else e.target.classList.remove("reveal-active");
    }), { threshold: 0.06 });
    document.querySelectorAll(".reveal-left,.reveal-right,.reveal-up,.reveal-scale").forEach(el => obs.observe(el));
    return () => {
      document.removeEventListener("mousemove", move);
      document.querySelectorAll(".ie").forEach(el => {
        el.removeEventListener("mouseenter", on); el.removeEventListener("mouseleave", off);
      });
      portrait?.removeEventListener("mouseenter", ion);
      portrait?.removeEventListener("mouseleave", ioff);
      obs.disconnect();
    };
  }, []);

  const statsx4 = [...stats, ...stats, ...stats, ...stats];
  const flagColors = ["blue","red","black","blue"] as const;
  const topHacks = hackathonDetails.filter(h => h.award === "Winner" || h.award.includes("Place") || h.award === "Finalist").slice(0,6);

  return (
    <>
      <div id="custom-cursor" ref={cursorRef} />

      {/* NAV */}
      <header className="header ie">
        <div className="header-logo">HK Hearts</div>
        <nav className="header-nav">
          <a href="#work"       className="ie">Work</a>
          <Link href="/projects"   className="ie">Projects</Link>
          <Link href="/hackathons" className="ie">Hackathons</Link>
          <a href="#certificates" className="ie">Certs</a>
          <a href="#contact"    className="ie">Contact</a>
          <a href="/resume/Hari_Krishnan_C_Resume.pdf" target="_blank" rel="noopener noreferrer" className="ie resume-link">Resume</a>
        </nav>
        <div style={{fontSize:".8rem",fontWeight:700,opacity:.5,textTransform:"uppercase",letterSpacing:"1px"}}>{personalInfo.location}</div>
      </header>

      {/* HERO — mobile: portrait fills screen, text overlays on scroll */}
      <section className="hero">
        <div className="hero-main">
          <img src="/hero.png" alt="Hari Krishnan Portrait" className="portrait-img ie" />
          <div className="hero-content">
            <h1 className="hero-title ie">Building<br />Immersive<br /><span>Futures</span></h1>
            <p className="hero-tagline ie">{personalInfo.tagline}</p>
            <div className="hero-badges">
              {personalInfo.roles.map(r => <span className="hero-badge ie" key={r}>{r}</span>)}
            </div>
          </div>
        </div>
        <a href="#work" className="scroll-cta ie">Explore Portfolio ↓</a>
      </section>

      {/* STATS TICKER */}
      <div className="stats-bar">
        <div className="stats-track">
          {statsx4.map((s, i) => (
            <div className="stat-item" key={i}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FLAGSHIP PROJECTS */}
      <div className="section-title-bar reveal-right" id="work">Featured Projects</div>
      <div className="flagship-grid reveal-right">
        {flagshipProjects.map((p, i) => (
          <Link key={p.slug} href={`/projects/${p.slug}`}
            className={`flagship-cell ie ${flagColors[i % 4]} ${i < 2 ? "big" : ""}`}>
            <div className="flagship-cell-inner">
              <div className="flagship-num">0{i+1}</div>
              <div className="flagship-name">{p.name}</div>
              <div className="flagship-desc">{p.description}</div>
              <div className="flagship-tech">
                {p.tech.split(", ").map(t => <span className="flagship-tag" key={t}>{t}</span>)}
              </div>
              {p.repo && (
                <div style={{marginTop:".75rem",fontSize:".7rem",fontWeight:900,opacity:.6,letterSpacing:"1px",textTransform:"uppercase"}}>
                  GitHub ↗
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* CLOTHESLINE ALL PROJECTS */}
      <div className="section-title-bar reveal-left">All Projects — On The Line</div>
      <section className="clothesline-section reveal-scale">
        <div className="clothesline-wrapper">
          <div className="rope-line" />
          <div className="clothesline-scroll">
            {allProjects.map((p, i) => (
              <Link href={`/projects/${p.slug}`} key={p.slug} style={{textDecoration:"none",color:"inherit"}}>
                <article className="cloth-card ie">
                  <div className="cloth-pin" />
                  <div className="cloth-year">{p.year} — {p.category}</div>
                  <div className="cloth-title">{p.name}</div>
                  <div className="cloth-desc">{p.description}</div>
                  <div className="cloth-tags">
                    {p.tech.split(", ").slice(0,3).map(t => <span className="cloth-tag" key={t}>{t}</span>)}
                  </div>
                  <div className="cloth-num">{String(i+1).padStart(2,"0")}</div>
                </article>
              </Link>
            ))}
          </div>
        </div>
        <div style={{padding:"1rem 2.5rem",borderTop:"var(--border)",display:"flex",justifyContent:"flex-end"}}>
          <Link href="/projects" className="contact-btn ie" style={{textDecoration:"none"}}>
            <span>View All Projects →</span>
          </Link>
        </div>
      </section>

      {/* EDUCATION */}
      <div className="section-title-bar reveal-right">Education</div>
      <div className="grid-3 reveal-right">
        {education.map((e, i) => (
          <div key={i} className={`gcell ie ${["black","red","blue"][i%3]}`}>
            <div className="gcell-inner">
              <div className="gcell-title" style={{fontSize:"1.4rem"}}>{e.degree}</div>
              <div className="gcell-desc">{e.institution}<br/>{e.score} · {e.duration}</div>
            </div>
          </div>
        ))}
      </div>

      {/* EXPERIENCE */}
      <div className="section-title-bar reveal-left bordered-top" id="experience">Experience</div>
      <div className="timeline-grid reveal-left">
        {internships.map((it, i) => (
          <div className="timeline-item ie" key={i}>
            <div className="t-role">
              {it.title}
              {(it as any).link && (
                <a href={(it as any).link} target="_blank" rel="noopener noreferrer" style={{marginLeft:"8px",textDecoration:"none",color:"var(--red)",fontSize:".8rem"}}>
                  ↗
                </a>
              )}
            </div>
            <div className="t-company">{it.org}</div>
            <div className="t-meta">{it.from} → {it.to} · {it.mode}</div>
            <div className="t-desc">{it.location}</div>
          </div>
        ))}
      </div>

      {/* ROLES */}
      <div className="section-title-bar reveal-right">Roles</div>
      <div className="grid-3 reveal-right">
        {roles.map((r, i) => (
          <div key={i} className={`gcell ie ${["red","blue","black"][i%3]}`}>
            <div className="gcell-inner">
              <div className="gcell-title" style={{fontSize:"1.4rem"}}>{r.role}</div>
              <div className="gcell-desc">{r.company}<br/><span style={{opacity:.65,fontSize:".85rem"}}>{r.desc}</span></div>
            </div>
          </div>
        ))}
      </div>

      {/* SKILLS */}
      <div className="section-title-bar reveal-up" id="skills">Technical Arsenal</div>
      <div className="skills-grid reveal-up">
        {coreSkills.map(sk => (
          <div className="skill-tag ie" key={sk}><span>{sk}</span></div>
        ))}
      </div>

      {/* HACKATHONS PREVIEW */}
      <div className="section-title-bar reveal-right" id="hackathons">
        Hackathon Chronicle
        <Link href="/hackathons" style={{marginLeft:"2rem",fontSize:"1rem",fontWeight:700,textDecoration:"none",color:"var(--red)",letterSpacing:"1px",textTransform:"uppercase"}}>
          View All →
        </Link>
      </div>
      <div className="hack-table reveal-right">
        <div className="hack-header">
          <span>Event</span><span>Organiser</span><span>Year</span><span style={{textAlign:"right"}}>Result</span>
        </div>
        {topHacks.map((h, i) => (
          <Link key={i} href={`/hackathons/${h.slug}`} className="hack-row clickable ie">
            <div className="hack-name">{h.name} ↗</div>
            <div className="hack-org">{h.organizer}</div>
            <div className="hack-year">{h.year}</div>
            <div className={`hack-award ${h.award==="Winner"||h.award.includes("Place")?"winner":h.award==="Finalist"?"finalist":""}`}>{h.award}</div>
          </Link>
        ))}
      </div>

      {/* CERTIFICATES PREVIEW */}
      <div className="section-title-bar reveal-left" id="certificates">
        Certifications
      </div>
      <div className="cert-grid reveal-left">
        {certificates.map((c, i) => (
          <div key={i} className="cert-card ie">
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

      {/* BEYOND CODE */}
      <div className="section-title-bar reveal-right">Beyond Code</div>
      <div className="grid-4 reveal-right">
        {extraCurricular.map((ec, i) => (
          <div key={i} className={`gcell ie ${["red","blue","black","red"][i%4]}`}>
            <div className="gcell-inner">
              <div className="gcell-title" style={{fontSize:"1.3rem"}}>{ec.domain}</div>
              <div className="gcell-desc">{ec.activities.slice(0,2).join(" · ")}</div>
              {ec.achievements.length > 0 && <div style={{fontSize:".75rem",marginTop:".5rem",opacity:.7,fontWeight:700}}>{ec.achievements[0]}</div>}
            </div>
          </div>
        ))}
      </div>

      {/* CONTACT */}
      <section className="contact-section reveal-up" id="contact">
        <h2 className="contact-heading ie">Let&apos;s<br />Build<br /><span>Together</span></h2>
        <div className="contact-row">
          <a href={`mailto:${personalInfo.email}`} className="contact-btn ie"><span>Email</span></a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-btn ie"><span>GitHub</span></a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-btn blue-btn ie"><span>LinkedIn</span></a>
          <a href={`tel:${personalInfo.phone}`} className="contact-btn ie"><span>Call</span></a>
        </div>
      </section>

      <footer className="footer">
        <div>© 2025 Hari Krishnan C</div>
        <div>Sivakasi &amp; Rajapalayam, Tamil Nadu</div>
      </footer>
    </>
  );
}
