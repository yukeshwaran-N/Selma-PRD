import { t } from '../data/translations';

export default function VersionDashboard({ version, onOpenFullPRD, lang }) {
  if (!version) return null;
  
  const { changeLog } = version;

  return (
    <div className="version-dashboard">
      <div className="dashboard-header">
        <div className="dashboard-header-top">
          <div>
            <h1 className="dashboard-title">{t(version.title, lang)}</h1>
            <p className="dashboard-meta">
              <span className="version-id">{t(version.versionNumber, lang)}</span>
              <span className="meta-divider">•</span>
              <span className="author">{t('By', lang)} {version.author}</span>
              <span className="meta-divider">•</span>
              <span className="date">{version.dateCreated}</span>
            </p>
          </div>
          <button className="open-prd-btn" onClick={onOpenFullPRD}>
            {t('Open Full PRD', lang)}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        <div className="dashboard-summary">
          <p>{t(version.summary, lang)}</p>
        </div>
      </div>

      <div className="dashboard-content">
        <h2 className="section-heading">{t("What's Changed", lang)}</h2>
        
        <div className="change-grid">
          <div className="change-card added">
            <h3><span className="icon">+</span> {t('Added Requirements', lang)}</h3>
            {changeLog.added && changeLog.added.length > 0 ? (
              <ul>
                {changeLog.added.map((item, i) => <li key={i}>{t(item, lang)}</li>)}
              </ul>
            ) : (
              <p className="empty-state">{t('No new requirements added.', lang)}</p>
            )}
          </div>

          <div className="change-card modified">
            <h3><span className="icon">~</span> {t('Modified Requirements', lang)}</h3>
            {changeLog.modified && changeLog.modified.length > 0 ? (
              <ul>
                {changeLog.modified.map((item, i) => <li key={i}>{t(item, lang)}</li>)}
              </ul>
            ) : (
              <p className="empty-state">{t('No modified requirements.', lang)}</p>
            )}
          </div>

          <div className="change-card removed">
            <h3><span className="icon">-</span> {t('Removed Requirements', lang)}</h3>
            {changeLog.removed && changeLog.removed.length > 0 ? (
              <ul>
                {changeLog.removed.map((item, i) => <li key={i}>{t(item, lang)}</li>)}
              </ul>
            ) : (
              <p className="empty-state">{t('No removed requirements.', lang)}</p>
            )}
          </div>
        </div>

        <div className="dashboard-notes-section">
          <div className="note-card client">
            <h3>{t('Client Notes', lang)}</h3>
            <p>{t(changeLog.clientNotes, lang) || t('No specific client notes for this version.', lang)}</p>
          </div>
          <div className="note-card questions">
            <h3>{t('Open Questions', lang)}</h3>
            <p>{t(changeLog.openQuestions, lang) || t('No open questions pending.', lang)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
