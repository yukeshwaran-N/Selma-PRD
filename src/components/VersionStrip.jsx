import { t } from '../data/translations';

export default function VersionStrip({ lang, versionNumber }) {
  return (
    <div className="version-strip">
      {versionNumber && <span className="vbadge new">{versionNumber}</span>}
      <span className="vbadge new">{t('NEW', lang)}</span>
      <span>{t('Cancellation & withdrawal rules across all phases', lang)}</span>
      <span className="vbadge cancel">{t('CANCEL', lang)}</span>
      <span>{t('Hospital and nursing home cancellation thresholds', lang)}</span>
      <span className="vbadge overtime">{t('OVERTIME', lang)}</span>
      <span>{t('ArbZG overtime handling and approval flow', lang)}</span>
      <span className="vbadge contract">{t('CONTRACT', lang)}</span>
      <span>{t('Contract setup, DPA, and document verification', lang)}</span>
    </div>
  );
}
