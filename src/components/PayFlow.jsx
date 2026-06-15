import { t } from '../data/translations';

export default function PayFlow({ lang }) {
  return (
    <div className="payflow ui">
      <div className="node">{t('Hospital', lang)}</div>
      <div className="arrow">→</div>
      <div className="node selma">Selma</div>
      <div className="arrow">→</div>
      <div className="node">{t('Nursing home', lang)}</div>
      <div className="arrow">→</div>
      <div className="node">{t('Nurse', lang)}</div>
      <div className="label">
        {t('Invoice total → deducts commission + penalties → pays out → home pays nurse salary', lang)}
      </div>
    </div>
  );
}
