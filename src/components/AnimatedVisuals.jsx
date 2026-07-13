import './AnimatedVisuals.css';

const SvgBase = ({ children }) => (
  <div className="animated-svg-container">
    <svg viewBox="0 0 200 200" className="anim-svg" xmlns="http://www.w3.org/2000/svg">
      {/* Universal Background Circle */}
      <circle cx="100" cy="100" r="90" fill="#f3f4f6" />
      {children}
    </svg>
  </div>
);

export const AnimatedAdminSetup = () => (
  <SvgBase>
    {/* Shield */}
    <path className="anim-float-1" d="M100 30 L150 50 L150 110 C150 150 100 180 100 180 C100 180 50 150 50 110 L50 50 Z" fill="none" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    {/* Checkmark */}
    <path className="anim-draw" d="M75 105 L95 125 L130 80" fill="none" stroke="var(--purple)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
  </SvgBase>
);

export const AnimatedMatching = () => (
  <SvgBase>
    {/* Network Lines */}
    <path d="M50 100 L100 70 L150 100 L120 150 L80 150 Z" fill="none" stroke="#cbd5e1" strokeWidth="3" />
    <path d="M100 70 L100 30" fill="none" stroke="#cbd5e1" strokeWidth="3" />
    <path d="M150 100 L180 80" fill="none" stroke="#cbd5e1" strokeWidth="3" />
    <path d="M50 100 L30 120" fill="none" stroke="#cbd5e1" strokeWidth="3" />
    
    {/* Static Nodes */}
    <circle cx="50" cy="100" r="8" fill="#1e293b" />
    <circle cx="150" cy="100" r="8" fill="#1e293b" />
    <circle cx="120" cy="150" r="8" fill="#1e293b" />
    <circle cx="80" cy="150" r="8" fill="#1e293b" />
    <circle cx="100" cy="30" r="6" fill="#94a3b8" />
    <circle cx="180" cy="80" r="6" fill="#94a3b8" />
    <circle cx="30" cy="120" r="6" fill="#94a3b8" />

    {/* Pulsing Target Node */}
    <circle cx="100" cy="70" className="anim-pulse" />
  </SvgBase>
);

export const AnimatedAgency = () => (
  <SvgBase>
    {/* Calendar Base */}
    <rect x="50" y="60" width="100" height="100" rx="12" fill="none" stroke="#1e293b" strokeWidth="6" className="anim-float-2" />
    <path d="M50 90 L150 90" stroke="#1e293b" strokeWidth="6" className="anim-float-2" />
    <path d="M75 45 L75 75" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" className="anim-float-2" />
    <path d="M125 45 L125 75" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" className="anim-float-2" />
    
    {/* Checkmark drawing */}
    <path d="M80 120 L95 135 L120 105" fill="none" stroke="var(--rose)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" className="anim-draw" style={{ animationDelay: '0.5s' }} />
  </SvgBase>
);

export const AnimatedNurse = () => (
  <SvgBase>
    {/* Phone */}
    <rect x="65" y="40" width="70" height="120" rx="16" fill="none" stroke="#1e293b" strokeWidth="6" className="anim-float-1" />
    <path d="M85 40 L115 40" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" className="anim-float-1" />
    
    {/* Notification Dot */}
    <circle cx="130" cy="50" className="anim-pulse" />
    
    {/* Chat lines */}
    <path d="M80 80 L120 80" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" className="anim-float-1" />
    <path d="M80 100 L110 100" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" className="anim-float-1" />
    <path d="M80 120 L120 120" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" className="anim-float-1" />
  </SvgBase>
);

export const AnimatedExecution = () => (
  <SvgBase>
    {/* QR Code Frame */}
    <rect x="50" y="50" width="100" height="100" rx="8" fill="none" stroke="#1e293b" strokeWidth="6" />
    
    {/* QR Squares */}
    <rect x="65" y="65" width="20" height="20" fill="#1e293b" rx="4" />
    <rect x="115" y="65" width="20" height="20" fill="#1e293b" rx="4" />
    <rect x="65" y="115" width="20" height="20" fill="#1e293b" rx="4" />
    
    <path d="M115 115 L135 115 M115 135 L135 135 M125 115 L125 135" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
    
    {/* Scanning Line */}
    <line x1="40" y1="100" x2="160" y2="100" stroke="var(--purple)" strokeWidth="4" className="anim-scan" />
  </SvgBase>
);

export const AnimatedInvoice = () => (
  <SvgBase>
    {/* Document */}
    <path d="M60 160 L60 40 C60 35 65 30 70 30 L110 30 L140 60 L140 160 C140 165 135 170 130 170 L70 170 C65 170 60 165 60 160 Z" fill="none" stroke="#1e293b" strokeWidth="6" className="anim-float-2" />
    <path d="M110 30 L110 60 L140 60" fill="none" stroke="#1e293b" strokeWidth="6" className="anim-float-2" strokeLinejoin="round" />
    
    {/* Invoice Lines drawing */}
    <path d="M75 90 L125 90" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" className="anim-draw anim-float-2" />
    <path d="M75 110 L115 110" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" className="anim-draw anim-float-2" style={{ animationDelay: '0.2s' }} />
    
    {/* Total box */}
    <rect x="75" y="130" width="50" height="20" rx="4" fill="var(--rose-soft)" className="anim-float-2" />
    <path d="M85 140 L115 140" stroke="var(--rose)" strokeWidth="4" strokeLinecap="round" className="anim-float-2" />
  </SvgBase>
);

export const AnimatedException = () => (
  <SvgBase>
    {/* Triangle */}
    <path d="M100 40 L160 140 L40 140 Z" fill="none" stroke="#1e293b" strokeWidth="6" strokeLinejoin="round" />
    
    {/* Exclamation */}
    <line x1="100" y1="70" x2="100" y2="105" stroke="var(--rose)" strokeWidth="8" strokeLinecap="round" className="anim-blink" />
    <circle cx="100" cy="125" r="4" fill="var(--rose)" className="anim-blink" />
    
    {/* Magnifying Glass moving around */}
    <g className="anim-search">
      <circle cx="130" cy="100" r="15" fill="none" stroke="#cbd5e1" strokeWidth="6" />
      <line x1="140" y1="110" x2="155" y2="125" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" />
    </g>
  </SvgBase>
);
