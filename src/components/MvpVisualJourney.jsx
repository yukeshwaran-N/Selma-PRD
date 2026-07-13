import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { t } from '../data/translations';

gsap.registerPlugin(ScrollTrigger);

// Custom UI Components for the Flowchart
const Node = ({ title, status, statusClass, isException }) => (
  <div className={`vf-node ${isException ? 'exception' : ''}`}>
    <span className="vf-title">{title}</span>
    {status && <span className={`vf-status ${(statusClass || status).toLowerCase().replace(' ', '-')}`}>{status}</span>}
  </div>
);

const FilterNode = ({ lang }) => (
  <div className="vf-node filter-node">
    <span className="vf-title">{t('Filter by:', lang)}</span>
    <div className="vf-tags">
      <span>{t('• Specialization', lang)}</span>
      <span>{t('• Availability', lang)}</span>
      <span>{t('• Distance', lang)}</span>
      <span>{t('• Rating', lang)}</span>
    </div>
  </div>
);

const Arrow = ({ label }) => (
  <div className="vf-arrow-container">
    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" className="vf-arrow-svg">
      <path d="M12 0L12 30M12 30L6 24M12 30L18 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    {label && <span className="vf-arrow-label">{label}</span>}
  </div>
);

const SplitBranch = ({ leftNode, rightNode, leftLabel, rightLabel }) => (
  <div className="vf-split">
    <div className="vf-split-line"></div>
    <div className="vf-split-paths">
      <div className="vf-path">
        <Arrow label={leftLabel} />
        {leftNode}
      </div>
      <div className="vf-path">
        <Arrow label={rightLabel} />
        {rightNode}
      </div>
    </div>
  </div>
);

