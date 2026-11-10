import { useState } from 'react';

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Our Work' },
  { href: '#team', label: 'The Team' },
  { href: '#contact', label: 'Contact' },
];

export default function MainNav({ navRef }) {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <nav ref={navRef} className="main-nav">
        <a href="#" className="logo"><img src="/logo-navbar.webp" alt="AgenZ" /></a>
        <div className="nav-links">
          {NAV_LINKS.map(l => <a key={l.label} href={l.href}>{l.label}</a>)}
        </div>
        <button
          className={`nav-burger${open ? ' nav-burger--open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`nav-mobile${open ? ' nav-mobile--open' : ''}`}
        aria-hidden={!open}
      >
        {NAV_LINKS.map(l => (
          <a key={l.label} href={l.href} onClick={close}>{l.label}</a>
        ))}
      </div>

      {/* Backdrop */}
      {open && <div className="nav-backdrop" onClick={close} aria-hidden="true" />}
    </>
  );
}

export { NAV_LINKS };
