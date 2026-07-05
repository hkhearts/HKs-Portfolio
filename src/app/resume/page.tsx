"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function ResumePage() {
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
          <a href="/resume/HariKrishnan_Resume.html" target="_blank" className="ie resume-link">Open &amp; Print PDF</a>
        </nav>
        <div style={{fontSize:".8rem",fontWeight:700,opacity:.5,textTransform:"uppercase",letterSpacing:"1px"}}>Resume</div>
      </header>

      <div className="resume-page">
        <div className="section-title-bar" style={{borderBottom:"var(--border)"}}>
          Hari Krishnan C — Resume
          <a href="/resume/HariKrishnan_Resume.pdf" download
            style={{marginLeft:"2rem",fontSize:"1rem",fontWeight:700,textDecoration:"none",color:"var(--red)",letterSpacing:"1px"}}>
            ↓ Download PDF
          </a>
        </div>
        <iframe
          src="/resume/HariKrishnan_Resume.html"
          className="resume-frame"
          title="Hari Krishnan Resume"
        />
      </div>
    </>
  );
}
