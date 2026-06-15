import Flag from './Flag';
import { t } from '../data/translations';

export default function Step({ step, lang }) {
  // A step can be a flag-only item (no h/p)
  if (step.flag && !step.h) {
    return <Flag type={step.flag.type} label={t(step.flag.label, lang)} />;
  }

  return (
    <>
      {step.flag && <Flag type={step.flag.type} label={t(step.flag.label, lang)} />}
      <div className={`step${step.empty ? ' empty' : ''}`}>
        {step.h && <h4>{t(step.h, lang)}</h4>}
        {step.p && <p>{t(step.p, lang)}</p>}
      </div>
    </>
  );
}