export default function MvpVisualJourney({ lang }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from('.journey-header', { y: 50, opacity: 0, duration: 1, ease: 'power3.out' });

    const sections = gsap.utils.toArray('.z-section');
    sections.forEach((section) => {
      const isReverse = section.classList.contains('reverse');
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        x: isReverse ? 80 : -80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    });

    // Stagger animate nodes within each section
    sections.forEach((section) => {
      const elements = section.querySelectorAll('.vf-node, .vf-arrow-container, .vf-split-line');
      gsap.from(elements, {
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
      });
    });
  }, { scope: containerRef });

  return (
    <div className="mvp-visual-journey" ref={containerRef}>
      <div className="journey-header">
        <span className="ui-badge">{t('COMPREHENSIVE WORKFLOW', lang)}</span>
        <h2>{t('The complete lifecycle of a Selma shift', lang)}</h2>
        <p>{t('From initial admin setup down to exception handling and automated invoicing.', lang)}</p>
      </div>

      <div className="zigzag-container">
        
        {/* Section 1: Admin Setup */}
        <div className="z-section">
          <div className="z-text">
            <h3>{t('1. Selma Admin Setup', lang)}</h3>
            <p>{t('The foundation of the platform starts with compliance and onboarding.', lang)}</p>
            <div className="visual-flowchart">
              <Node title={t('Create Hospital Account', lang)} />
              <Arrow />
              <Node title={t('Create Leasing Company Account', lang)} />
              <Arrow />
              <Node title={t('Verify Compliance Documents', lang)} />
              <Arrow />
              <Node title={t('Leasing Company Adds Nurses', lang)} />
              <Arrow />
              <Node title={t('Nurse Completes Profile & Docs', lang)} />
            </div>
          </div>
          <div className="z-image">
            <video src="/animations/1.mp4" autoPlay loop muted playsInline />
          </div>
        </div>

        {/* Section 2: Shift Request Flow */}
        <div className="z-section reverse">
          <div className="z-text">
            <h3>{t('2. Shift Request Flow', lang)}</h3>
            <p>{t('The hospital specifies the requirements and the matching engine instantly finds the perfect candidates.', lang)}</p>
            <div className="visual-flowchart">
              <Node title={t('Hospital Creates Shift Request (Ward/Date/Time/Spec)', lang)} status={t('APPLIED', lang)} statusClass="APPLIED" />
              <Arrow />
              <Node title={t('Matching Engine Executes', lang)} />
              <Arrow />
              <FilterNode lang={lang} />
              <Arrow />
              <Node title={t('Top 3 Agencies Selected', lang)} />
              <Arrow />
              <Node title={t('Email Notification Sent', lang)} />
            </div>
          </div>
          <div className="z-image">
            <video src="/animations/2.mp4" autoPlay loop muted playsInline />
          </div>
        </div>

        {/* Section 3: Leasing Company Flow */}
        <div className="z-section">
          <div className="z-text">
            <h3>{t('3. Leasing Company Flow', lang)}</h3>
            <p>{t('Agencies review incoming requests and assign available nurses.', lang)}</p>
            <div className="visual-flowchart">
              <Node title={t('Agency Reviews Request', lang)} />
              <Arrow />
              <SplitBranch 
                leftLabel={t('ACCEPT', lang)}
                leftNode={
                  <>
                    <Node title={t('Shift', lang)} status={t('ACCEPTED', lang)} statusClass="ACCEPTED" />
                    <Arrow />
                    <Node title={t('Assign Nurse', lang)} />
                    <Arrow />
                    <Node title={t('Shift', lang)} status={t('ASSIGNED', lang)} statusClass="ASSIGNED" />
                  </>
                }
                rightLabel={t('REJECT', lang)}
                rightNode={<Node title={t('Next Agency Invited', lang)} />}
              />
            </div>
          </div>
          <div className="z-image">
            <video src="/animations/3.mp4" autoPlay loop muted playsInline />
          </div>
        </div>

        {/* Section 4: Nurse Flow */}
        <div className="z-section reverse">
          <div className="z-text">
            <h3>{t('4. Nurse Flow', lang)}</h3>
            <p>{t('Nurses receive, confirm, and receive automated secure access for the shift.', lang)}</p>
            <div className="visual-flowchart">
              <Node title={t('Nurse Receives Assignment', lang)} />
              <Arrow />
              <SplitBranch 
                leftLabel={t('ACCEPT', lang)}
                leftNode={
                  <>
                    <Node title={t('Shift', lang)} status={t('CONFIRMED', lang)} statusClass="CONFIRMED" />
                    <Arrow />
                    <Node title={t('QR Code Generated', lang)} />
                    <Arrow />
                    <Node title={t('QR Sent By Email', lang)} />
                    <Arrow />
                    <Node title={t('24 Hour Reminder', lang)} />
                  </>
                }
                rightLabel={t('REJECT', lang)}
                rightNode={<Node title={t('Return To Agency', lang)} />}
              />
            </div>
          </div>
          <div className="z-image">
            <video src="/animations/4.mp4" autoPlay loop muted playsInline />
          </div>
        </div>

        {/* Section 5: Shift Execution Flow */}
        <div className="z-section">
          <div className="z-text">
            <h3>{t('5. Shift Execution Flow', lang)}</h3>
            <p>{t('Real-time attendance tracking via QR scans at the hospital ward.', lang)}</p>
            <div className="visual-flowchart">
              <Node title={t('Nurse Arrives At Hospital', lang)} />
              <Arrow />
              <Node title={t('QR Scan (Check-In)', lang)} />
              <Arrow />
              <Node title={t('Timestamp Recorded', lang)} status={t('IN PROGRESS', lang)} statusClass="IN PROGRESS" />
              <Arrow />
              <Node title={t('Shift Worked', lang)} />
              <Arrow />
              <Node title={t('QR Scan (Check-Out)', lang)} />
              <Arrow />
              <Node title={t('Hours Calculated', lang)} />
              <Arrow />
              <Node title={t('Shift', lang)} status={t('COMPLETED', lang)} statusClass="COMPLETED" />
            </div>
          </div>
          <div className="z-image">
            <video src="/animations/5.mp4" autoPlay loop muted playsInline />
          </div>
        </div>

        {/* Section 6: Invoice Generation Flow */}
        <div className="z-section reverse">
          <div className="z-text">
            <h3>{t('6. Invoice Generation Flow', lang)}</h3>
            <p>{t('Instant financial settlement based on the exact tracked time.', lang)}</p>
            <div className="visual-flowchart">
              <Node title={t('Calculate Worked Hours', lang)} />
              <Arrow />
              <Node title={t('Hours × Hourly Rate', lang)} />
              <Arrow />
              <Node title={t('Calculate Selma Commission', lang)} />
              <Arrow />
              <Node title={t('Generate Hospital Invoice (Gross Amount)', lang)} />
              <Arrow />
              <Node title={t('Generate Agency Invoice (Net Amount After Commission)', lang)} />
              <Arrow />
              <Node title={t('PDF Generated', lang)} />
              <Arrow />
              <Node title={t('Download Available (Hospital / Agency / Admin)', lang)} />
            </div>
          </div>
          <div className="z-image">
            <video src="/animations/6.mp4" autoPlay loop muted playsInline />
          </div>
        </div>

        {/* Section 7: Admin Exception Flow */}
        <div className="z-section">
          <div className="z-text">
            <h3>{t('7. Admin Exception Flow', lang)}</h3>
            <p>{t('Failsafe mechanisms for manual corrections and robust auditing.', lang)}</p>
            <div className="visual-flowchart">
              <Node title={t('Failed QR Scan', lang)} isException={true} />
              <Arrow />
              <Node title={t('Attendance Flagged', lang)} isException={true} />
              <Arrow />
              <Node title={t('Admin Review', lang)} isException={true} />
              <Arrow />
              <Node title={t('Manual Correction', lang)} isException={true} />
              <Arrow />
              <Node title={t('Audit Log Created', lang)} />
              <Arrow />
              <Node title={t('Invoice Released', lang)} />
            </div>
          </div>
          <div className="z-image">
            <video src="/animations/7.mp4" autoPlay loop muted playsInline />
          </div>
        </div>

      </div>
    </div>
  );
}
