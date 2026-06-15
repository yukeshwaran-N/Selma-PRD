import Step from './Step';
import { t } from '../data/translations';

export default function Lane({ lane, lang }) {
  return (
    <div className={`lane ${lane.type}`}>
      <div className="lane-head ui">{t(lane.label, lang)}</div>
      <div className="lane-body">
        {lane.steps.map((step, i) => (
          <Step key={i} step={step} lang={lang} />
        ))}
      </div>
    </div>
  );
}
