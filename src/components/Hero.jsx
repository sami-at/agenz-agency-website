import { useRef, useState } from 'react';

function GlowButton({ className, glowColor, onClick, children }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <button
      ref={ref}
      className={className}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="btn-glow"
        style={{
          left: pos.x,
          top: pos.y,
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 68%)`,
          opacity: hovered ? 1 : 0,
          transform: `translate(-50%, -50%) scale(${hovered ? 1 : 0})`,
        }}
      />
      <span className="btn-glow-text">{children}</span>
    </button>
  );
}

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-eyebrow">Creative Digital Studio</div>
      <h1 className="hero-title">
        <span className="line"><span>WE BUILD</span></span>
        <span className="line"><span>WHAT OTHERS</span></span>
        <span className="line"><span>DREAM.</span></span>
      </h1>
      <p className="hero-sub">
        Gen-Z engineers and creatives building sharp websites and digital experiences for brands that actually care.
      </p>
      <div className="hero-cta">
        <GlowButton className="btn-primary" glowColor="rgba(0,245,212,0.4)" onClick={() => scrollTo('contact')}>Start a project <span style={{fontSize:'1em',lineHeight:1}}>→</span></GlowButton>
        <GlowButton className="btn-outline" glowColor="rgba(124,58,255,0.45)" onClick={() => scrollTo('work')}>See our work</GlowButton>
      </div>
    </section>
  );
}
