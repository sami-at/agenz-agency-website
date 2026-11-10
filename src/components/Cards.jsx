const cardData = [
  { num: '01', icon: '⬡', title: 'Immersive Web', desc: 'WebGL, Three.js, and GSAP craft environments that blur the line between digital and physical.' },
  { num: '02', icon: '◈', title: 'Motion Systems', desc: 'Every pixel moves with purpose. Animation as language, not decoration.' },
  { num: '03', icon: '⬗', title: 'Brand Worlds', desc: 'Identities that live and breathe. Cohesive systems across every touchpoint.' },
];

export default function Cards() {
  return (
    <div className="section reveal">
      <div className="section-label">Our expertise</div>
      <div className="section-title">What we<br />do best.</div>
      <div className="cards">
        {cardData.map(c => (
          <div className="card" key={c.num}>
            <span className="card-num">{c.num}</span>
            <span className="card-icon">{c.icon}</span>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
