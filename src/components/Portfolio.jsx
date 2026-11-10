const PROJECTS = [
  {
    num: '01',
    title: 'Into the Wild',
    tag: 'Editorial · Nature & Travel',
    desc: 'An immersive nature editorial featuring biome deep-dives, scroll-expand media, star field animations, and rich photo galleries.',
    image: '/demos/demo1.webp',
    href: 'https://demo-1-five-ebon.vercel.app/',
  },
  {
    num: '02',
    title: 'SaaS Landing',
    tag: 'Product · SaaS',
    desc: 'A dark-theme SaaS product page with hero, features, pricing, testimonials, and a scroll progress indicator.',
    image: '/demos/demo2.webp',
    href: 'https://demo2-ruby-tau.vercel.app/',
  },
  {
    num: '03',
    title: 'The Dispatch',
    tag: 'Editorial · Travel Magazine',
    desc: 'A travel and lifestyle magazine with a WebGL shader hero, interactive map, journal, letters section, and newsletter.',
    image: '/demos/demo3.webp',
    href: 'https://demo3-kohl.vercel.app/',
  },
  {
    num: '04',
    title: 'AuthorityOS',
    tag: 'Marketing · Content SaaS',
    desc: 'A content marketing platform for creators and experts — features, case studies, testimonials, trusted by 150+ experts.',
    image: '/demos/demo4.webp',
    href: 'https://demo4-self.vercel.app/',
  },
  {
    num: '05',
    title: 'Alex Nova',
    tag: 'Portfolio · Film & Visual',
    desc: 'A personal portfolio for a filmmaker and visual storyteller — about, video portfolio, and contact, all in one refined site.',
    image: '/demos/demo5.webp',
    href: 'https://demo5-lilac.vercel.app/',
  },
  {
    num: '06',
    title: 'Limited Label',
    tag: 'E-Commerce · Luxury Streetwear',
    desc: 'A minimalist luxury streetwear store built around limited drops — editorial product pages, clean typography, and a premium shopping experience.',
    image: '/demos/demo6.webp',
    href: 'https://demo6-puce.vercel.app/',
  },
];

export default function Portfolio() {
  return (
    <section className="pf" id="work">
      <div className="pf-inner">
        <header className="pf-head reveal">
          <div className="pf-head-left">
            <p className="pf-eyebrow">Selected Work</p>
            <h2 className="pf-title">Our Work</h2>
          </div>
          <p className="pf-note">
            The projects below are curated demo and concept builds created to showcase our design and development capabilities.
            For confidentiality reasons, the majority of our client and commercial work is not publicly displayed.
          </p>
        </header>

        <ul className="pf-grid">
          {PROJECTS.map((p) => (
            <li key={p.num} className="pf-card reveal">
              <a href={p.href} target="_blank" rel="noopener noreferrer">
                <div className="pf-img-wrap">
                  <img src={p.image} alt={p.title} loading="lazy" decoding="async" />
                </div>
                <div className="pf-card-body">
                  <span className="pf-num">{p.num}</span>
                  <div className="pf-card-text">
                    <h3>{p.title}</h3>
                    <span className="pf-tag">{p.tag}</span>
                  </div>
                  <svg className="pf-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7" /><path d="M8 7h9v9" />
                  </svg>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
