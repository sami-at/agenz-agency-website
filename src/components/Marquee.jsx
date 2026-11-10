const items = [
  'Brand Identity', 'Motion Design', 'Web Development',
  'Art Direction', '3D Experiences', 'Digital Campaigns',
  'Brand Identity', 'Motion Design', 'Web Development',
  'Art Direction', '3D Experiences', 'Digital Campaigns',
];

export default function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {items.map((item, i) => (
          <>
            <span key={`item-${i}`} className="marquee-item">{item}</span>
            <span key={`dot-${i}`} className="marquee-item accent">✦</span>
          </>
        ))}
      </div>
    </div>
  );
}
