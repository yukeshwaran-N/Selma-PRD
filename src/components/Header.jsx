import { t } from '../data/translations';

export default function Header({ lang, onToggleLang, viewMode, onBackToTimeline }) {
  return (
    <div className="main-header">
      <div className="header-brand-container">
        {viewMode === 'full-prd' && (
          <button className="back-btn ui" onClick={onBackToTimeline}>
            {t('← Back to Timeline', lang)}
          </button>
        )}
        <img src="/logo.png" alt="Praskla Technology Logo" className="header-logo-img" />
        <div className="header-brand-text">
          <span className="header-brand">Praskla Technology</span>
          <span className="header-slogan">Quality assured softwares firm</span>
        </div>
      </div>
      <button className="lang-toggle ui" onClick={onToggleLang}>
        {lang === 'en' ? '🇩🇪 DE' : '🇬🇧 EN'}
      </button>
    </div>
  );
}
