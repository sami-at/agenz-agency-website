import { NAV_LINKS } from './MainNav';

export default function FloatNav({ visible }) {
  return (
    <div className={`float-nav${visible ? ' float-nav--visible' : ''}`} aria-hidden={!visible}>
      <div className="float-nav-inner">
        <nav className="float-nav-links">
          {NAV_LINKS.slice(0, 2).map(l => <a key={l.label} href={l.href}>{l.label}</a>)}
        </nav>
        <a href="#" className="float-nav-logo">
          <img src="/logo-icon.webp" alt="AgenZ" />
        </a>
        <nav className="float-nav-links">
          {NAV_LINKS.slice(2).map(l => <a key={l.label} href={l.href}>{l.label}</a>)}
        </nav>
      </div>
    </div>
  );
}
