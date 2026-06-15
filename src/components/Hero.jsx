import { t } from '../data/translations';

export default function Hero({ lang, onToggleLang }) {
  return (
    <>
      <button className="lang-toggle ui" onClick={onToggleLang}>
        {lang === 'en' ? '🇩🇪 DE' : '🇬🇧 EN'}
      </button>

      <header className="hero">
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
      </header>
    </>
  );
}
