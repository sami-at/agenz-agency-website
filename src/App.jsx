import { useEffect } from 'react';
import './index.css';
import ParticleCanvas from './components/ParticleCanvas';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Glitch from './components/Glitch';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ParticleCanvas />
      <div className="wrap">
        <Nav />
        <Hero />
        <Marquee />
        <Services />
        <Portfolio />
        <Glitch />
        <Stats />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
