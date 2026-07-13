import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Custom UI Components for the Flowchart
const Node = ({ title, status, isException }) => (
  <div className={`vf-node ${isException ? 'exception' : ''}`}>
    <span className="vf-title">{title}</span>
    {status && <span className={`vf-status ${status.toLowerCase().replace(' ', '-')}`}>{status}</span>}
  </div>
);

const FilterNode = () => (
  <div className="vf-node filter-node">
    <span className="vf-title">Filter by:</span>
    <div className="vf-tags">
      <span>• Specialization</span>
      <span>• Availability</span>
      <span>• Distance</span>
      <span>• Rating</span>
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

export default function MvpVisualJourney() {
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
        <span className="ui-badge">COMPREHENSIVE WORKFLOW</span>
        <h2>The complete lifecycle of a Selma shift</h2>
        <p>From initial admin setup down to exception handling and automated invoicing.</p>
      </div>

      <div className="zigzag-container">
        
        {/* Section 1: Admin Setup */}
        <div className="z-section">
          <div className="z-text">
            <h3>1. Selma Admin Setup</h3>
            <p>The foundation of the platform starts with compliance and onboarding.</p>
            <div className="visual-flowchart">
              <Node title="Create Hospital Account" />
              <Arrow />
              <Node title="Create Leasing Company Account" />
              <Arrow />
              <Node title="Verify Compliance Documents" />
              <Arrow />
              <Node title="Leasing Company Adds Nurses" />
              <Arrow />
              <Node title="Nurse Completes Profile & Docs" />
            </div>
          </div>
          <div className="z-image">
            <video src="/animations/1.mp4" autoPlay loop muted playsInline />
          </div>
        </div>

        {/* Section 2: Shift Request Flow */}
        <div className="z-section reverse">
          <div className="z-text">
            <h3>2. Shift Request Flow</h3>
            <p>The hospital specifies the requirements and the matching engine instantly finds the perfect candidates.</p>
            <div className="visual-flowchart">
              <Node title="Hospital Creates Shift Request (Ward/Date/Time/Spec)" status="APPLIED" />
              <Arrow />
              <Node title="Matching Engine Executes" />
              <Arrow />
              <FilterNode />
              <Arrow />
              <Node title="Top 3 Agencies Selected" />
              <Arrow />
              <Node title="Email Notification Sent" />
            </div>
          </div>
          <div className="z-image">
            <video src="/animations/2.mp4" autoPlay loop muted playsInline />
          </div>
        </div>

        {/* Section 3: Leasing Company Flow */}
        <div className="z-section">
          <div className="z-text">
            <h3>3. Leasing Company Flow</h3>
            <p>Agencies review incoming requests and assign available nurses.</p>
            <div className="visual-flowchart">
              <Node title="Agency Reviews Request" />
              <Arrow />
              <SplitBranch 
                leftLabel="ACCEPT"
                leftNode={
                  <>
                    <Node title="Shift" status="ACCEPTED" />
                    <Arrow />
                    <Node title="Assign Nurse" />
                    <Arrow />
                    <Node title="Shift" status="ASSIGNED" />
                  </>
                }
                rightLabel="REJECT"
                rightNode={<Node title="Next Agency Invited" />}
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
            <h3>4. Nurse Flow</h3>
            <p>Nurses receive, confirm, and receive automated secure access for the shift.</p>
            <div className="visual-flowchart">
              <Node title="Nurse Receives Assignment" />
              <Arrow />
              <SplitBranch 
                leftLabel="ACCEPT"
                leftNode={
                  <>
                    <Node title="Shift" status="CONFIRMED" />
                    <Arrow />
                    <Node title="QR Code Generated" />
                    <Arrow />
                    <Node title="QR Sent By Email" />
                    <Arrow />
                    <Node title="24 Hour Reminder" />
                  </>
                }
                rightLabel="REJECT"
                rightNode={<Node title="Return To Agency" />}
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
            <h3>5. Shift Execution Flow</h3>
            <p>Real-time attendance tracking via QR scans at the hospital ward.</p>
            <div className="visual-flowchart">
              <Node title="Nurse Arrives At Hospital" />
              <Arrow />
              <Node title="QR Scan (Check-In)" />
              <Arrow />
              <Node title="Timestamp Recorded" status="IN PROGRESS" />
              <Arrow />
              <Node title="Shift Worked" />
              <Arrow />
              <Node title="QR Scan (Check-Out)" />
              <Arrow />
              <Node title="Hours Calculated" />
              <Arrow />
              <Node title="Shift" status="COMPLETED" />
            </div>
          </div>
          <div className="z-image">
            <video src="/animations/5.mp4" autoPlay loop muted playsInline />
          </div>
        </div>

        {/* Section 6: Invoice Generation Flow */}
        <div className="z-section reverse">
          <div className="z-text">
            <h3>6. Invoice Generation Flow</h3>
            <p>Instant financial settlement based on the exact tracked time.</p>
            <div className="visual-flowchart">
              <Node title="Calculate Worked Hours" />
              <Arrow />
              <Node title="Hours × Hourly Rate" />
              <Arrow />
              <Node title="Calculate Selma Commission" />
              <Arrow />
              <Node title="Generate Hospital Invoice (Gross Amount)" />
              <Arrow />
              <Node title="Generate Agency Invoice (Net Amount After Commission)" />
              <Arrow />
              <Node title="PDF Generated" />
              <Arrow />
              <Node title="Download Available (Hospital / Agency / Admin)" />
            </div>
          </div>
          <div className="z-image">
            <video src="/animations/6.mp4" autoPlay loop muted playsInline />
          </div>
        </div>

        {/* Section 7: Admin Exception Flow */}
        <div className="z-section">
          <div className="z-text">
            <h3>7. Admin Exception Flow</h3>
            <p>Failsafe mechanisms for manual corrections and robust auditing.</p>
            <div className="visual-flowchart">
              <Node title="Failed QR Scan" isException={true} />
              <Arrow />
              <Node title="Attendance Flagged" isException={true} />
              <Arrow />
              <Node title="Admin Review" isException={true} />
              <Arrow />
              <Node title="Manual Correction" isException={true} />
              <Arrow />
              <Node title="Audit Log Created" />
              <Arrow />
              <Node title="Invoice Released" />
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
