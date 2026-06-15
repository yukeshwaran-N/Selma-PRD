import { t } from '../data/translations';

export default function CancelBox({ title, items, lang }) {
  return (
    <div className="cancel-box">
      <strong>{t(title, lang)}</strong>
      <ul>
        {items.map((item, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: t(item, lang) }} />
        ))}
      </ul>
    </div>
  );
}
