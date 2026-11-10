import { useState, useEffect, useRef } from 'react';
import MainNav from './MainNav';
import FloatNav from './FloatNav';

export default function Nav() {
  const [floating, setFloating] = useState(false);
  const [hiddenByScroll, setHiddenByScroll] = useState(false);
  const navRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setFloating(!entry.isIntersecting),
      { threshold: 0 }
    );
    if (navRef.current) observer.observe(navRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Only apply hide-on-scroll behaviour on mobile viewports
      if (window.innerWidth > 768) return;
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current + 4) {
        setHiddenByScroll(true);
      } else if (currentY < lastScrollY.current - 4) {
        setHiddenByScroll(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <MainNav navRef={navRef} />
      <FloatNav visible={floating && !hiddenByScroll} />
    </>
  );
}
