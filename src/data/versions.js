import { phases, questionGroups } from './phases';
import { phasesV2, questionGroupsV2 } from './phases_v2';

export const versions = [
  {
    id: 'v2',
    versionNumber: 'Version 2.0',
    title: 'Client Review & Integration Updates',
    dateCreated: '2026-07-04',
    status: 'In Review',
    author: 'Yukeshwaran N',
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
    author: 'Yukeshwaran N',
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
