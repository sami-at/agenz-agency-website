function FooterEmailIcon() {
  return (
    <svg className="ft-icon ft-icon-email" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="3" stroke="url(#fEmailGrad)" strokeWidth="1.5"/>
      <path d="M2 8l10 7 10-7" stroke="url(#fEmailGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="fEmailGrad" x1="2" y1="4" x2="22" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#a78bfa"/>
          <stop offset="100%" stopColor="#00f5d4"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function FooterInstagramIcon() {
  return (
    <svg className="ft-icon ft-icon-instagram" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="6" stroke="url(#fIgGrad)" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="4.5" stroke="url(#fIgGrad)" strokeWidth="1.5"/>
      <circle cx="17.5" cy="6.5" r="1.25" fill="#f09433"/>
      <defs>
        <linearGradient id="fIgGrad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f09433"/>
          <stop offset="35%" stopColor="#dc2743"/>
          <stop offset="70%" stopColor="#cc2366"/>
          <stop offset="100%" stopColor="#bc1888"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="logo"><img src="/logo-navbar.webp" alt="AgenZ" /></div>
      <p>© 2026 · Built different by design</p>
      <div className="nav-links">
        <a href="https://www.instagram.com/agenz.dev/" target="_blank" rel="noopener noreferrer" className="ft-link">
          <FooterInstagramIcon />
          Instagram
        </a>
        <a href="mailto:agenz.dev@gmail.com" className="ft-link">
          <FooterEmailIcon />
          Email
        </a>
      </div>
    </footer>
  );
}
