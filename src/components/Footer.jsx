import { t } from '../data/translations';

export default function Footer({ lang }) {
  return (
    <footer>
      <span>
        <strong>Selma Platform Flow</strong> — v2 · {t('Prepared by', lang)}{' '}
        <strong>Praskla Technology</strong>
      </span>
      <span>· info@prasklatechnology.com</span>
    </footer>
  );
}
