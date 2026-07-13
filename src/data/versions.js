import { phases, questionGroups } from './phases';
import { phasesV2, questionGroupsV2 } from './phases_v2';
import { phasesV2_1, questionGroupsV2_1 } from './phases_v2_1';

export const versions = [
  {
    id: 'v2_1',
    versionNumber: 'Version 2.1',
    title: 'MVP Scope',
    dateCreated: '2026-10-25',
    status: 'Approved',
    author: 'Praskla Technology',
    summary: 'Final MVP scope definition. Everything listed here is being built and tested end-to-end as part of the initial deliverable.',
    changeLog: {
      added: [
        'User management (login, roles, reset)',
        'Hospital, Leasing Company, and Admin portals',
        'Nurse Web App (Mobile Optimized) with QR scanning',
        'Matching engine (specialization, availability, distance, rating)',
        'Shift lifecycle with 8 states',
        'Web-based QR check-in/out with timestamping',
        'Email notifications',
        'Auto-calculated invoicing (PDF)'
      ],
      modified: [],
      removed: [
        'Automated Invoicing & Payment Gateway Integration (Out of scope)',
        'Native iOS/Android Apps (Out of scope)',
        'Complex Dunning Engine (Out of scope)'
      ],
      clientNotes: 'This PRD and all requirements, features, and scope definitions herein are approved as the MVP scope. Any functionality not explicitly defined is considered outside approved scope.',
      openQuestions: 'None. Final MVP Scope.'
    },
    prdData: phasesV2_1,
    questionGroups: questionGroupsV2_1,
    hasQuestions: false
  },
  {
    id: 'v2',
    versionNumber: 'Version 2.0',
    title: 'Client Review & Integration Updates',
    dateCreated: '2026-07-04',
    status: 'In Review',
    author: 'Pranesh',
    summary: 'Refined the user flow based on client feedback, focusing on overtime compliance and clearer contract endpoints.',
    changeLog: {
      added: [
        'Overtime compliance tracking in Timesheet phase',
        'Direct contract PDF download endpoint',
      ],
      modified: [
        'Updated UI layout for the Shift Planning component',
        'Changed terminology from "Worker" to "Contractor" in Client portal',
      ],
      removed: [
        'Deprecated the legacy API v1 endpoints',
      ],
      clientNotes: 'The client specifically requested stricter validation on overtime hours before payroll approval.',
      openQuestions: 'Do we need a separate role for HR managers to approve overtime, or does the Project Lead handle it?'
    },
    prdData: phasesV2,
    questionGroups: questionGroupsV2,
    hasQuestions: true
  },
  {
    id: 'v1',
    versionNumber: 'Version 1.0',
    title: 'Initial Platform PRD',
    dateCreated: '2026-06-15',
    status: 'Approved',
    author: 'Pranesh',
    summary: 'The foundational Product Requirements Document outlining the core user journeys, API structure, and frontend components for the Selma platform.',
    changeLog: {
      added: ['Initial core documentation'],
      modified: [],
      removed: [],
      clientNotes: 'Approved for initial development sprint.',
      openQuestions: 'None.'
    },
    prdData: phases,
    questionGroups: questionGroups,
    hasQuestions: true
  }
];

