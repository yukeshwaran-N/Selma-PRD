import { t } from '../data/translations';

export default function Timeline({ versions, selectedVersionId, onSelectVersion, lang }) {
  return (
    <div className="timeline-sidebar">
      <h2 className="timeline-title">{t('Version History', lang)}</h2>
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
                  {isLatest && <span className="timeline-badge latest">{t('Latest', lang)}</span>}
                </div>
                <h3 className="timeline-version-name">{t(version.versionNumber, lang)}</h3>
                <p className="timeline-version-title">{t(version.title, lang)}</p>
                <div className="timeline-status-row">
                  <span className={`status-pill ${version.status.toLowerCase().replace(' ', '-')}`}>
                    {t(version.status, lang)}
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
