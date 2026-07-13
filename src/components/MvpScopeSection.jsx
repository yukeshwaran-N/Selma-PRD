import { t } from '../data/translations';

export default function MvpScopeSection({ lang }) {
  return (
    <section className="phase" id="mvp-scope">
      <div className="phase-head">
        <span className="phase-num ui">{t('MVP', lang)}</span>
        <h2 className="phase-title">{t('MVP Scope & Core Flow', lang)}</h2>
      </div>
      <p className="phase-sub">
        {t('This section outlines the Minimum Viable Product (MVP) boundaries. The animated flow below demonstrates the core matching engine which is the primary focus for V1.0.', lang)}
      </p>

      <div className="mvp-animation-container">
        <svg viewBox="0 0 800 300" className="mvp-svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--accent)" />
              <stop offset="100%" stopColor="#8A2BE2" />
            </linearGradient>
            
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="var(--accent)" />
            </marker>
          </defs>

          {/* Hospital Node */}
          <g className="svg-node hospital-node" transform="translate(50, 100)">
            <rect width="120" height="60" rx="8" fill="var(--card-bg)" stroke="var(--border)" strokeWidth="2" />
            <text x="60" y="35" textAnchor="middle" fill="var(--text)" fontSize="16" fontWeight="bold">Hospital</text>
            <text x="60" y="55" textAnchor="middle" fill="var(--text-muted)" fontSize="12">Needs Nurse</text>
          </g>

          {/* Selma Node */}
          <g className="svg-node selma-node" transform="translate(340, 100)">
            <rect width="120" height="60" rx="8" fill="var(--accent)" opacity="0.1" stroke="var(--accent)" strokeWidth="2" />
            <text x="60" y="35" textAnchor="middle" fill="var(--accent)" fontSize="16" fontWeight="bold">Selma AI</text>
            <text x="60" y="55" textAnchor="middle" fill="var(--text-muted)" fontSize="12">Matching Engine</text>
          </g>

          {/* Nursing Home Node */}
          <g className="svg-node home-node" transform="translate(630, 100)">
            <rect width="120" height="60" rx="8" fill="var(--card-bg)" stroke="var(--border)" strokeWidth="2" />
            <text x="60" y="35" textAnchor="middle" fill="var(--text)" fontSize="16" fontWeight="bold">Nursing Home</text>
            <text x="60" y="55" textAnchor="middle" fill="var(--text-muted)" fontSize="12">Accepts Shift</text>
          </g>

          {/* Animated Connecting Lines */}
          <path className="svg-path path-1" d="M 170 130 L 330 130" stroke="url(#line-gradient)" strokeWidth="3" markerEnd="url(#arrowhead)" strokeDasharray="10 5" fill="none" />
          <path className="svg-path path-2" d="M 460 130 L 620 130" stroke="url(#line-gradient)" strokeWidth="3" markerEnd="url(#arrowhead)" strokeDasharray="10 5" fill="none" />
          
          {/* Animated dots flowing along lines */}
          <circle r="4" fill="var(--accent)" className="flowing-dot dot-1">
            <animateMotion dur="2s" repeatCount="indefinite" path="M 170 130 L 330 130" />
          </circle>
          
          <circle r="4" fill="#8A2BE2" className="flowing-dot dot-2">
            <animateMotion dur="2s" repeatCount="indefinite" begin="1s" path="M 460 130 L 620 130" />
          </circle>
        </svg>
      </div>

      <div className="mvp-scope-grid">
        <div className="scope-box in-scope">
          <h3>✅ {t('In Scope (MVP)', lang)}</h3>
          <ul>
            <li>{t('Hospital Web Portal (Job Posting & Approval)', lang)}</li>
            <li>{t('Nursing Home Web Portal (Assignment & Management)', lang)}</li>
            <li>{t('Selma Matching Engine (Distance, Rating, Qualification)', lang)}</li>
            <li>{t('Basic Contract & Penalty Tracking', lang)}</li>
            <li>{t('Nurse Mobile Web App (Check-in/Check-out via QR)', lang)}</li>
          </ul>
        </div>
        
        <div className="scope-box out-scope">
          <h3>❌ {t('Out of Scope (Post-MVP)', lang)}</h3>
          <ul>
            <li>{t('Automated Invoicing & Payment Gateway Integration', lang)}</li>
            <li>{t('Native iOS/Android Apps (Web apps only for MVP)', lang)}</li>
            <li>{t('Complex Dunning Engine for Overdue Payments', lang)}</li>
            <li>{t('Advanced Predictive Nurse Churn Analytics', lang)}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
