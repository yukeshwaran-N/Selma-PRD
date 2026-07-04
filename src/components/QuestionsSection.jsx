import { t } from '../data/translations';

export default function QuestionsSection({ lang, questionGroups }) {
  if (!questionGroups || questionGroups.length === 0) return null;

  return (
    <section className="phase" id="pq">
      <div className="phase-head">
        <span className="phase-num ui" style={{ borderColor: 'var(--amber)', color: 'var(--amber)' }}>
          {t('Open Qs', lang)}
        </span>
        <h2 className="phase-title">{t('Questions pending client confirmation', lang)}</h2>
      </div>
      <p className="phase-sub">
        {t('These questions must be answered before the relevant phase can be built. All are drawn from this walkthrough — each one blocks a specific part of the architecture.', lang)}
      </p>

      <div className="questions-section">
        <h2>{t('Architecture Questions Register', lang)}</h2>
        <p className="qs-sub">
          {t('Questions marked NEW were raised after the alignment meeting based on this flow. All HIGH-priority answers are needed before database design begins.', lang)}
        </p>

        {questionGroups.map((group, gi) => (
          <div className="q-group" key={gi}>
            <div className="q-group-title">{t(group.title, lang)}</div>
            {group.questions.map((q) => (
              <div className="q-card" key={q.id}>
                <div className="q-id">{q.id}</div>
                <div className="q-body">
                  <p className="q-text">{t(q.text, lang)}</p>
                  <div className="q-meta">
                    <span className={`q-pri ${q.priority}`}>{t(q.priority.toUpperCase(), lang)}</span>
                    {q.isNew && <span className="q-tag new">{t('NEW', lang)}</span>}
                    {q.tags.map((tag, ti) => (
                      <span className="q-tag" key={ti}>{t(tag, lang)}</span>
                    ))}
                  </div>
                  <div className="q-answer-line">
                    {t('Answer:', lang)} <span className="q-answer-blank" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
