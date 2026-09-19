import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertises from './components/Expertises';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { nav } from './data/site';

function App() {
  const [activeId, setActiveId] = useState('accueil');
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const ids = nav.map((item) => item.href.slice(1));
    const nodes = ids.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0, 0.2, 0.5, 1] },
    );

    nodes.forEach((node) => observer.observe(node));
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar activeId={activeId} />
      <main>
        <Hero />
        <About />
        <Expertises />
        <Projects />
        <Contact />
      </main>
      <Footer />
      {showTop ? (
        <a
          href="#accueil"
          className="fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full bg-accent text-ink shadow-lg shadow-black/30 transition hover:brightness-110"
          aria-label="Retour en haut"
        >
          <ArrowUp size={18} />
        </a>
      ) : null}
    </div>
  );
}

export default App;
