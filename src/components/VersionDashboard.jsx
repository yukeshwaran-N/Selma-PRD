export default function VersionDashboard({ version, onOpenFullPRD }) {
  if (!version) return null;
  
  const { changeLog } = version;

  return (
    <div className="version-dashboard">
      <div className="dashboard-header">
        <div className="dashboard-header-top">
          <div>
            <h1 className="dashboard-title">{version.title}</h1>
            <p className="dashboard-meta">
              <span className="version-id">{version.versionNumber}</span>
              <span className="meta-divider">•</span>
              <span className="author">By {version.author}</span>
              <span className="meta-divider">•</span>
              <span className="date">{version.dateCreated}</span>
            </p>
          </div>
          <button className="open-prd-btn" onClick={onOpenFullPRD}>
            Open Full PRD
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        <div className="dashboard-summary">
          <p>{version.summary}</p>
        </div>
      </div>

      <div className="dashboard-content">
        <h2 className="section-heading">What's Changed</h2>
        
        <div className="change-grid">
          <div className="change-card added">
            <h3><span className="icon">+</span> Added Requirements</h3>
            {changeLog.added && changeLog.added.length > 0 ? (
              <ul>
                {changeLog.added.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            ) : (
              <p className="empty-state">No new requirements added.</p>
            )}
          </div>

          <div className="change-card modified">
            <h3><span className="icon">~</span> Modified Requirements</h3>
            {changeLog.modified && changeLog.modified.length > 0 ? (
              <ul>
                {changeLog.modified.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            ) : (
              <p className="empty-state">No modified requirements.</p>
            )}
          </div>

          <div className="change-card removed">
            <h3><span className="icon">-</span> Removed Requirements</h3>
            {changeLog.removed && changeLog.removed.length > 0 ? (
              <ul>
                {changeLog.removed.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            ) : (
              <p className="empty-state">No removed requirements.</p>
            )}
          </div>
        </div>

        <div className="dashboard-notes-section">
          <div className="note-card client">
            <h3>Client Notes</h3>
            <p>{changeLog.clientNotes || 'No specific client notes for this version.'}</p>
          </div>
          <div className="note-card questions">
            <h3>Open Questions</h3>
            <p>{changeLog.openQuestions || 'No open questions pending.'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
