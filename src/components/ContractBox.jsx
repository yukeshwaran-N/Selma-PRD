import { t } from '../data/translations';

export default function ContractBox({ title, body, lang }) {
  return (
    <div className="contract-box" style={{ marginBottom: '20px' }}>
      <strong>{t(title, lang)}</strong>
      <p>{t(body, lang)}</p>
    </div>
  );
}
