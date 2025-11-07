import React, { useEffect, useState } from 'react';
import BuildingsBackground from './components/BuildingsBackground.jsx';
import HeaderProfile from './components/HeaderProfile.jsx';
import Experience from './components/Experience.jsx';
import EducationCerts from './components/EducationCerts.jsx';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || window.pageYOffset);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-neutral-950 text-white">
      <BuildingsBackground scrollY={scrollY} />

      <header className="sticky top-0 z-20 backdrop-blur bg-black/30 ring-1 ring-white/10">
        <div className="container mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">Civil Engineer Portfolio</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#education" className="hover:text-white transition">Education</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <HeaderProfile />
        <section id="experience"><Experience /></section>
        <section id="education"><EducationCerts /></section>
      </main>

      <footer className="relative z-10 py-10 text-center text-white/60">
        <div className="container mx-auto px-6 md:px-10">
          © {new Date().getFullYear()} Civil Engineer — All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
