import { useEffect, useState } from 'react';
import { navLinks } from '../data/phases';
import { t } from '../data/translations';

export default function PhaseNav({ lang }) {
  const [active, setActive] = useState('p1');

  useEffect(() => {
    const ids = navLinks.map(l => l.href.replace('#', ''));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-10% 0px -80% 0px' }
    );

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="phasebar">
      {navLinks.map(link => (
        <a
          key={link.href}
          href={link.href}
          className={active === link.href.replace('#', '') ? 'active' : ''}
          onClick={e => {
            e.preventDefault();
            document.getElementById(link.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {t(link.label, lang)}
        </a>
      ))}
    </nav>
  );
}
