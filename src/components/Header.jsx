export default function Header({ lang, onToggleLang }) {
  return (
    <div className="main-header">
      <div className="header-brand-container">
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
