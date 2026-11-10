# AgenZ — Agency Website

Landing website for **AgenZ**, a creative/digital agency. Animated hero with a particle canvas and glitch text, services, portfolio, stats, a scrolling marquee and a working contact form.

## Tech stack
- React 19 + Vite
- EmailJS (contact form)
- Custom canvas & CSS animations

## Run locally
```bash
npm install
cp .env.example .env   # add your own EmailJS IDs
npm run dev
```

Environment variables (see `src/components/Contact.jsx`):
`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`.
