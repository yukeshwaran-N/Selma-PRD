export default function Timeline({ versions, selectedVersionId, onSelectVersion }) {
  return (
    <div className="timeline-sidebar">
      <h2 className="timeline-title">Version History</h2>
      <div className="timeline-container">
        {versions.map((version, index) => {
          const isLatest = index === 0;
          const isSelected = version.id === selectedVersionId;
          
          return (
            <div 
              key={version.id} 
              className={`timeline-item ${isSelected ? 'selected' : ''}`}
              onClick={() => onSelectVersion(version.id)}
            >
              <div className="timeline-node">
                <div className="timeline-dot"></div>
                {index !== versions.length - 1 && <div className="timeline-line"></div>}
              </div>
              <div className="timeline-content">
                <div className="timeline-meta">
                  <span className="timeline-date">{version.dateCreated}</span>
                  {isLatest && <span className="timeline-badge latest">Latest</span>}
                </div>
                <h3 className="timeline-version-name">{version.versionNumber}</h3>
                <p className="timeline-version-title">{version.title}</p>
                <div className="timeline-status-row">
                  <span className={`status-pill ${version.status.toLowerCase().replace(' ', '-')}`}>
                    {version.status}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
