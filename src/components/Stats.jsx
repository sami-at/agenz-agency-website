import { useEffect, useRef, useState } from 'react';

const stats = [
  { end: 5,    suffix: '+',   label: 'Years of Experience', sublabel: 'in the field since 2021'           },
  { end: 6,    suffix: '',    label: 'Core Team Members',   sublabel: '3 engineers · 2 techs · 1 senior' },
  { end: 100,  suffix: '+',   label: 'Projects Worked On',  sublabel: 'across our combined experience'    },
  { end: 30,   suffix: '+',   label: 'Technologies',        sublabel: 'across the full stack'             },
];

function useCountUp(end, suffix, active, duration = 1600) {
  const [display, setDisplay] = useState('0' + suffix);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const val = Math.round(eased * end);
      setDisplay(val + suffix);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, end, suffix, duration]);
  return display;
}

function StatCard({ stat, index, active }) {
  const display = useCountUp(stat.end, stat.suffix, active, 1400 + index * 120);
  return (
    <div className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="stat-card-glow" />
      <div className="stat-card-border" />
      <div className="stat-card-inner">
        <span className="stat-num">{display}</span>
        <span className="stat-label">{stat.label}</span>
        <span className="stat-sublabel">{stat.sublabel}</span>
      </div>
      <div className="stat-card-shine" />
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" id="team" ref={ref}>
      <div className="stats-ambient">
        <div className="stats-orb stats-orb-a" />
        <div className="stats-orb stats-orb-b" />
      </div>

      <div className="stats-inner">
        <div className="stats-head">
          <span className="stats-eyebrow">The team behind the work</span>
          <h2 className="stats-title">
            <span className="st-w1">Built</span>{' '}
            <span className="st-w2">on</span>
            <br />
            <span className="st-w3">real</span>{' '}
            <span className="st-w4">experience</span>
          </h2>
        </div>

        <div className="stats-grid">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
