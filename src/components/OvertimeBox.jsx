import { t } from '../data/translations';

export default function OvertimeBox({ title, items, lang }) {
  return (
    <div className="overtime-box">
      <strong>{t(title, lang)}</strong>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{t(item, lang)}</li>
        ))}
      </ul>
    </div>
  );
}
