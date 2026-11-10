import { useEffect, useRef, useState } from 'react';

const SERVICES = [
  {
    num: '01',
    title: 'Web Development',
    tag: 'Sites & Platforms',
    desc: 'Custom websites and web platforms engineered for speed, scale, and conversion. From marketing sites to bespoke applications.',
    keywords: ['React', 'Next.js', 'Headless', 'Performance'],
  },
  {
    num: '02',
    title: 'Mobile Applications',
    tag: 'iOS · Android',
    desc: 'Native-feel cross-platform apps with refined motion, offline-first architecture, and deep system integration.',
    keywords: ['React Native', 'Swift', 'Kotlin'],
  },
  {
    num: '03',
    title: 'Commerce',
    tag: 'Online Sales',
    desc: 'End-to-end storefronts that turn visitors into customers: payments, logistics, and a checkout that actually converts.',
    keywords: ['Shopify', 'Stripe', 'Headless'],
  },
  {
    num: '04',
    title: 'Interface Design',
    tag: 'UI · UX · Systems',
    desc: 'Interfaces that feel inevitable. Design systems that scale across teams, products, and platforms without losing soul.',
    keywords: ['Figma', 'Design Systems', 'Prototyping'],
  },
  {
    num: '05',
    title: 'Search & Visibility',
    tag: 'Local SEO',
    desc: 'Get found by the right people in the right place. Technical SEO, local presence, and content strategy that ranks.',
    keywords: ['SEO', 'Analytics', 'Content'],
  },
  {
    num: '06',
    title: 'Care & Optimization',
    tag: 'Ongoing',
    desc: 'Once you launch, we stay. Continuous performance work, A/B testing, and considered iteration, month after month.',
    keywords: ['Monitoring', 'A/B', 'Iteration'],
  },
];

const N = SERVICES.length;

export default function Services() {
  const [active, setActive] = useState(0);
  const [animCards, setAnimCards] = useState({});
  const sectionRef = useRef(null);
  const prevRef = useRef(0);
  const timerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const sectionTop = section.offsetTop;
      const totalScroll = section.offsetHeight - window.innerHeight;
      if (totalScroll <= 0) return;

      const scrolled = Math.max(0, window.scrollY - sectionTop);
      const progress = Math.min(0.9999, scrolled / totalScroll);
      const newIdx = Math.min(N - 1, Math.floor(progress * N));

      if (newIdx !== prevRef.current) {
        const dir = newIdx > prevRef.current ? 1 : -1;
        const oldIdx = prevRef.current;
        prevRef.current = newIdx;

        if (timerRef.current) clearTimeout(timerRef.current);

        setActive(newIdx);
        setAnimCards({
          [oldIdx]: dir === 1 ? 'anim-exit-up' : 'anim-exit-down',
          [newIdx]: dir === 1 ? 'anim-enter-fwd' : 'anim-enter-back',
        });

        timerRef.current = setTimeout(() => setAnimCards({}), 820);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const scrollToService = (i) => {
    const section = sectionRef.current;
    if (!section) return;
    const sectionTop = section.offsetTop;
    const totalScroll = section.offsetHeight - window.innerHeight;
    window.scrollTo({ top: sectionTop + (i / N) * totalScroll + 2, behavior: 'smooth' });
  };

  return (
    <section className="svc" id="services" ref={sectionRef}>
      <div className="svc-sticky">
        <div className="svc-bg" aria-hidden="true">
          <span className="svc-orb svc-orb-a" />
          <span className="svc-orb svc-orb-b" />
          <div className="svc-grid-lines" />
        </div>

        <div className="svc-sticky-inner">
          <aside className="svc-aside">
            <div className="svc-eyebrow">
              <span className="svc-dot" />
              <span>What we offer</span>
              <span className="svc-eyebrow-sep" />
              <span className="svc-eyebrow-count">06 disciplines</span>
            </div>

            <h2 className="svc-title">
              <span className="svc-title-line">Services that</span>
              <span className="svc-title-line svc-title-accent">move you</span>
              <span className="svc-title-line">
                <em>forward</em>.
              </span>
            </h2>

            <p className="svc-lede">
              We don&rsquo;t do everything. We do a small number of things deeply,
              with care for craft, performance, and the people on the other side
              of the screen.
            </p>

            <div className="svc-progress">
              <div className="svc-progress-dots">
                {SERVICES.map((s, i) => (
                  <button
                    key={s.num}
                    className={`svc-progress-dot ${i === active ? 'is-active' : ''}`}
                    onClick={() => scrollToService(i)}
                    aria-label={`Go to ${s.title}`}
                  />
                ))}
              </div>
              <span className="svc-progress-counter" aria-live="polite">
                <strong>{SERVICES[active].num}</strong>
                <span> / 06</span>
              </span>
            </div>
          </aside>

          <div className="svc-drum-wrap">
            <div className="svc-drum" aria-live="polite" aria-atomic="true">
              {SERVICES.map((s, i) => {
                const cls = [
                  'svc-card',
                  i === active ? 'is-active' : '',
                  animCards[i] || '',
                ]
                  .filter(Boolean)
                  .join(' ');

                return (
                  <div key={s.num} className={cls} aria-hidden={i !== active}>
                    <div className="svc-card-ghost" aria-hidden="true">{s.num}</div>
                    <div className="svc-card-inner">
                      <div className="svc-card-head">
                        <span className="svc-card-num">{s.num}</span>
                        <span className="svc-card-sep" aria-hidden="true" />
                        <span className="svc-card-tag">{s.tag}</span>
                      </div>
                      <h3 className="svc-card-title">{s.title}</h3>
                      <p className="svc-card-desc">{s.desc}</p>
                      <ul className="svc-card-keywords">
                        {s.keywords.map((k) => (
                          <li key={k}>{k}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="svc-hbar" aria-hidden="true">
              <div
                className="svc-hbar-fill"
                style={{ width: `${((active + 1) / N) * 100}%` }}
              />
              <div className="svc-hbar-labels">
                {SERVICES.map((s, i) => (
                  <span
                    key={s.num}
                    className={`svc-hbar-label${i === active ? ' is-active' : ''}`}
                  >
                    {s.num}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
