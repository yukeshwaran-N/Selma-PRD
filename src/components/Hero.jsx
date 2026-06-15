import { useState } from 'react';
import { t } from '../data/translations';

export default function Hero({ lang }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const imgSrc = lang === 'en' ? '/workflow-en.png' : '/workflow-de.png';

  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <div className="eyebrow">Selma Platform Flow — v2</div>
          <h1>{t('From contract to paycheck — the full picture', lang)}</h1>
          <p className="lede">
            {t("Three actors. Nine phases. One shift. This walkthrough traces every step from Selma's first contract with a hospital or nursing home, through onboarding, job posting, matching, check-in, check-out, and payment — including every cancellation and overtime scenario.", lang)}
          </p>
          <div className="legend">
            <span><span className="dot hospital" />{t('Hospital', lang)}</span>
            <span><span className="dot home" />{t('Nursing home', lang)}</span>
            <span><span className="dot nurse" />{t('Nurse', lang)}</span>
            <span><span className="dot selma" />Selma</span>
          </div>
        </div>

        <div className="hero-visual" onClick={() => setIsLightboxOpen(true)}>
          <div className="hero-image-container zoomable">
            <img src={imgSrc} alt="Workflow diagram" className="hero-image" />
            <div className="zoom-hint">{t('Click to enlarge', lang)}</div>
          </div>
        </div>
      </header>

      {isLightboxOpen && (
        <div className="lightbox" onClick={() => setIsLightboxOpen(false)}>
          <button className="lightbox-close" onClick={() => setIsLightboxOpen(false)}>✕</button>
          <img src={imgSrc} alt="Workflow diagram full" className="lightbox-image" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}
