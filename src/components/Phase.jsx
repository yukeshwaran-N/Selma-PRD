import Lane from './Lane';
import CancelBox from './CancelBox';
import OvertimeBox from './OvertimeBox';
import ContractBox from './ContractBox';
import PayFlow from './PayFlow';
import { t } from '../data/translations';

export default function Phase({ phase, lang }) {
  return (
    <section className="phase" id={phase.id}>
      <div className="phase-head">
        <span className="phase-num ui">{t(phase.num, lang)}</span>
        <h2 className="phase-title">{t(phase.title, lang)}</h2>
      </div>
      <p className="phase-sub">{t(phase.sub, lang)}</p>

      {/* Phase tags */}
      {phase.tags && phase.tags.length > 0 && (
        <div className="phase-tags">
          {phase.tags.map((tag, i) => (
            <span key={i} className={`ptag ${tag.cls}`}>{t(tag.label, lang)}</span>
          ))}
        </div>
      )}

      {/* Contract box (e.g. Phase 1, Phase 6) */}
      {phase.contractBox && (
        <ContractBox
          title={phase.contractBox.title}
          body={phase.contractBox.body}
          lang={lang}
        />
      )}

      {/* Cancel box */}
      {phase.cancelBox && (
        <CancelBox
          title={phase.cancelBox.title}
          items={phase.cancelBox.items}
          lang={lang}
        />
      )}

      {/* Overtime box */}
      {phase.overtimeBox && (
        <OvertimeBox
          title={phase.overtimeBox.title}
          items={phase.overtimeBox.items}
          lang={lang}
        />
      )}

      {/* Payment flow diagram */}
      {phase.payflow && <PayFlow lang={lang} />}

      {/* Swimlanes */}
      <div className="lanes">
        {phase.lanes.map((lane, i) => (
          <Lane key={i} lane={lane} lang={lang} />
        ))}
      </div>
    </section>
  );
}
