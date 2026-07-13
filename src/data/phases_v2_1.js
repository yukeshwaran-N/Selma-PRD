export const phasesV2_1 = [
  {
    id: 'f1',
    num: 'Feature 1',
    title: 'Shift Lifecycle',
    sub: 'Every shift moves through 7 defined states — from request creation to completion or cancellation.',
    lanes: [
      {
        type: 'hospital',
        label: 'Hospital',
        steps: [
          { h: 'Applied', p: 'Request submitted by hospital; matching engine runs and top 3 agencies are notified; hospital can still edit or cancel.' },
          { h: 'Accepted', p: 'One agency accepts; competing agencies are notified the slot is filled; request is now locked for hospital edits.' }
        ]
      },
      {
        type: 'home',
        label: 'Leasing Company',
        steps: [
          { h: 'Pending', p: 'Leasing company reviews the pending shift and applies to fulfill it.' },
          { h: 'Assigned', p: 'Accepting agency assigns a specific nurse; nurse is notified; hospital can see the nurse profile.' }
        ]
      },
      {
        type: 'nurse',
        label: 'Nurse',
        steps: [
          { h: 'Confirmed', p: 'Nurse explicitly accepts; assignment is fully locked; 24-hour reminder sent to nurse and hospital.' },
          { h: 'In Progress', p: 'Nurse scans emailed QR code via phone camera at shift start; check-in timestamp recorded; shift is live.' },
          { h: 'Completed', p: 'Nurse scans emailed QR code via phone camera at shift end; hours calculated; record locked; invoice generation triggered.' }
        ]
      },
      {
        type: 'selma',
        label: 'Platform',
        steps: [
          { h: 'Cancelled', p: 'Any eligible actor cancels before Completed; reason recorded; all parties notified; record preserved.' }
        ]
      }
    ]
  },
  {
    id: 'f2',
    num: 'Feature 2',
    title: 'User Management',
    sub: 'Registration, login, password reset, and role-based access for all actors.',
    lanes: [
      {
        type: 'selma',
        label: 'Selma Admin',
        steps: [
          { h: 'Admin User Management', p: 'Selma Admin can create, edit, deactivate, or delete any account across all roles; deactivated accounts lose access immediately while historical data is retained.' },
          { h: 'Role-Based Access Control', p: 'Four roles (Hospital, Leasing Company, Nurse, Admin) with strictly scoped permissions enforced at the API Gateway level; roles can only be changed by Admin.' }
        ]
      },
      {
        type: 'hospital',
        label: 'All Actors',
        steps: [
          { h: 'Login', p: 'All actors log in via email and password through AWS Cognito; on success they are directed to their role-specific dashboard.' },
          { h: 'Registration', p: 'Hospitals and agencies are registered by Selma Admin; nurses are added by their agency — each creates a Cognito account with a welcome setup email.' },
          { h: 'Password Reset', p: 'Any user can trigger a secure reset link via Cognito\'s built-in flow, valid for 30 minutes.' },
          { h: 'Profile Management', p: 'Each actor can edit their own name, contact info, and role-specific details; profile photo upload is supported.' }
        ]
      }
    ]
  },
  {
    id: 'f3',
    num: 'Feature 3',
    title: 'Hospital Portal',
    sub: 'Hospital staff can create, edit, cancel requests and view status/history reliably.',
    lanes: [
      {
        type: 'hospital',
        label: 'Hospital',
        steps: [
          { h: 'Dashboard', p: 'Landing page shows open requests, today\'s shifts, recent completions, and a quick-create shortcut; each confirmed shift shows the attendance status and email triggers.' },
          { h: 'Create Shift Request', p: 'Hospital staff submit a request specifying ward, specialization, date, start/end time, and notes — the request enters Pending state and triggers the matching engine immediately.' },
          { h: 'Edit Request', p: 'Requests are editable only while in Pending state; once a leasing company accepts, the request is locked and the hospital must cancel and re-submit.' },
          { h: 'Cancel Request', p: 'A hospital can cancel any request before it reaches In Progress; all assigned parties are notified and the reason is optionally recorded.' },
          { h: 'View Request Status', p: 'All requests are listed with their current lifecycle state, filterable by status, date range, and ward; clicking a request shows its full status timeline.' },
          { h: 'View Assigned Nurse', p: 'Once a nurse is assigned, the hospital sees the nurse\'s name, photo, specialization, and rating — no direct contact details are exposed.' },
          { h: 'View Shift History', p: 'All completed and cancelled shifts are searchable with full details, timestamps, agency, and a direct invoice download link.' }
        ]
      }
    ]
  },
  {
    id: 'f4',
    num: 'Feature 4',
    title: 'Leasing Company Portal',
    sub: 'Agency can accept/reject requests, assign nurses, manage nurse lists, upload documents, and view earnings.',
    lanes: [
      {
        type: 'home',
        label: 'Leasing Company',
        steps: [
          { h: 'View Incoming Requests', p: 'Matched shift requests appear in the agency\'s queue showing hospital, ward, specialization, date, and rate, sorted by shift date ascending.' },
          { h: 'Accept / Reject Request', p: 'Agencies must respond within a configurable window; accepting locks out competing agencies, rejecting may re-trigger matching to the next candidate.' },
          { h: 'Assign Nurse', p: 'After accepting, the agency picks an available, matching-specialization nurse from their roster; the nurse is notified and the shift moves to Assigned.' },
          { h: 'Manage Nurse List', p: 'Agencies can add, edit, and set nurses active/inactive; nurses with active shifts cannot be deleted.' },
          { h: 'Upload Required Documents', p: 'Agency-level compliance docs and individual nurse documents can be uploaded; Admin must verify agency docs before the account goes live.' },
          { h: 'View Earnings', p: 'A monthly earnings breakdown shows hours, rate, Selma commission, and net pay per shift, with downloadable PDF invoices per completed shift.' }
        ]
      }
    ]
  },
  {
    id: 'f5',
    num: 'Feature 5',
    title: 'Nurse Web App (Mobile Optimized)',
    sub: 'Nurse can log in, view/accept/reject shifts, upload documents, and complete web-based QR check-in/out.',
    lanes: [
      {
        type: 'nurse',
        label: 'Nurse',
        steps: [
          { h: 'Login', p: 'Nurses log in via Cognito with email/password; the app supports session persistence with secure token refresh.' },
          { h: 'View Assigned Shifts', p: 'Home screen lists upcoming shifts chronologically showing hospital, ward, date, and time; past shifts are in a separate history tab.' },
          { h: 'Accept Shift', p: 'Nurse explicitly accepts a newly assigned shift within a defined response window; acceptance moves the shift to Confirmed and updates their calendar.' },
          { h: 'Reject Shift', p: 'Nurse can reject before confirmation, which returns the shift to the agency to re-assign; a reason is optionally provided.' },
          { h: 'Profile Management', p: 'Nurse can update name, photo, contact number, and specialization; role and agency assignment are managed by the leasing company only.' },
          { h: 'Upload Documents', p: 'Nurses can upload compliance documents (PDF, JPG, PNG) directly from the app, visible to the agency and Admin for verification.' },
          { h: 'QR Web Scan (Check-In)', p: 'Nurse scans the emailed QR code using their standard phone camera at shift start, which opens a secure web-based application; a successful scan records the UTC check-in timestamp and moves the shift to In Progress.' },
          { h: 'QR Web Scan (Check-Out)', p: 'Nurse scans the emailed QR code again at shift end using their phone camera; total hours are calculated, the attendance record is locked, and invoice generation is triggered.' }
        ]
      }
    ]
  },
  {
    id: 'f6',
    num: 'Feature 6',
    title: 'Matching Engine',
    sub: 'Rule-based matching only — no advanced optimisation. Returns top 3 leasing companies.',
    lanes: [
      {
        type: 'selma',
        label: 'Matching Engine (Selma AI)',
        steps: [
          { h: 'Specialization', p: 'Only agencies with at least one available nurse matching the required specialization are considered; all others are excluded.' },
          { h: 'Availability', p: 'From the filtered set, only agencies with a nurse free during the requested date/time window are kept.' },
          { h: 'Distance', p: 'Geographic distance between agency and hospital is calculated via Leaflet; closer agencies rank higher.' },
          { h: 'Rating', p: 'Agencies are ranked by their aggregate platform rating within the same distance band; new agencies are inserted mid-rank.' },
          { h: 'Top 3 Output', p: 'The top 3 agencies are notified simultaneously; the first to accept wins — if none match, Selma Admin is alerted to intervene.' }
        ]
      }
    ]
  },
  {
    id: 'f7',
    num: 'Feature 7',
    title: 'QR Attendance (Web-Based)',
    sub: 'Web-based QR check-in/out records accurate timestamps; manual override works and is auditable.',
    lanes: [
      {
        type: 'selma',
        label: 'Platform',
        steps: [
          { h: 'QR Code Email Generation', p: 'When a shift reaches Confirmed state, the platform auto-generates a unique QR code tied to that shift ID and date. This QR code is sent via email to the hospital. It cannot be reused for another shift.' },
          { h: 'Timestamp Recording', p: 'All timestamps stored in UTC, displayed in the hospital\'s local timezone; immutable once recorded except via Admin override.' }
        ]
      },
      {
        type: 'nurse',
        label: 'Nurse',
        steps: [
          { h: 'QR Web Scan (Check-In)', p: 'Nurse scans the emailed QR code using their standard phone camera at shift start, which opens a secure web-based application; the app validates the match and records a UTC check-in timestamp server-side.' },
          { h: 'QR Web Scan (Check-Out)', p: 'Nurse scans the emailed QR code again at shift end using their phone camera; duration is calculated and the attendance record is locked, unlocking invoice generation.' }
        ]
      },
      {
        type: 'hospital',
        label: 'Selma Admin',
        steps: [
          { h: 'Manual Override by Admin', p: 'Failed or disputed scans are flagged for Admin review; every correction is logged with admin ID, values, reason, and timestamp.' }
        ]
      }
    ]
  },
  {
    id: 'f8',
    num: 'Feature 8',
    title: 'Notifications',
    sub: 'Email notifications across all key shift events.',
    lanes: [
      {
        type: 'selma',
        label: 'Email Triggers',
        steps: [
          { h: 'New Shift Request', p: 'Top 3 matched agencies notified by email with shift details and an accept/reject link.' },
          { h: 'Request Accepted', p: 'Hospital notified of acceptance; other matched agencies notified the slot is filled.' },
          { h: 'Nurse Assigned', p: 'Nurse notified with assignment details and accept/reject prompt; hospital notified and can view the nurse profile.' },
          { h: 'Shift Confirmed / Rejected', p: 'On accept: hospital and agency notified of confirmation. On reject: agency notified immediately to re-assign.' },
          { h: 'Pre-Shift Reminder', p: 'Nurse and hospital receive a reminder 24 hours before the confirmed shift start.' },
          { h: 'Shift Completed', p: 'Hospital notified of check-out; agency notified the shift is complete and invoice generated.' },
          { h: 'Cancellation', p: 'All involved actors notified immediately with the cancellation reason.' }
        ]
      }
    ]
  },
  {
    id: 'f9',
    num: 'Feature 9',
    title: 'Invoicing',
    sub: 'Auto-calculated hours/rate/commission/total, downloadable PDF.',
    lanes: [
      {
        type: 'selma',
        label: 'Platform',
        steps: [
          { h: 'Hours Worked', p: 'Total hours = check-out minus check-in (or admin-corrected values); stored as a decimal and displayed in hours/minutes.' },
          { h: 'Hourly Rate', p: 'Gross amount = hours worked × agreed hourly rate; rate is locked at acceptance and cannot change mid-shift.' },
          { h: 'Commission', p: 'Selma\'s percentage commission (set per agency by Admin) is auto-deducted from the agency\'s gross amount.' },
          { h: 'Total Invoice Amount', p: 'Two invoice variants are generated: hospital invoice (full gross) and agency invoice (gross minus commission = net earnings).' },
          { h: 'PDF Generation', p: 'Server-side PDF (Lambda) includes Selma branding, shift reference, all parties, hours, rate, commission, and totals — downloadable by all relevant actors.' }
        ]
      }
    ]
  },
  {
    id: 'f10',
    num: 'Feature 10',
    title: 'Admin Panel',
    sub: 'Admin can manage all entities, view shifts/invoices, approve manual attendance, and see the metrics dashboard.',
    lanes: [
      {
        type: 'selma',
        label: 'Selma Admin',
        steps: [
          { h: 'Platform Metrics Dashboard', p: 'Admin landing shows active shifts today, open requests, invoices this month, and commission revenue; full KPIs via Feature 11.' },
          { h: 'Manage Hospitals', p: 'Admin creates, edits, activates, or deactivates hospital accounts; deactivation blocks new requests without affecting live shifts.' },
          { h: 'Manage Agencies', p: 'Admin manages agency accounts, sets commission rates per agency, and verifies compliance documents before an agency goes live.' },
          { h: 'Manage Nurses', p: 'Admin has full read/write access to all nurse profiles and document verification status across all agencies; cannot assign nurses.' },
          { h: 'View All Shifts', p: 'Filterable view of every platform shift; clicking a shift shows its full timeline, attendance record, and linked invoice with override access.' },
          { h: 'View All Invoices', p: 'Admin can search, view, and download all invoices; each record shows gross, commission, and net with links to both hospital and agency PDFs.' },
          { h: 'Approve Manual Attendance', p: 'Flagged attendance records appear in an Admin action queue; every correction is fully logged with admin ID, values, reason, and timestamp.' }
        ]
      }
    ]
  },
  {
    id: 'f11',
    num: 'Feature 11',
    title: 'KPI Dashboard (Role-Based)',
    sub: 'Each actor sees performance metrics scoped to their own role.',
    lanes: [
      {
        type: 'hospital',
        label: 'Hospital',
        steps: [
          { h: 'Hospital KPIs', p: 'Fill rate for their own requests, average time-to-match, no-show rate for their shifts, average rating of assigned nurses.' }
        ]
      },
      {
        type: 'home',
        label: 'Leasing Company',
        steps: [
          { h: 'Agency KPIs', p: 'Request acceptance rate, shifts completed, total/monthly earnings, nurse utilisation rate, average rating from hospitals.' }
        ]
      },
      {
        type: 'nurse',
        label: 'Nurse',
        steps: [
          { h: 'Nurse KPIs', p: 'Shifts completed, on-time check-in rate, average rating received, total hours worked.' }
        ]
      },
      {
        type: 'selma',
        label: 'Selma Admin',
        steps: [
          { h: 'Admin KPIs', p: 'Platform-wide fill rate, overall no-show rate, QR check-in success rate, invoice accuracy, active hospitals/agencies/nurses, total commission revenue.' }
        ]
      }
    ]
  }
];

export const questionGroupsV2_1 = []; // No questions for V2.1 MVP
