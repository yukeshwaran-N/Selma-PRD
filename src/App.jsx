import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VersionStrip from './components/VersionStrip';
import PhaseNav from './components/PhaseNav';
import Phase from './components/Phase';
import QuestionsSection from './components/QuestionsSection';
import Footer from './components/Footer';
import Timeline from './components/Timeline';
import VersionDashboard from './components/VersionDashboard';
import { versions } from './data/versions';

export default function App() {
  const [lang, setLang] = useState('en');
  const [viewMode, setViewMode] = useState('timeline'); // 'timeline' or 'full-prd'
  const [selectedVersionId, setSelectedVersionId] = useState(versions[0].id);

  const toggleLang = () => setLang(l => l === 'en' ? 'de' : 'en');
  
  const selectedVersion = versions.find(v => v.id === selectedVersionId) || versions[0];
  const activePhases = selectedVersion.prdData; // Pass the version's specific PRD data

  return (
    <>
      <Header 
        lang={lang} 
        onToggleLang={toggleLang} 
        viewMode={viewMode}
        onBackToTimeline={() => setViewMode('timeline')}
      />
      
      {viewMode === 'timeline' ? (
        <div className="version-history-layout">
          <Timeline 
            versions={versions} 
            selectedVersionId={selectedVersionId} 
            onSelectVersion={setSelectedVersionId} 
          />
          <div className="version-main-content">
            <VersionDashboard 
              version={selectedVersion} 
              onOpenFullPRD={() => setViewMode('full-prd')} 
            />
          </div>
        </div>
      ) : (
        <>
          <Hero lang={lang} />
          <VersionStrip lang={lang} versionNumber={selectedVersion.versionNumber} />
          <PhaseNav lang={lang} phases={activePhases} />
          <main>
            {activePhases.map(phase => (
              <Phase key={phase.id} phase={phase} lang={lang} />
            ))}
            {selectedVersion.hasQuestions && <QuestionsSection lang={lang} questionGroups={selectedVersion.questionGroups} />}
          </main>
        </>
      )}
      
      <Footer lang={lang} />
    </>
  );
}
