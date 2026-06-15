import { useState } from 'react';
import Hero from './components/Hero';
import VersionStrip from './components/VersionStrip';
import PhaseNav from './components/PhaseNav';
import Phase from './components/Phase';
import QuestionsSection from './components/QuestionsSection';
import Footer from './components/Footer';
import { phases } from './data/phases';

export default function App() {
  const [lang, setLang] = useState('en');

  const toggleLang = () => setLang(l => l === 'en' ? 'de' : 'en');

  return (
    <>
      <Hero lang={lang} onToggleLang={toggleLang} />
      <VersionStrip lang={lang} />
      <PhaseNav lang={lang} />
      <main>
        {phases.map(phase => (
          <Phase key={phase.id} phase={phase} lang={lang} />
        ))}
        <QuestionsSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
