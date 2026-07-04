// All phase content extracted from selma_platform_flow_v2.html

export const phasesV2 = [
  // ─── PHASE 1 — CONTRACT ──────────────────────────────────────────────────
  {
    id: 'p1',
    num: 'Phase 1',
    title: 'Contract setup with Selma',
    sub: '[V2 UPDATE: Added Direct PDF Download Endpoint]. Before any shift can ever be posted, both the hospital and every nursing home it will work with must sign a service contract with Selma. This phase is manual — handled by Selma\'s ops team.',
    tags: [{ label: 'Legal — Germany', cls: 'ptag-contract' }],
    contractBox: {
      title: 'Contract setup with Selma',
      body: 'The contract is the legal foundation. It defines rates, billing cycles, cancellation penalties, and the Data Processing Agreement (DPA) required under GDPR Article 28. No platform access is granted until the contract is fully countersigned by Selma.'
    },
    lanes: [
      {
        type: 'hospital',
        label: 'Hospital',
        steps: [
          { h: 'Initial enquiry to Selma', p: 'Hospital contacts Selma expressing interest. Sales or ops team at Selma initiates the process.' },
          { h: 'Reviews contract terms', p: 'Hospital agrees to the rate structure and payment terms. Signs the DPA as a data recipient. Returns signed contract to Selma.' },
          { h: 'Awaiting Selma approval', p: 'Account locked — cannot post jobs until Selma has verified and approved the documents.' },
          { h: 'Account approved — platform live', p: 'Hospital portal access granted. Can post jobs immediately.' },
        ],
      },
      {
        type: 'home',
        label: 'Nursing home',
        steps: [
          { h: 'Contacted by Selma (or self-initiated)', p: 'Selma reaches out or the home applies to join. Documents requested.' },
          { h: 'Submits required documents', p: 'Betriebserlaubnis, AÜG licence (with expiry date), liability insurance.' },
          { h: 'Selma countersigns', p: 'Once documents are verified, Selma countersigns the home\'s contract.' },
          { h: 'Receives portal access link', p: 'Email from Selma with a unique setup link — sent only after contract is countersigned.' },
        ],
      },
      {
        type: 'nurse',
        label: 'Nurse',
        steps: [
          { h: 'Not involved yet', p: 'Nurses are onboarded in Phase 2 — after their nursing home\'s contract is confirmed.', empty: true },
        ],
      },
      {
        type: 'selma',
        label: 'Selma — ops team',
        steps: [
          { h: 'Issues contract to hospital', p: 'Standard service agreement covering rates, billing cycles, cancellation penalties, and DPA clauses.' },
          { h: 'Issues DPA to both parties', p: 'As required by GDPR Article 28. Selma acts as data processor; hospitals and nursing homes are data controllers.' },
          { h: 'Verifies nursing home documents', p: 'AÜG licence validity, insurance coverage, and Betriebserlaubnis checked manually.' },
          { h: 'Sets commission rate, billing cycle, penalty thresholds, and notification preferences for this client before onboarding begins.', p: '' },
          { h: 'Dashboard flags upcoming renewals 30 and 60 days in advance. Account can be blocked if documents lapse.', p: '' },
          { h: 'If hospital withdraws before going live', p: 'No penalty at this stage — the contract has not yet been activated. Selma admin notes the withdrawal.', flag: { type: 'rule', label: 'If hospital withdraws before going live' }, before: true },
        ],
      },
    ],
  },

  // ─── PHASE 2 — ONBOARDING ────────────────────────────────────────────────
  {
    id: 'p2',
    num: 'Phase 2',
    title: 'Onboarding & account setup',
    sub: 'Contract signed — now everyone gets their platform accounts. Selma verifies documents, approves accounts, and nurses are registered by their nursing home before getting their own app access.',
    lanes: [
      {
        type: 'hospital',
        label: 'Hospital',
        steps: [
          { h: 'Receives portal login credentials', p: 'Sent only after contract countersigning.' },
          { h: 'Sets up hospital portal', p: 'Adds wards, shift types, and contact preferences. Can now post jobs.' },
        ],
      },
      {
        type: 'home',
        label: 'Nursing home',
        steps: [
          { h: 'Sets up nursing home portal login and contact preferences.', p: '' },
          { h: 'Registers each nurse', p: 'Creates each nurse profile: full name, unique platform ID, specialisation, phone number. Nurse receives invite link to set their own password.' },
        ],
      },
      {
        type: 'nurse',
        label: 'Nurse',
        steps: [
          { h: 'Receives invite link', p: 'Email from Selma with a unique setup link — sent only after contract is countersigned.' },
          { h: 'Sets own password', p: 'Downloads the Selma nurse app. Logs in with their platform ID.' },
          { h: 'Can see assigned shifts. "Check In" button generates their QR on demand. Navigation links to hospitals are live.', p: '' },
        ],
      },
      {
        type: 'selma',
        label: 'Selma platform',
        steps: [
          { h: 'Generates unique platform IDs', p: 'One per nurse — used in QR codes and all audit records.' },
          { h: 'Activates portal accounts', p: 'Hospital and nursing home portals go live. Nurse app access granted when nursing home completes registration.' },
          { h: 'Document expiry tracking begins', p: 'AÜG licence and insurance certificates are tracked. Alerts fire 30 and 60 days before expiry.' },
        ],
      },
    ],
  },

  // ─── PHASE 3 — JOB POSTING ───────────────────────────────────────────────
  {
    id: 'p3',
    num: 'Phase 3',
    title: 'Job posting & matching trigger',
    sub: 'Hospital posts a shift. The platform instantly runs the matching algorithm — filtering by qualification, ranking by proximity and rating — and presents the top 3 nursing homes to the hospital.',
    tags: [{ label: 'New shift posting', cls: 'ptag-new' }],
    lanes: [
      {
        type: 'hospital',
        label: 'Hospital',
        steps: [
          { h: 'Hospital posts a job', p: 'Ward, shift type (day / night / weekend), start and end datetime, headcount required, specialisation, urgency flag.' },
          { h: 'Optional: request specific nurse', p: 'Hospital can flag a preferred nurse by name or ID — subject to ArbZG eligibility check.' },
          { h: 'Post published', p: 'Matching engine runs immediately.' },
          { h: 'Sees top-3 nursing homes returned', p: 'Each card shows home name, distance, rating, available nurse count. Hospital picks one.' },
        ],
      },
      {
        type: 'home',
        label: 'Nursing home',
        steps: [
          { h: 'Not involved yet', p: 'Waiting for a notification from the platform.', empty: true },
          { h: 'Receives job notification', p: 'Email and push alert — 24/7 if the urgency flag is set.' },
        ],
      },
      {
        type: 'nurse',
        label: 'Nurse',
        steps: [
          { h: 'Not involved yet', p: 'Assignment only happens after a home accepts.', empty: true },
        ],
      },
      {
        type: 'selma',
        label: 'Selma platform — matching engine',
        steps: [
          { h: 'Find all approved homes in Germany', p: 'Only active, contract-holding homes with verified documents.' },
          { h: 'Filter by specialisation', p: 'Only homes with nurses matching the required qualification.' },
          { h: 'Rank by proximity + rating', p: 'Closer and better-rated homes rank higher.' },
          { h: 'Return top 3 to hospital', p: 'If fewer than 3 are available, the radius expands and the hospital is told.' },
          { h: 'Log posting timestamp', p: 'Immutable record of when the job went live.' },
        ],
      },
    ],
  },

  // ─── PHASE 4 — MATCHING & ACCEPTANCE ─────────────────────────────────────
  {
    id: 'p4',
    num: 'Phase 4',
    title: 'Matching, acceptance & cancellation',
    sub: 'The hospital selects from the top 3. The chosen home accepts and assigns nurses. From this point, cancellations have financial consequences for all parties.',
    tags: [{ label: 'Key cancellation thresholds apply here', cls: 'ptag-cancel' }],
    cancelBox: {
      title: 'Cancellation rules — after acceptance',
      items: [
        '<strong>Hospital cancels &gt;24 hrs before shift:</strong> Penalty fee applies (defined in contract). Fee goes to nursing home to compensate for reserved nurse time.',
        '<strong>Hospital cancels &lt;24 hrs before shift:</strong> Higher penalty. Nursing home receives a larger compensation amount. Selma retains a processing fee.',
        '<strong>Nursing home withdraws after accepting:</strong> Home is liable for a breach penalty. Hospital is auto-offered the next available home in the list. Selma admin is alerted.',
        '<strong>Individual nurse withdraws after assignment:</strong> Nursing home must replace the nurse immediately or notify the hospital within 2 hours. If unable to replace, home is liable for the shortfall.',
      ],
    },
    lanes: [
      {
        type: 'hospital',
        label: 'Hospital',
        steps: [
          { h: 'Sees top-3 nursing homes', p: 'Each card shows name, distance, rating, and available nurse count for this shift.' },
          { h: 'Selects preferred home', p: 'Taps to confirm — can view the home\'s profile first.' },
          { h: 'Job sent to chosen home', p: 'Acceptance countdown starts — e.g. 2 hours.' },
          { flag: { type: 'rule', label: 'If home doesn\'t accept in time' } },
          { h: 'System auto-escalates to next home', p: 'Moves down the top-3 list automatically.' },
          { flag: { type: 'cancel', label: 'Cancellation after acceptance' } },
          { h: 'Penalty is calculated and logged', p: 'Contract penalty terms apply. Invoice is adjusted. Nursing home is compensated per the agreed rate.' },
        ],
      },
      {
        type: 'home',
        label: 'Nursing home',
        steps: [
          { h: 'Receives job offer', p: 'Shift details and hospital info shown in the portal.' },
          { flag: { type: 'rule', label: 'ArbZG check fires automatically' } },
          { h: 'System checks nurse eligibility', p: 'Each nurse checked against the 11-hour rest rule and double-booking before they can be assigned.' },
          { h: 'Admin assigns nurses', p: 'Picks eligible nurses from the list — names confirmed to the hospital.' },
          { h: 'Accepts the job', p: 'Nurses notified via push immediately.' },
          { flag: { type: 'cancel', label: 'If home declines' } },
          { h: 'Job moves to next home', p: 'No penalty for declining at this stage — only acceptance and then cancellation triggers penalties.' },
          { flag: { type: 'cancel', label: 'If home cancels after accepting' } },
          { h: 'Breach penalty applied', p: 'Selma admin is alerted. Hospital is offered the next available home. Penalty is deducted from the home\'s next payout.' },
        ],
      },
      {
        type: 'nurse',
        label: 'Nurse',
        steps: [
          { h: 'Not involved in selection', p: 'Nursing home admin decides who goes.', empty: true },
          { h: 'Push notification received', p: '"New shift assigned — St. Mary\'s Hospital, 14 Jun, 07:00–15:00"' },
          { h: 'Shift appears in dashboard', p: 'Status: Assigned. Hospital address and directions link visible.' },
          { flag: { type: 'cancel', label: 'If nurse cannot attend' } },
          { h: 'Must notify nursing home immediately', p: 'Nurse contacts their nursing home admin directly — not through the app. Home is responsible for finding a replacement.' },
        ],
      },
      {
        type: 'selma',
        label: 'Selma platform',
        steps: [
          { h: 'Run ArbZG 11-hour rest check', p: 'Per nurse, before any assignment can be confirmed.' },
          { h: 'Block double-booking across homes', p: 'Checks nurse isn\'t already assigned elsewhere at the same time.' },
          { h: 'Start acceptance countdown', p: 'Tracks the time-limited window for the chosen home.' },
          { h: 'Auto-escalate on timeout', p: 'Moves to the next home in the list.' },
          { h: 'Log acceptance + cancellation events', p: 'Every event is immutably recorded with a timestamp for audit and penalty calculation.' },
          { h: 'Calculate and apply penalties', p: 'Penalty amounts are derived from the contract terms on file. Applied automatically to the relevant billing cycle.' },
        ],
      },
    ],
  },

  // ─── PHASE 5 — PRE-SHIFT ─────────────────────────────────────────────────
  {
    id: 'p5',
    num: 'Phase 5',
    title: 'Pre-shift preparation',
    sub: 'The 24 hours before the shift. Reminders go out, the dynamic QR code is pre-generated by Selma (ready to appear in the nurse\'s app at check-in time), and everyone knows exactly what to expect. Late cancellations at this stage carry the highest penalties.',
    cancelBox: {
      title: 'Late cancellation — within 24 hours of shift start',
      items: [
        'Any cancellation by the hospital within 24 hours triggers the maximum penalty rate defined in the contract.',
        'Nursing home cancellation within 24 hours is treated as a serious breach — Selma admin is alerted and the home\'s matching ranking is temporarily reduced.',
        'If a nurse is a no-show without notice, the home is liable as if they had cancelled.',
      ],
    },
    lanes: [
      {
        type: 'hospital',
        label: 'Hospital',
        steps: [
          { h: 'Knows who is arriving', p: 'Hospital portal shows confirmed nurse names, count, and nursing home for this shift. No QR to display — the nurse carries the QR on their app.' },
          { h: '24-hour reminder notification', p: 'Shift confirmation sent by the platform.' },
        ],
      },
      {
        type: 'home',
        label: 'Nursing home',
        steps: [
          { h: '24-hour reminder sent', p: 'Covers all assigned nurses for this shift.' },
          { h: 'Last chance to cancel — high penalty', p: 'If the home must cancel at this stage, Selma admin is immediately notified and the maximum penalty is applied.' },
          { h: 'No further action needed', p: 'Nurses travel to the hospital independently.' },
        ],
      },
      {
        type: 'nurse',
        label: 'Nurse',
        steps: [
          { h: '24-hour push notification', p: '"Reminder: shift at St. Mary\'s Hospital tomorrow at 07:00."' },
          { h: '2-hour push notification', p: '"Your shift starts in 2 hours. Don\'t forget to check in on arrival."' },
          { h: 'Opens shift in app', p: 'Sees hospital name, ward, shift time, and a "Get directions" button that opens the device\'s native maps app.' },
          { h: 'Travels to hospital', p: 'No in-app GPS tracking during travel. The app is 100% online — nurse must have a connection to check in.' },
        ],
      },
      {
        type: 'selma',
        label: 'Selma platform',
        steps: [
          { h: 'Pre-generate QR payload for this shift', p: 'Selma prepares the QR payload (nurse ID + shift ID + hospital ID + valid time window) ready for the nurse\'s app to render on demand at check-in. The code is not shown until the nurse taps "Check In".' },
          { h: 'Send 24-hr and 2-hr reminders', p: 'To nurses, hospital admin, and nursing home admin.' },
          { h: 'Monitor for late cancellations', p: 'If cancellation is received within 24 hours, maximum penalty is auto-calculated and applied from the contract on file.' },
        ],
      },
    ],
  },

  // ─── PHASE 6 — CHECK-IN ──────────────────────────────────────────────────
  {
    id: 'p6',
    num: 'Phase 6',
    title: 'Check-in at hospital',
    sub: 'The most critical moment of the whole flow. The nurse presents their Selma QR on their phone — hospital reception validates it. Every failure path — dead battery, wrong code, outside time window — has a defined resolution. The check-in timestamp is the foundation of the billing record.',
    contractBox: {
      title: 'How the QR check-in actually works',
      body: 'The nurse opens the Selma app and taps "Check In" — the app displays a dynamic QR code unique to that nurse and that shift. The nurse shows this QR code to the hospital reception or ward manager, who scans or reads it using the hospital portal. The nurse never scans anything — the QR lives on the nurse\'s phone and is presented to the hospital. This QR is generated by the Selma platform (not by the nurse, not by the hospital).',
    },
    lanes: [
      {
        type: 'hospital',
        label: 'Hospital — reception / ward manager',
        steps: [
          { h: 'Receives arriving nurse', p: 'Nurse arrives at reception and opens the Selma app to show their QR code. Reception staff open the hospital portal to scan or enter the code.' },
          { h: 'Scans nurse\'s QR code', p: 'Hospital portal camera (or manual code entry) reads the QR displayed on the nurse\'s phone. The platform validates it instantly.' },
          { h: 'Receives check-in confirmation', p: '"Nurse Anna K. checked in — 07:02" shown instantly in the portal. No further action needed.' },
          { flag: { type: 'rule', label: 'If nurse not checked in by X mins past start' } },
          { h: 'Alert fires to all parties', p: 'Hospital admin, nursing home admin, and Selma all receive an alert simultaneously.' },
          { flag: { type: 'rule', label: 'Manual punch-in fallback' } },
          { h: 'Hospital admin can punch in manually', p: 'Used if the nurse\'s phone is dead or broken. Admin enters the nurse\'s platform ID manually. Creates a flagged audit record — both hospital and nursing home must confirm this entry.' },
        ],
      },
      {
        type: 'home',
        label: 'Nursing home',
        steps: [
          { h: 'Check-in confirmation received', p: 'Push notification the moment the nurse\'s QR is successfully validated by hospital reception.' },
          { h: 'Alert if no check-in', p: 'Also notified if the nurse fails to check in within the threshold time. Home is expected to contact the nurse immediately.' },
        ],
      },
      {
        type: 'nurse',
        label: 'Nurse',
        steps: [
          { h: 'Opens assigned shift in app', p: 'Taps "Check In" — the app generates and displays a dynamic QR code unique to this nurse and this shift.' },
          { h: 'Shows QR to hospital reception', p: 'Nurse holds up their phone screen. Hospital reception scans or reads the QR using the hospital portal — the nurse does not scan anything.' },
          { h: 'Validation passes', p: 'Correct nurse · Correct shift · Correct hospital · Within valid time window · Not already checked in.' },
          { flag: { type: 'rule', label: 'If validation fails' } },
          { h: 'Clear error shown in portal', p: 'Hospital reception sees "QR does not match this shift" or "Outside valid time window." Nurse is told to contact their nursing home admin — do not attempt manual override without authorisation.' },
          { h: 'Shift moves to ACTIVE', p: 'Check-in time is locked. A shift timer starts in the nurse\'s app. The nurse is now on the clock.' },
        ],
      },
      {
        type: 'selma',
        label: 'Selma platform — QR generation & validation',
        steps: [
          { h: 'Generates nurse QR on demand', p: 'When the nurse taps "Check In", the platform generates a dynamic QR code embedding: nurse ID · shift ID · hospital ID · valid time window. This code lives only in the nurse\'s app.' },
          { h: 'QR decoded by hospital portal', p: 'Hospital portal reads the code submitted by reception and decodes the embedded identifiers.' },
          { h: 'Match nurse to shift', p: 'Confirms the nurse shown in the QR is assigned to this exact shift at this hospital.' },
          { h: 'Validate time window', p: 'QR must be presented within the valid window (15 mins before start by default). Expired codes are rejected automatically.' },
          { h: 'Check for duplicates', p: 'Prevents the same nurse checking in twice to the same shift.' },
          { h: 'Lock check-in timestamp', p: 'Written to the immutable shift record. This is the billing start time.' },
          { h: 'Notify all parties', p: 'Hospital, nursing home, and nurse all receive real-time confirmation.' },
        ],
      },
    ],
  },

  // ─── PHASE 7 — ACTIVE SHIFT ──────────────────────────────────────────────
  {
    id: 'p7',
    num: 'Phase 7',
    title: 'Active shift & overtime',
    sub: 'The nurse is on the floor. The platform monitors time, compliance rules, and handles overtime carefully — extra hours require digital hospital approval before they count toward billing.',
    tags: [
      { label: 'Overtime handling', cls: 'ptag-overtime' },
      { label: 'Early termination scenario', cls: 'ptag-cancel' },
    ],
    overtimeBox: {
      title: 'How overtime is handled',
      items: [
        '[V2 UPDATE: OVERTIME COMPLIANCE] Strict validation added. Payroll processing is hard-blocked if overtime lacks explicit hospital approval.',
        'If the shift is still active 30 minutes past the scheduled end time, the hospital portal shows an "Approve Overtime" prompt.',
        'Hospital admin must digitally approve or reject the extra time before the nurse can check out.',
        'If approved: extra hours are added to the billing record at the standard hourly rate (no premium rate confirmed).',
        'If rejected: nurse is expected to check out immediately. Any extra time not approved is not billed.',
        'ArbZG daily maximum (10 hours including overtime) is enforced — if approval would breach 10 hours, the system blocks it and alerts Selma admin.',
        'If the hospital does not respond to the overtime prompt within 1 hour, the system auto-alerts Selma admin to resolve.',
      ],
    },
    lanes: [
      {
        type: 'hospital',
        label: 'Hospital',
        steps: [
          { h: 'Live deployment view', p: 'Portal shows each nurse as "Active" with a running timer for their shift.' },
          { flag: { type: 'overtime', label: 'Overtime scenario' } },
          { h: 'Receives overtime approval prompt', p: '30 minutes past scheduled end time — hospital admin must tap "Approve" or "End Shift Now."' },
          { h: 'Approves or rejects extra time', p: 'Approval adds the extra hours to billing. Rejection ends the shift record — nurse must check out immediately.' },
          { flag: { type: 'cancel', label: 'Early termination' } },
          { h: 'Can end shift early', p: 'If the ward no longer needs the nurse, hospital admin can trigger early checkout from the portal. Nurse is notified. Billing stops at that time.' },
        ],
      },
      {
        type: 'home',
        label: 'Nursing home',
        steps: [
          { h: 'Nurse shown as "On shift"', p: 'Nursing home portal shows the active deployment status and elapsed time.' },
          { h: 'Notified of overtime', p: 'If the hospital approves overtime, the nursing home is notified that the shift will run longer than planned.' },
          { h: 'No action required otherwise', p: 'Unless an emergency or alert fires.', empty: true },
        ],
      },
      {
        type: 'nurse',
        label: 'Nurse',
        steps: [
          { h: 'App shows shift as ACTIVE', p: 'Running timer visible. "Check Out" is shown but not active until the shift end window opens.' },
          { h: 'ArbZG break reminder', p: 'Push at the 6-hour mark: "You are due a 30-min break as required by ArbZG."' },
          { h: 'Max hours warning', p: 'Push notification when approaching the 10-hour daily maximum.' },
          { flag: { type: 'overtime', label: 'If overtime is approved' } },
          { h: 'Receives notification', p: '"The hospital has approved your shift extension. You may continue working and check out when finished."' },
          { flag: { type: 'cancel', label: 'If shift ends early' } },
          { h: 'Receives early end notification', p: '"The hospital has ended this shift early. Please check out now." Check-out button becomes active immediately.' },
        ],
      },
      {
        type: 'selma',
        label: 'Selma platform — live monitoring',
        steps: [
          { h: 'Track shift duration in real time', p: 'Backend timer running continuously from check-in timestamp.' },
          { h: 'Trigger ArbZG break alert at 6 hours', p: 'Automatic push to nurse at the 6-hour elapsed mark.' },
          { h: 'Trigger overtime prompt at shift end', p: 'If still active 30 mins after scheduled end — hospital portal gets the approval prompt.' },
          { h: 'Enforce 10-hour daily maximum', p: 'Blocks any overtime approval that would push the nurse past 10 hours total on that calendar day.' },
          { h: 'Auto-alert if no checkout after shift', p: 'If no checkout is recorded within a configurable window past expected end, Selma admin is alerted.' },
          { h: 'Log every state change immutably', p: 'Every event timestamped and recorded for ArbZG compliance audit trail.' },
        ],
      },
    ],
  },

  // ─── PHASE 8 — CHECK-OUT ─────────────────────────────────────────────────
  {
    id: 'p8',
    num: 'Phase 8',
    title: 'Check-out & shift lock',
    sub: 'Shift ends. Legal break deductions are applied automatically. The record locks permanently. Payroll data is generated and pushed to the payment engine.',
    lanes: [
      {
        type: 'hospital',
        label: 'Hospital',
        steps: [
          { h: 'Receives checkout notification', p: '"Anna K. checked out — 15:04. Shift: 07:02–15:04 (7h 32m billable after break deduction)."' },
          { h: 'Shift locked in portal', p: 'Read-only — no edits possible. Dispute window opens for 48 hours.' },
          { flag: { type: 'rule', label: 'If hours look wrong' } },
          { h: 'Raise a dispute within 48 hours', p: 'Hospital flags the shift to Selma admin with a note. Record stays locked while dispute is reviewed.' },
        ],
      },
      {
        type: 'home',
        label: 'Nursing home',
        steps: [
          { h: 'Checkout confirmed', p: 'Sees hours worked, ArbZG break deducted, and billable hours for this shift.' },
          { h: 'Revenue dashboard updated', p: 'This shift\'s earnings added to the projected payout for the current billing cycle.' },
          { h: 'Can raise a dispute', p: 'If the recorded hours are wrong, the home flags it to Selma within 48 hours.' },
        ],
      },
      {
        type: 'nurse',
        label: 'Nurse',
        steps: [
          { h: 'Taps "Check Out"', p: 'App shows a checkout QR code (same mechanism as check-in). Nurse shows it to hospital reception who scans it to confirm departure — or the hospital admin confirms checkout directly from the portal.' },
          { h: 'Shift summary shown', p: 'Check-in time · Check-out time · Total raw hours · Break deducted · Billable hours. Clear and readable.' },
          { h: 'Shift moves to COMPLETED', p: 'Appears in past shifts list. Immutable. The nurse can reference this at any time.' },
        ],
      },
      {
        type: 'selma',
        label: 'Selma platform — hours calculation',
        steps: [
          { h: 'Raw hours = checkout − check-in', p: 'Base duration of the shift.' },
          { h: 'Over 6 hrs → deduct 30 min', p: 'ArbZG-mandated break deduction.' },
          { h: 'Over 9 hrs → deduct 45 min', p: 'ArbZG-mandated break deduction.' },
          { h: 'Overtime hours added if approved', p: 'Any hospital-approved overtime is included in billable total.' },
          { h: 'Billable = raw + overtime − deduction', p: 'The figure used for invoice generation and nursing home payout.' },
          { h: 'Record locked as immutable', p: 'No further edits possible by any party without Selma admin override (with audit log).' },
          { h: 'Flag manual entries for admin review', p: 'Any manual punch-in or manual checkout is highlighted in the admin dashboard.' },
          { h: 'Push payroll data to payment engine', p: 'Feeds directly into Phase 9 billing cycle.' },
        ],
      },
    ],
  },

  // ─── PHASE 9 — PAYMENT ───────────────────────────────────────────────────
  {
    id: 'p9',
    num: 'Phase 9',
    title: 'Payment cycle',
    sub: 'Selma is the only payment hub. Money flows from the hospital, through Selma, to the nursing home. Cancellation penalties and commission deductions are applied before disbursement. Nurses are paid separately by their home.',
    payflow: true,
    lanes: [
      {
        type: 'hospital',
        label: 'Hospital',
        steps: [
          { h: 'Receives invoice from Selma', p: 'Itemised by shift: nurse count × billable hours × hourly rate. Any cancellation penalties included as separate line items.' },
          { h: 'Pays Selma', p: 'Bank transfer to Selma\'s account — no direct financial contact with nursing homes.' },
          { flag: { type: 'rule', label: 'If hospital defaults on payment' } },
          { h: 'Selma absorbs the risk', p: 'Per contract terms, Selma chases the hospital. Nursing home is not exposed to the hospital\'s default.' },
          { h: 'No night or weekend premium', p: 'Same hourly rate applies to all shift types — confirmed in alignment meetings.' },
        ],
      },
      {
        type: 'home',
        label: 'Nursing home',
        steps: [
          { h: 'Revenue dashboard', p: 'Shows confirmed earnings from all completed shifts in the current billing period, projected before the payout runs.' },
          { h: 'Receives payout from Selma', p: 'Every 15 days or monthly per agreed cycle. Amount = billable hours × rate − Selma commission − any breach penalties.' },
          { flag: { type: 'cancel', label: 'If home had a cancellation penalty' } },
          { h: 'Penalty deducted from payout', p: 'Cancellation penalties (from Phase 4 or 5) are deducted before the home receives their disbursement. Itemised in payout statement.' },
          { h: 'Pays nurses independently', p: 'Home handles nurse salaries per their own employment contracts. Platform does not touch nurse pay.' },
        ],
      },
      {
        type: 'nurse',
        label: 'Nurse',
        steps: [
          { h: 'Not part of platform payment', p: 'The nurse is employed by the nursing home, who manages their salary.', empty: true },
          { h: 'Shift history as payslip reference', p: 'Past completed shifts in the app give the nurse a clear record of hours worked — the nursing home uses the same data for payroll calculation.' },
        ],
      },
      {
        type: 'selma',
        label: 'Selma — payment engine',
        steps: [
          { h: 'Aggregate all locked shift records', p: 'Pulls in every completed, immutable shift from the billing period.' },
          { h: 'Apply cancellation penalties', p: 'Both hospital penalties (paid to homes) and nursing home penalties (deducted from payouts) are calculated from contract terms.' },
          { h: 'Calculate invoice per hospital', p: 'Billable hours + any cancellation penalties received.' },
          { h: 'Receive hospital payment', p: 'Funds held before disbursing to homes.' },
          { h: 'Deduct platform commission', p: 'Selma\'s commission comes off before the home receives their payout.' },
          { h: 'Calculate payout per nursing home', p: 'Billable hours × rate − commission − any penalties the home owes.' },
          { h: 'Disburse every 15 days or monthly', p: 'Per the agreed payout cycle from the nursing home\'s contract.' },
          { h: 'Generate HGB-compliant reports', p: 'All financial records retained for 10 years per German commercial law requirements.' },
        ],
      },
    ],
  },

  // ─── PHASE 10 — RATINGS ──────────────────────────────────────────────────
  {
    id: 'p10',
    num: 'Phase 10',
    title: 'Ratings & feedback loop',
    sub: 'After every completed shift, the hospital and nursing home rate each other. All ratings are private — only Selma sees them. They feed directly back into who gets matched first next time.',
    lanes: [
      {
        type: 'hospital',
        label: 'Hospital',
        steps: [
          { h: 'Rates the nursing home', p: '1–5 stars across: Punctuality, Clinical skill, Communication, and Professionalism — within 48 hours of shift end.' },
          { h: 'Cannot see how they were rated', p: 'All ratings are visible to Selma admin only — hospitals do not see nursing home ratings of them.' },
          { h: 'Can flag a dispute', p: 'Raise a complaint to Selma within 48 hours if there was a serious problem with the deployment.' },
        ],
      },
      {
        type: 'home',
        label: 'Nursing home',
        steps: [
          { h: 'Rates the hospital', p: '1–5 stars across: Payment speed, Communication, Ward environment — within 48 hours of shift end.' },
          { h: 'Cannot see how they were rated', p: 'Only Selma admin sees all ratings from both directions.' },
          { h: 'Can raise a dispute', p: 'If a rating seems unfair or retaliatory, submits to Selma admin for manual review.' },
        ],
      },
      {
        type: 'nurse',
        label: 'Nurse',
        steps: [
          { h: 'Does not see their own rating', p: 'Confirmed — ratings are Selma-only. Nurses are never shown scores or hospital comments.', empty: true },
          { h: 'Receives Selma feedback separately', p: 'Selma sends individual feedback outside the app — via email or a separate feedback form.' },
          { h: 'Shift record is immutable', p: 'Nurse sees completed shifts in history but no rating data is shown anywhere in the app.' },
        ],
      },
      {
        type: 'selma',
        label: 'Selma admin',
        steps: [
          { h: 'Receives all ratings — both directions', p: 'Full visibility across every shift and every party.' },
          { h: 'Reviews disputes manually', p: 'Can investigate flagged or contested ratings. Can override or remove ratings with an audit log entry.' },
          { h: 'Low-rated homes deprioritised', p: 'Consistently low scores move a nursing home down in the top-3 matching algorithm.' },
          { h: 'Repeated 1-star → flag or block', p: 'Triggers a formal review and may result in temporary account suspension.' },
          { h: 'Sends feedback to nurses independently', p: 'Outside the platform\'s normal automated flow — Selma\'s team handles this manually.' },
        ],
      },
    ],
  },
];

// ─── NAV LINKS ────────────────────────────────────────────────────────────────
export const navLinks = [
  { href: '#p1', label: '1 · Contract' },
  { href: '#p2', label: '2 · Onboarding' },
  { href: '#p3', label: '3 · Job post' },
  { href: '#p4', label: '4 · Matching' },
  { href: '#p5', label: '5 · Pre-shift' },
  { href: '#p6', label: '6 · Check-in' },
  { href: '#p7', label: '7 · Active shift' },
  { href: '#p8', label: '8 · Check-out' },
  { href: '#p9', label: '9 · Payment' },
  { href: '#p10', label: '10 · Ratings' },
  { href: '#pq', label: 'Open Qs' },
];

// ─── V2 QUESTIONS DATA ───────────────────────────────────────────────────────
export const questionGroupsV2 = [
  {
    title: 'Matching & Fallback Logic',
    questions: [
      {
        id: 'V2.01',
        text: 'If all Top 3 Leasing Companies reject the request, what should happen? Options: (a) Automatically search the next 3 companies, (b) Increase the search radius, (c) Notify Selma for manual intervention, (d) Inform the hospital that no provider is available.',
        priority: 'high',
        isNew: true,
        tags: ['Blocks: Matching engine fallback'],
      },
      {
        id: 'V2.03',
        text: 'After a hospital selects a leasing company, how long does the leasing company have to accept the request? For example: 30 minutes, 1 hour, or 2 hours.',
        priority: 'high',
        isNew: true,
        tags: ['Blocks: Acceptance window'],
      },
    ],
  },
  {
    title: 'Nurse Replacement & Cancellation',
    questions: [
      {
        id: 'V2.02',
        text: 'If an assigned nurse cancels, how much time does the leasing company have to provide a replacement? For example: Immediately, Within 1 hour, Within 2 hours, or Before shift start.',
        priority: 'high',
        isNew: true,
        tags: ['Blocks: Replacement SLA'],
      },
    ],
  },
  {
    title: 'Billing, Overtime & Invoicing',
    questions: [
      {
        id: 'V2.04',
        text: 'Hospital Ends Shift Early — the notes say the hospital pays for planned shifts. Please confirm: Does the leasing company receive payment for the full planned shift even if the nurse worked fewer hours?',
        priority: 'high',
        isNew: true,
        tags: ['Blocks: Early termination billing'],
      },
      {
        id: 'V2.05',
        text: 'Overtime Calculation — the notes mention documenting and approving overtime. Please confirm: Is overtime paid at the normal hourly rate, or should a different rate ever apply?',
        priority: 'high',
        isNew: true,
        tags: ['Blocks: Rate calculation'],
      },
      {
        id: 'V2.06',
        text: 'Invoice Schedule — the notes mention monthly billing. Please confirm: Are invoices generated automatically at the end of every month, or can Selma manually generate invoices whenever needed?',
        priority: 'high',
        isNew: true,
        tags: ['Blocks: Invoicing engine'],
      },
      {
        id: 'V2.07',
        text: 'Commission Flexibility — the notes say Selma receives 5%. Please confirm: Is 5% fixed for every customer, or can Selma configure a different percentage for specific hospitals or leasing companies?',
        priority: 'high',
        isNew: true,
        tags: ['Blocks: Commission config'],
      },
    ],
  },
  {
    title: 'Ratings, Doctor Module & Permissions',
    questions: [
      {
        id: 'V2.08',
        text: 'Should ratings affect matching? For example: Lower-rated leasing companies appear lower in search results? Or are ratings only visible to Selma and not used by the matching algorithm?',
        priority: 'med',
        isNew: true,
        tags: ['Blocks: Matching algorithm'],
      },
      {
        id: 'V2.09',
        text: 'Doctor Module — the notes mention future support for doctors. Should the platform be designed now so that nurses and doctors share the same workflow, or will doctors have a completely separate workflow later?',
        priority: 'med',
        isNew: true,
        tags: ['Blocks: Architecture scope'],
      },
      {
        id: 'V2.10',
        text: 'Manual Exceptions — some scenarios mention manual handling. Please confirm: Who is allowed to perform manual actions? Options: (a) Selma Admin only, (b) Hospital Admin, (c) Leasing Company Admin.',
        priority: 'high',
        isNew: true,
        tags: ['Blocks: Role permissions'],
      },
    ],
  },
  {
    title: 'No-Show, Shift Conflicts & Disputes',
    questions: [
      {
        id: 'V2.11',
        text: 'No-Show vs. Cancellation — A nurse cancelling is covered. But what happens if a nurse simply doesn\'t show up — no cancellation, no communication? Is the penalty different from a late cancellation? Does the system auto-trigger a replacement search, and after how many minutes of no check-in?',
        priority: 'high',
        isNew: true,
        tags: ['Blocks: No-show flow'],
      },
      {
        id: 'V2.12',
        text: 'Concurrent Shift Conflicts — What prevents a leasing company from assigning the same nurse to two overlapping shifts at different hospitals? Should the platform enforce this at the system level, or is it the leasing company\'s responsibility?',
        priority: 'high',
        isNew: true,
        tags: ['Blocks: Scheduling engine'],
      },
      {
        id: 'V2.13',
        text: 'Nurse Profile Visibility — Can a hospital see the nurse\'s name, qualifications, and photo before accepting the match — or is it anonymous until the leasing company is selected? This has both UX and GDPR implications.',
        priority: 'high',
        isNew: true,
        tags: ['Blocks: Matching UX + GDPR'],
      },
      {
        id: 'V2.15',
        text: 'Dispute Resolution — If the hospital says the nurse worked 6 hours but the leasing company claims 8 hours, who arbitrates? Does QR check-in/check-out timestamp serve as the single source of truth, or can either party dispute it?',
        priority: 'high',
        isNew: true,
        tags: ['Blocks: Dispute workflow'],
      },
      {
        id: 'V2.16',
        text: 'Blacklisting — Can a hospital permanently block a specific nurse or leasing company from future matching? Can a leasing company refuse to serve a specific hospital? Where does this data live — and is Selma notified?',
        priority: 'med',
        isNew: true,
        tags: ['Blocks: Matching exclusions'],
      },
    ],
  },
  {
    title: 'Compliance, Liability & Insurance',
    questions: [
      {
        id: 'V2.14',
        text: 'Break Time Compliance (ArbZG §4) — ArbZG mandates 30-minute breaks after 6 hours and 45-minute breaks after 9 hours. Is break time tracked by the platform? Is it deducted from billing automatically, or is it included in the paid shift time?',
        priority: 'high',
        isNew: true,
        tags: ['Blocks: ArbZG break tracking'],
      },
      {
        id: 'V2.20',
        text: 'Insurance Liability During Active Shift — If a nurse is injured while working at a hospital, whose insurance covers it — the hospital\'s, the leasing company\'s, or Selma\'s? Does the platform need to verify insurance documents before allowing a shift to begin?',
        priority: 'high',
        isNew: true,
        tags: ['Blocks: Insurance verification'],
      },
    ],
  },
  {
    title: 'Platform Architecture & Data',
    questions: [
      {
        id: 'V2.17',
        text: 'Payment Failure / Dunning — If a hospital doesn\'t pay their invoice on time, what happens? Is there an automated dunning process (reminder → warning → suspension)? At what point does Selma freeze the hospital\'s ability to post new shifts?',
        priority: 'high',
        isNew: true,
        tags: ['Blocks: Dunning engine'],
      },
      {
        id: 'V2.18',
        text: 'Recurring / Multi-Day Bookings — Can a hospital book the same nurse for a recurring weekly shift (e.g., every Monday for 8 weeks)? Or is every single shift a standalone booking? This fundamentally changes the matching and billing architecture.',
        priority: 'high',
        isNew: true,
        tags: ['Blocks: Booking model'],
      },
      {
        id: 'V2.19',
        text: 'Data Retention & Right to Deletion — Under GDPR, how long is shift history, personal data, and billing records retained? If a nurse or leasing company leaves the platform, what gets deleted vs. what must be kept for tax/legal compliance?',
        priority: 'high',
        isNew: true,
        tags: ['Blocks: GDPR data lifecycle'],
      },
    ],
  },
];
