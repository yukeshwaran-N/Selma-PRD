// Complete EN → DE translations — covers every string rendered in the app
// Single-quoted keys where the English text contains double-quote characters.

export const translations = {

  // ─── HERO ─────────────────────────────────────────────────────────────────
  'From contract to paycheck — the full picture': 'Vom Vertrag bis zum Gehaltsscheck – das ganze Bild',
  "Three actors. Nine phases. One shift. This walkthrough traces every step from Selma's first contract with a hospital or nursing home, through onboarding, job posting, matching, check-in, check-out, and payment — including every cancellation and overtime scenario.":
    'Drei Akteure. Neun Phasen. Eine Schicht. Diese Übersicht verfolgt jeden Schritt von Selmas erstem Vertrag mit einem Krankenhaus oder Pflegeheim über das Onboarding, die Stellenausschreibung, die Zuordnung, den Check-in, den Check-out und die Bezahlung – einschließlich aller Stornierungs- und Überstundenszenarien.',
  'Hospital':    'Krankenhaus',
  'Nursing home': 'Pflegeheim',
  'Nurse':       'Krankenschwester',

  'Prepared by': 'Erstellt von',

  // ─── VERSION STRIP ────────────────────────────────────────────────────────
  'NEW': 'NEU',
  'Cancellation & withdrawal rules across all phases': 'Stornierungs- & Rücktrittsregeln in allen Phasen',
  'CANCEL': 'STORNO',
  'Hospital and nursing home cancellation thresholds': 'Stornierungsschwellen für Krankenhaus und Pflegeheim',
  'OVERTIME': 'ÜBERSTUNDEN',
  'ArbZG overtime handling and approval flow': 'ArbZG Überstundenbehandlung und Genehmigungsprozess',
  'CONTRACT': 'VERTRAG',
  'Contract setup, DPA, and document verification': 'Vertragsabschluss, DPA und Dokumentenprüfung',

  // ─── NAV LINKS ────────────────────────────────────────────────────────────
  '1 · Contract': '1 · Vertrag',
  '2 · Onboarding': '2 · Onboarding',
  '3 · Job post': '3 · Stellenangebot',
  '4 · Matching': '4 · Matching',
  '5 · Pre-shift': '5 · Vor der Schicht',
  '6 · Check-in': '6 · Check-in',
  '7 · Active shift': '7 · Aktive Schicht',
  '8 · Check-out': '8 · Check-out',
  '9 · Payment': '9 · Zahlung',
  '10 · Ratings': '10 · Bewertungen',


  // ─── PHASE NUMBERS (same in both languages) ───────────────────────────────
  'Phase 1': 'Phase 1',
  'Phase 2': 'Phase 2',
  'Phase 3': 'Phase 3',
  'Phase 4': 'Phase 4',
  'Phase 5': 'Phase 5',
  'Phase 6': 'Phase 6',
  'Phase 7': 'Phase 7',
  'Phase 8': 'Phase 8',
  'Phase 9': 'Phase 9',
  'Phase 10': 'Phase 10',

  // ─── PHASE TITLES ─────────────────────────────────────────────────────────
  'Contract setup with Selma':    'Vertragsabschluss mit Selma',
  'Onboarding & account setup':   'Onboarding & Kontoeinrichtung',
  'Job posting & matching trigger': 'Stellenausschreibung & Matching-Auslöser',
  'Matching, acceptance & cancellation': 'Matching, Annahme & Stornierung',
  'Pre-shift preparation':        'Vorbereitung vor der Schicht',
  'Check-in at hospital':         'Einchecken im Krankenhaus',
  'Active shift & overtime':      'Aktive Schicht & Überstunden',
  'Check-out & shift lock':       'Auschecken & Schicht-Sperrung',
  'Payment cycle':                'Zahlungszyklus',
  'Ratings & feedback loop':      'Bewertungen & Feedback-Schleife',

  // ─── PHASE SUBTITLES ──────────────────────────────────────────────────────
  "Before any shift can ever be posted, both the hospital and every nursing home it will work with must sign a service contract with Selma. This phase is manual — handled by Selma's ops team.":
    'Bevor eine Schicht ausgeschrieben werden kann, müssen sowohl das Krankenhaus als auch jedes Pflegeheim, mit dem es zusammenarbeiten wird, einen Dienstleistungsvertrag mit Selma unterzeichnen. Diese Phase ist manuell – sie wird vom Ops-Team von Selma abgewickelt.',
  'Contract signed — now everyone gets their platform accounts. Selma verifies documents, approves accounts, and nurses are registered by their nursing home before getting their own app access.':
    'Vertrag unterzeichnet – jetzt erhält jeder seinen Plattform-Account. Selma prüft Dokumente, genehmigt Konten und Pflegekräfte werden von ihrem Pflegeheim registriert, bevor sie eigenen App-Zugriff erhalten.',
  'Hospital posts a shift. The platform instantly runs the matching algorithm — filtering by qualification, ranking by proximity and rating — and presents the top 3 nursing homes to the hospital.':
    'Das Krankenhaus schreibt eine Schicht aus. Die Plattform führt sofort den Matching-Algorithmus aus – filtert nach Qualifikation, reiht nach Nähe und Bewertung – und präsentiert dem Krankenhaus die Top-3-Pflegeheime.',
  'The hospital selects from the top 3. The chosen home accepts and assigns nurses. From this point, cancellations have financial consequences for all parties.':
    'Das Krankenhaus wählt aus den Top 3. Das gewählte Heim akzeptiert und weist Pflegekräfte zu. Ab diesem Zeitpunkt haben Stornierungen finanzielle Konsequenzen für alle Parteien.',
  "The 24 hours before the shift. Reminders go out, the dynamic QR code is pre-generated by Selma (ready to appear in the nurse's app at check-in time), and everyone knows exactly what to expect. Late cancellations at this stage carry the highest penalties.":
    'Die 24 Stunden vor der Schicht. Erinnerungen werden versandt, der dynamische QR-Code wird von Selma vorab generiert (bereit, beim Einchecken in der App der Pflegekraft zu erscheinen), und alle wissen genau, was sie erwartet. Späte Stornierungen in dieser Phase haben die höchsten Strafen.',
  'The most critical moment of the whole flow. The nurse presents their Selma QR on their phone — hospital reception validates it. Every failure path — dead battery, wrong code, outside time window — has a defined resolution. The check-in timestamp is the foundation of the billing record.':
    'Der kritischste Moment des gesamten Ablaufs. Die Pflegekraft zeigt ihren Selma-QR auf dem Telefon – die Krankenhausrezeption bestätigt ihn. Für jeden Fehlerpfad – leerer Akku, falscher Code, außerhalb des Zeitfensters – gibt es eine definierte Lösung. Der Check-in-Zeitstempel ist die Grundlage des Abrechnungsdatensatzes.',
  'The nurse is on the floor. The platform monitors time, compliance rules, and handles overtime carefully — extra hours require digital hospital approval before they count toward billing.':
    'Die Pflegekraft ist auf der Station. Die Plattform überwacht Zeit und Compliance-Regeln und behandelt Überstunden sorgfältig – zusätzliche Stunden erfordern die digitale Genehmigung des Krankenhauses, bevor sie zur Abrechnung zählen.',
  'Shift ends. Legal break deductions are applied automatically. The record locks permanently. Payroll data is generated and pushed to the payment engine.':
    'Schicht endet. Gesetzliche Pausenabzüge werden automatisch angewendet. Der Datensatz wird dauerhaft gesperrt. Lohndaten werden generiert und an die Zahlungs-Engine übertragen.',
  "Selma is the only payment hub. Money flows from the hospital, through Selma, to the nursing home. Cancellation penalties and commission deductions are applied before disbursement. Nurses are paid separately by their home.":
    'Selma ist der einzige Zahlungs-Hub. Das Geld fließt vom Krankenhaus über Selma zum Pflegeheim. Stornierungsstrafen und Provisionsabzüge werden vor der Auszahlung angewendet. Pflegekräfte werden separat von ihrem Heim bezahlt.',
  'After every completed shift, the hospital and nursing home rate each other. All ratings are private — only Selma sees them. They feed directly back into who gets matched first next time.':
    'Nach jeder abgeschlossenen Schicht bewerten sich Krankenhaus und Pflegeheim gegenseitig. Alle Bewertungen sind privat – nur Selma sieht sie. Sie fließen direkt zurück und bestimmen, wer beim nächsten Mal zuerst gematcht wird.',

  // ─── PHASE TAGS ───────────────────────────────────────────────────────────
  'Legal — Germany':                    'Rechtlich – Deutschland',
  'New shift posting':                  'Neue Schichtausschreibung',
  'Key cancellation thresholds apply here': 'Wichtige Stornierungsschwellen gelten hier',
  'Overtime handling':                  'Überstundenbehandlung',
  'Early termination scenario':         'Szenario vorzeitige Beendigung',

  // ─── LANE LABELS ──────────────────────────────────────────────────────────
  'Selma — ops team':                      'Selma – Ops-Team',
  'Selma platform':                        'Selma-Plattform',
  'Selma platform — matching engine':      'Selma-Plattform – Matching-Engine',
  'Selma platform — QR generation & validation': 'Selma-Plattform – QR-Generierung & Validierung',
  'Selma platform — live monitoring':      'Selma-Plattform – Live-Überwachung',
  'Selma platform — hours calculation':    'Selma-Plattform – Stundenberechnung',
  'Selma — payment engine':               'Selma – Zahlungs-Engine',
  'Selma admin':                           'Selma-Administrator',
  'Hospital — reception / ward manager':   'Krankenhaus – Rezeption / Stationsleitung',

  // ─── FLAG LABELS ──────────────────────────────────────────────────────────
  'If hospital withdraws before going live':  'Wenn sich das Krankenhaus vor Inbetriebnahme zurückzieht',
  "If home doesn't accept in time":           'Wenn das Heim nicht rechtzeitig akzeptiert',
  'Cancellation after acceptance':            'Stornierung nach Annahme',
  'ArbZG check fires automatically':          'ArbZG-Prüfung erfolgt automatisch',
  'If home declines':                         'Wenn das Heim ablehnt',
  'If home cancels after accepting':          'Wenn das Heim nach Annahme storniert',
  'If nurse cannot attend':                   'Wenn die Pflegekraft nicht erscheinen kann',
  'If nurse not checked in by X mins past start': 'Wenn die Pflegekraft X Minuten nach Beginn nicht eingecheckt ist',
  'Manual punch-in fallback':                 'Manuelles Einstempeln als Fallback',
  'If validation fails':                      'Wenn die Validierung fehlschlägt',
  'Overtime scenario':                        'Überstundenszenario',
  'Early termination':                        'Vorzeitige Beendigung',
  'If overtime is approved':                  'Wenn Überstunden genehmigt werden',
  'If shift ends early':                      'Wenn die Schicht früher endet',
  'If hours look wrong':                      'Wenn die Stunden falsch erscheinen',
  'If home had a cancellation penalty':       'Wenn das Heim eine Stornierungsstrafe hatte',
  'If hospital defaults on payment':          'Bei Zahlungsverzug des Krankenhauses',

  // ─── CONTRACT BOXES ───────────────────────────────────────────────────────
  'The contract is the legal foundation. It defines rates, billing cycles, cancellation penalties, and the Data Processing Agreement (DPA) required under GDPR Article 28. No platform access is granted until the contract is fully countersigned by Selma.':
    'Der Vertrag ist die rechtliche Grundlage. Er definiert Tarife, Abrechnungszyklen, Stornierungsstrafen und den nach DSGVO Artikel 28 erforderlichen Auftragsverarbeitungsvertrag (AVV). Kein Plattformzugang wird gewährt, bis der Vertrag vollständig von Selma gegengezeichnet ist.',
  'How the QR check-in actually works': 'So funktioniert der QR-Check-in tatsächlich',
  "The nurse opens the Selma app and taps \"Check In\" — the app displays a dynamic QR code unique to that nurse and that shift. The nurse shows this QR code to the hospital reception or ward manager, who scans or reads it using the hospital portal. The nurse never scans anything — the QR lives on the nurse's phone and is presented to the hospital. This QR is generated by the Selma platform (not by the nurse, not by the hospital).":
    'Die Pflegekraft öffnet die Selma-App und tippt auf „Einchecken" – die App zeigt einen dynamischen QR-Code an, der für diese Pflegekraft und diese Schicht einzigartig ist. Die Pflegekraft zeigt diesen QR-Code der Krankenhausrezeption oder dem Stationsleiter, der ihn über das Krankenhausportal scannt oder einliest. Die Pflegekraft scannt nichts – der QR befindet sich auf dem Telefon der Pflegekraft und wird dem Krankenhaus vorgezeigt. Dieser QR wird von der Selma-Plattform generiert (nicht von der Pflegekraft, nicht vom Krankenhaus).',

  // ─── CANCEL BOX TITLES ────────────────────────────────────────────────────
  'Cancellation rules — after acceptance': 'Stornierungsregeln – nach Annahme',
  'Late cancellation — within 24 hours of shift start': 'Spätstornierung – innerhalb von 24 Stunden vor Schichtbeginn',

  // ─── CANCEL BOX ITEMS (Phase 4) ───────────────────────────────────────────
  '<strong>Hospital cancels &gt;24 hrs before shift:</strong> Penalty fee applies (defined in contract). Fee goes to nursing home to compensate for reserved nurse time.':
    '<strong>Krankenhaus storniert &gt;24 Std. vor Schichtbeginn:</strong> Vertragsstrafe gilt (im Vertrag definiert). Die Gebühr geht an das Pflegeheim als Entschädigung für die reservierte Pflegekraftzeit.',
  '<strong>Hospital cancels &lt;24 hrs before shift:</strong> Higher penalty. Nursing home receives a larger compensation amount. Selma retains a processing fee.':
    '<strong>Krankenhaus storniert &lt;24 Std. vor Schichtbeginn:</strong> Höhere Strafe. Das Pflegeheim erhält einen höheren Entschädigungsbetrag. Selma behält eine Bearbeitungsgebühr.',
  '<strong>Nursing home withdraws after accepting:</strong> Home is liable for a breach penalty. Hospital is auto-offered the next available home in the list. Selma admin is alerted.':
    '<strong>Pflegeheim zieht sich nach Annahme zurück:</strong> Das Heim haftet für eine Vertragsstrafe. Dem Krankenhaus wird automatisch das nächste verfügbare Heim aus der Liste angeboten. Der Selma-Administrator wird benachrichtigt.',
  '<strong>Individual nurse withdraws after assignment:</strong> Nursing home must replace the nurse immediately or notify the hospital within 2 hours. If unable to replace, home is liable for the shortfall.':
    '<strong>Einzelne Pflegekraft zieht sich nach Zuweisung zurück:</strong> Das Pflegeheim muss die Pflegekraft sofort ersetzen oder das Krankenhaus innerhalb von 2 Stunden benachrichtigen. Kann kein Ersatz geleistet werden, haftet das Heim für den Fehlbetrag.',

  // ─── CANCEL BOX ITEMS (Phase 5) ───────────────────────────────────────────
  'Any cancellation by the hospital within 24 hours triggers the maximum penalty rate defined in the contract.':
    'Jede Stornierung durch das Krankenhaus innerhalb von 24 Stunden löst den im Vertrag definierten Höchststrafensatz aus.',
  'Nursing home cancellation within 24 hours is treated as a serious breach — Selma admin is alerted and the home\'s matching ranking is temporarily reduced.':
    'Eine Stornierung des Pflegeheims innerhalb von 24 Stunden wird als schwerwiegender Verstoß gewertet – der Selma-Administrator wird benachrichtigt und der Matching-Rang des Heims wird vorübergehend herabgesetzt.',
  'If a nurse is a no-show without notice, the home is liable as if they had cancelled.':
    'Wenn eine Pflegekraft ohne Vorankündigung nicht erscheint, haftet das Heim so, als hätte es selbst storniert.',

  // ─── OVERTIME BOX (Phase 7) ───────────────────────────────────────────────
  'How overtime is handled': 'Wie Überstunden gehandhabt werden',
  'If the shift is still active 30 minutes past the scheduled end time, the hospital portal shows an "Approve Overtime" prompt.':
    'Wenn die Schicht 30 Minuten nach der geplanten Endzeit noch aktiv ist, zeigt das Krankenhausportal eine Aufforderung „Überstunden genehmigen" an.',
  'Hospital admin must digitally approve or reject the extra time before the nurse can check out.':
    'Der Krankenhausadministrator muss die zusätzliche Zeit digital genehmigen oder ablehnen, bevor die Pflegekraft auschecken kann.',
  'If approved: extra hours are added to the billing record at the standard hourly rate (no premium rate confirmed).':
    'Bei Genehmigung: Zusätzliche Stunden werden zum Standardstundensatz in den Abrechnungsdatensatz aufgenommen (kein Aufschlag bestätigt).',
  'If rejected: nurse is expected to check out immediately. Any extra time not approved is not billed.':
    'Bei Ablehnung: Die Pflegekraft muss sofort auschecken. Nicht genehmigte Mehrzeit wird nicht abgerechnet.',
  'ArbZG daily maximum (10 hours including overtime) is enforced — if approval would breach 10 hours, the system blocks it and alerts Selma admin.':
    'Das ArbZG-Tageshöchstmaß (10 Stunden einschließlich Überstunden) wird durchgesetzt – würde eine Genehmigung 10 Stunden überschreiten, blockiert das System sie und benachrichtigt den Selma-Administrator.',
  'If the hospital does not respond to the overtime prompt within 1 hour, the system auto-alerts Selma admin to resolve.':
    'Wenn das Krankenhaus nicht innerhalb von 1 Stunde auf die Überstundenabfrage antwortet, benachrichtigt das System automatisch den Selma-Administrator zur Lösung.',

  // ─── PAYFLOW ──────────────────────────────────────────────────────────────
  'Invoice total → deducts commission + penalties → pays out → home pays nurse salary':
    'Rechnungsbetrag → Abzug von Provision + Strafen → Auszahlung → Heim zahlt Pflegegehalt',

  // ─── PHASE 1 STEPS ────────────────────────────────────────────────────────
  'Initial enquiry to Selma': 'Erste Anfrage an Selma',
  'Hospital contacts Selma expressing interest. Sales or ops team at Selma initiates the process.':
    'Das Krankenhaus kontaktiert Selma und bekundet Interesse. Das Vertriebs- oder Ops-Team bei Selma leitet den Prozess ein.',
  'Reviews contract terms': 'Überprüft Vertragsbedingungen',
  'Hospital agrees to the rate structure and payment terms. Signs the DPA as a data recipient. Returns signed contract to Selma.':
    'Das Krankenhaus stimmt der Tarifstruktur und den Zahlungsbedingungen zu. Unterzeichnet den AVV als Datenempfänger. Gibt den unterzeichneten Vertrag an Selma zurück.',
  'Awaiting Selma approval': 'Warten auf Selma-Genehmigung',
  'Account locked — cannot post jobs until Selma has verified and approved the documents.':
    'Konto gesperrt – Stellen können erst veröffentlicht werden, wenn Selma die Dokumente geprüft und genehmigt hat.',
  'Account approved — platform live': 'Konto genehmigt – Plattform live',
  'Hospital portal access granted. Can post jobs immediately.':
    'Krankenhausportal-Zugang gewährt. Kann sofort Stellen ausschreiben.',
  'Contacted by Selma (or self-initiated)': 'Von Selma kontaktiert (oder selbst initiiert)',
  'Selma reaches out or the home applies to join. Documents requested.':
    'Selma nimmt Kontakt auf oder das Heim bewirbt sich um die Mitgliedschaft. Dokumente werden angefordert.',
  'Submits required documents': 'Reicht erforderliche Dokumente ein',
  'Betriebserlaubnis, AÜG licence (with expiry date), liability insurance.':
    'Betriebserlaubnis, AÜG-Lizenz (mit Ablaufdatum), Haftpflichtversicherung.',
  'Selma countersigns': 'Selma gegenzeichnet',
  "Once documents are verified, Selma countersigns the home's contract.":
    'Sobald die Dokumente geprüft sind, gegenzeichnet Selma den Vertrag des Heims.',
  'Receives portal access link': 'Erhält Portal-Zugriffslink',
  'Email from Selma with a unique setup link — sent only after contract is countersigned.':
    'E-Mail von Selma mit einem eindeutigen Einrichtungslink – wird erst nach Gegenzeichnung des Vertrags gesendet.',
  'Not involved yet': 'Noch nicht beteiligt',
  'Nurses are onboarded in Phase 2 — after their nursing home\'s contract is confirmed.':
    'Pflegekräfte werden in Phase 2 ongeboardet – nachdem der Vertrag ihres Pflegeheims bestätigt ist.',
  'Issues contract to hospital': 'Stellt Vertrag an Krankenhaus aus',
  'Standard service agreement covering rates, billing cycles, cancellation penalties, and DPA clauses.':
    'Standarddienstleistungsvertrag, der Tarife, Abrechnungszyklen, Stornierungsstrafen und AVV-Klauseln abdeckt.',
  'Issues DPA to both parties': 'Stellt AVV an beide Parteien aus',
  'As required by GDPR Article 28. Selma acts as data processor; hospitals and nursing homes are data controllers.':
    'Gemäß DSGVO Artikel 28. Selma fungiert als Auftragsverarbeiter; Krankenhäuser und Pflegeheime sind Verantwortliche.',
  'Verifies nursing home documents': 'Prüft Pflegeheimdokumente',
  'AÜG licence validity, insurance coverage, and Betriebserlaubnis checked manually.':
    'AÜG-Lizenzgültigkeit, Versicherungsdeckung und Betriebserlaubnis werden manuell geprüft.',
  'Sets commission rate, billing cycle, penalty thresholds, and notification preferences for this client before onboarding begins.':
    'Legt Provisionssatz, Abrechnungszyklus, Strafschwellen und Benachrichtigungseinstellungen für diesen Kunden fest, bevor das Onboarding beginnt.',
  'Dashboard flags upcoming renewals 30 and 60 days in advance. Account can be blocked if documents lapse.':
    'Das Dashboard markiert bevorstehende Verlängerungen 30 und 60 Tage im Voraus. Bei Verfall der Dokumente kann das Konto gesperrt werden.',
  'No penalty at this stage — the contract has not yet been activated. Selma admin notes the withdrawal.':
    'Keine Strafe in dieser Phase – der Vertrag wurde noch nicht aktiviert. Der Selma-Administrator vermerkt den Rückzug.',

  // ─── PHASE 2 STEPS ────────────────────────────────────────────────────────
  'Receives portal login credentials': 'Erhält Portal-Anmeldedaten',
  'Sent only after contract countersigning.': 'Versand erfolgt erst nach Vertragsgegenzeichnung.',
  'Sets up hospital portal': 'Richtet Krankenhausportal ein',
  'Adds wards, shift types, and contact preferences. Can now post jobs.':
    'Fügt Stationen, Schichttypen und Kontakteinstellungen hinzu. Kann nun Stellen ausschreiben.',
  'Sets up nursing home portal login and contact preferences.':
    'Richtet Anmelde- und Kontakteinstellungen für das Pflegeheimportal ein.',
  'Registers each nurse': 'Registriert jede Pflegekraft',
  'Creates each nurse profile: full name, unique platform ID, specialisation, phone number. Nurse receives invite link to set their own password.':
    'Erstellt jedes Pflegekraftprofil: vollständiger Name, eindeutige Plattform-ID, Spezialisierung, Telefonnummer. Die Pflegekraft erhält einen Einladungslink, um ihr eigenes Passwort festzulegen.',
  'Receives invite link': 'Erhält Einladungslink',
  'Sets own password': 'Legt eigenes Passwort fest',
  'Downloads the Selma nurse app. Logs in with their platform ID.':
    'Lädt die Selma-Pflegekraft-App herunter. Meldet sich mit ihrer Plattform-ID an.',
  'Can see assigned shifts. "Check In" button generates their QR on demand. Navigation links to hospitals are live.':
    'Kann zugewiesene Schichten sehen. Die Schaltfläche „Einchecken" generiert den QR bei Bedarf. Navigationslinks zu Krankenhäusern sind aktiv.',
  'Generates unique platform IDs': 'Generiert eindeutige Plattform-IDs',
  'One per nurse — used in QR codes and all audit records.':
    'Eine pro Pflegekraft – verwendet in QR-Codes und allen Prüfaufzeichnungen.',
  'Activates portal accounts': 'Aktiviert Portal-Konten',
  'Hospital and nursing home portals go live. Nurse app access granted when nursing home completes registration.':
    'Krankenhaus- und Pflegeheim-Portale gehen live. Pflegekraft-App-Zugang wird gewährt, wenn das Pflegeheim die Registrierung abschließt.',
  'Document expiry tracking begins': 'Dokumentenablaufverfolgung beginnt',
  'AÜG licence and insurance certificates are tracked. Alerts fire 30 and 60 days before expiry.':
    'AÜG-Lizenz und Versicherungszertifikate werden verfolgt. Warnmeldungen 30 und 60 Tage vor Ablauf.',

  // ─── PHASE 3 STEPS ────────────────────────────────────────────────────────
  'Hospital posts a job': 'Krankenhaus schreibt eine Stelle aus',
  'Ward, shift type (day / night / weekend), start and end datetime, headcount required, specialisation, urgency flag.':
    'Station, Schichttyp (Tag/Nacht/Wochenende), Start- und Endzeitpunkt, benötigte Personalzahl, Spezialisierung, Dringlichkeitskennzeichen.',
  'Optional: request specific nurse': 'Optional: Bestimmte Pflegekraft anfordern',
  'Hospital can flag a preferred nurse by name or ID — subject to ArbZG eligibility check.':
    'Das Krankenhaus kann eine bevorzugte Pflegekraft namentlich oder per ID kennzeichnen – vorbehaltlich der ArbZG-Eignungsprüfung.',
  'Post published': 'Ausschreibung veröffentlicht',
  'Matching engine runs immediately.': 'Matching-Engine startet sofort.',
  'Sees top-3 nursing homes returned': 'Sieht zurückgegebene Top-3-Pflegeheime',
  'Each card shows home name, distance, rating, available nurse count. Hospital picks one.':
    'Jede Karte zeigt Heimname, Entfernung, Bewertung und verfügbare Pflegekraftanzahl. Das Krankenhaus wählt eines aus.',
  'Waiting for a notification from the platform.': 'Warten auf eine Benachrichtigung der Plattform.',
  'Receives job notification': 'Erhält Stellenbenachrichtigung',
  'Email and push alert — 24/7 if the urgency flag is set.':
    'E-Mail und Push-Benachrichtigung – rund um die Uhr, wenn das Dringlichkeitskennzeichen gesetzt ist.',
  'Assignment only happens after a home accepts.': 'Zuweisung erfolgt erst, nachdem ein Heim akzeptiert hat.',
  'Find all approved homes in Germany': 'Alle zugelassenen Heime in Deutschland finden',
  'Only active, contract-holding homes with verified documents.':
    'Nur aktive, vertragsführende Heime mit verifizierten Dokumenten.',
  'Filter by specialisation': 'Nach Spezialisierung filtern',
  'Only homes with nurses matching the required qualification.':
    'Nur Heime mit Pflegekräften, die der erforderlichen Qualifikation entsprechen.',
  'Rank by proximity + rating': 'Reihen nach Nähe + Bewertung',
  'Closer and better-rated homes rank higher.':
    'Näher gelegene und besser bewertete Heime werden höher eingestuft.',
  'Return top 3 to hospital': 'Top 3 an Krankenhaus zurückgeben',
  'If fewer than 3 are available, the radius expands and the hospital is told.':
    'Wenn weniger als 3 verfügbar sind, wird der Radius erweitert und das Krankenhaus wird informiert.',
  'Log posting timestamp': 'Ausschreibungszeitstempel protokollieren',
  'Immutable record of when the job went live.':
    'Unveränderliche Aufzeichnung des Zeitpunkts, zu dem die Stelle live ging.',

  // ─── PHASE 4 STEPS ────────────────────────────────────────────────────────
  'Sees top-3 nursing homes': 'Sieht Top-3-Pflegeheime',
  'Each card shows name, distance, rating, and available nurse count for this shift.':
    'Jede Karte zeigt Name, Entfernung, Bewertung und verfügbare Pflegekraftanzahl für diese Schicht.',
  'Selects preferred home': 'Wählt bevorzugtes Heim aus',
  "Taps to confirm — can view the home's profile first.":
    'Tippt zur Bestätigung – kann zuerst das Profil des Heims anzeigen.',
  'Job sent to chosen home': 'Stelle an gewähltes Heim gesendet',
  'Acceptance countdown starts — e.g. 2 hours.': 'Annahme-Countdown beginnt – z. B. 2 Stunden.',
  'System auto-escalates to next home': 'System eskaliert automatisch zum nächsten Heim',
  'Moves down the top-3 list automatically.': 'Rutscht automatisch die Top-3-Liste herunter.',
  'Penalty is calculated and logged': 'Strafe wird berechnet und protokolliert',
  'Contract penalty terms apply. Invoice is adjusted. Nursing home is compensated per the agreed rate.':
    'Vertragsstrafen gelten. Rechnung wird angepasst. Pflegeheim wird zum vereinbarten Satz entschädigt.',
  'Receives job offer': 'Erhält Stellenangebot',
  'Shift details and hospital info shown in the portal.':
    'Schichtdetails und Krankenhausinfos werden im Portal angezeigt.',
  'Each nurse checked against the 11-hour rest rule and double-booking before they can be assigned.':
    'Jede Pflegekraft wird gegen die 11-Stunden-Ruhezeitsregel und Doppelbuchung geprüft, bevor sie zugewiesen werden kann.',
  'Admin assigns nurses': 'Administrator weist Pflegekräfte zu',
  'Picks eligible nurses from the list — names confirmed to the hospital.': 'Wählt geeignete Pflegekräfte aus der Liste – Namen werden dem Krankenhaus bestätigt.',
  'System checks nurse eligibility': 'System prüft Eignung der Pflegekraft',
  'Accepts the job': 'Nimmt die Stelle an',
  'Nurses notified via push immediately.': 'Pflegekräfte werden sofort per Push benachrichtigt.',
  'Job moves to next home': 'Stelle geht zum nächsten Heim',
  'No penalty for declining at this stage — only acceptance and then cancellation triggers penalties.':
    'Keine Strafe für Ablehnung in dieser Phase – nur Annahme und anschließende Stornierung löst Strafen aus.',
  'Breach penalty applied': 'Vertragsstrafe angewendet',
  'Selma admin is alerted. Hospital is offered the next available home. Penalty is deducted from the home\'s next payout.':
    'Selma-Administrator wird benachrichtigt. Dem Krankenhaus wird das nächste verfügbare Heim angeboten. Die Strafe wird von der nächsten Auszahlung des Heims abgezogen.',
  'Not involved in selection': 'Nicht an der Auswahl beteiligt',
  'Nursing home admin decides who goes.': 'Die Heimverwaltung entscheidet, wer geht.',
  'Push notification received': 'Push-Benachrichtigung erhalten',
  '"New shift assigned — St. Mary\'s Hospital, 14 Jun, 07:00–15:00"':
    '„Neue Schicht zugewiesen – St. Mary\'s Hospital, 14. Juni, 07:00–15:00"',
  'Shift appears in dashboard': 'Schicht erscheint im Dashboard',
  'Status: Assigned. Hospital address and directions link visible.':
    'Status: Zugewiesen. Link zu Krankenhausadresse und Wegbeschreibung sichtbar.',
  'Must notify nursing home immediately': 'Pflegeheim muss sofort benachrichtigt werden',
  'Nurse contacts their nursing home admin directly — not through the app. Home is responsible for finding a replacement.':
    'Die Pflegekraft nimmt direkt Kontakt mit der Heimverwaltung auf – nicht über die App. Das Heim ist für die Ersatzbeschaffung verantwortlich.',
  'Run ArbZG 11-hour rest check': 'ArbZG 11-Stunden-Ruhezeitprüfung durchführen',
  'Per nurse, before any assignment can be confirmed.':
    'Pro Pflegekraft, bevor ein Auftrag bestätigt werden kann.',
  'Block double-booking across homes': 'Doppelbuchung über Heime blockieren',
  'Checks nurse isn\'t already assigned elsewhere at the same time.':
    'Prüft, ob die Pflegekraft nicht bereits gleichzeitig anderswo zugewiesen ist.',
  'Start acceptance countdown': 'Annahme-Countdown starten',
  'Tracks the time-limited window for the chosen home.':
    'Verfolgt das zeitlich begrenzte Fenster für das gewählte Heim.',
  'Auto-escalate on timeout': 'Bei Timeout automatisch eskalieren',
  'Moves to the next home in the list.': 'Wechselt zum nächsten Heim in der Liste.',
  'Log acceptance + cancellation events': 'Annahme- und Stornierungsereignisse protokollieren',
  'Every event is immutably recorded with a timestamp for audit and penalty calculation.':
    'Jedes Ereignis wird unveränderlich mit einem Zeitstempel für Prüfung und Strafberechnung aufgezeichnet.',
  'Calculate and apply penalties': 'Strafen berechnen und anwenden',
  'Penalty amounts are derived from the contract terms on file. Applied automatically to the relevant billing cycle.':
    'Die Strafhöhe ergibt sich aus den vorliegenden Vertragsbedingungen. Wird automatisch auf den jeweiligen Abrechnungszeitraum angewendet.',

  // ─── QUESTIONS TAGS ───────────────────────────────────────────────────────
  'HIGH': 'HOCH',
  'MED': 'MITTEL',
  'Answer:': 'Antwort:',
  'Blocks: Phase 1 workflow': 'Blockiert: Phase-1-Workflow',

  // ─── PHASE 5 STEPS ────────────────────────────────────────────────────────
  'Knows who is arriving': 'Weiß, wer ankommt',
  'Hospital portal shows confirmed nurse names, count, and nursing home for this shift. No QR to display — the nurse carries the QR on their app.':
    'Das Krankenhausportal zeigt bestätigte Pflegekraftnamen, -anzahl und Pflegeheim für diese Schicht. Kein QR zum Anzeigen – die Pflegekraft trägt den QR in ihrer App.',
  '24-hour reminder notification': '24-Stunden-Erinnerungsbenachrichtigung',
  'Shift confirmation sent by the platform.': 'Schichtbestätigung von der Plattform gesendet.',
  '24-hour reminder sent': '24-Stunden-Erinnerung gesendet',
  'Covers all assigned nurses for this shift.': 'Deckt alle für diese Schicht zugewiesenen Pflegekräfte ab.',
  'Last chance to cancel — high penalty': 'Letzte Stornierungsmöglichkeit – hohe Strafe',
  'If the home must cancel at this stage, Selma admin is immediately notified and the maximum penalty is applied.':
    'Wenn das Heim in dieser Phase stornieren muss, wird der Selma-Administrator sofort benachrichtigt und die Höchststrafe verhängt.',
  'No further action needed': 'Keine weitere Aktion erforderlich',
  'Nurses travel to the hospital independently.': 'Pflegekräfte reisen selbstständig ins Krankenhaus.',
  '24-hour push notification': '24-Stunden-Push-Benachrichtigung',
  '"Reminder: shift at St. Mary\'s Hospital tomorrow at 07:00."':
    '„Erinnerung: Schicht im St. Mary\'s Hospital morgen um 07:00 Uhr."',
  '2-hour push notification': '2-Stunden-Push-Benachrichtigung',
  '"Your shift starts in 2 hours. Don\'t forget to check in on arrival."':
    '„Ihre Schicht beginnt in 2 Stunden. Vergessen Sie nicht, bei Ankunft einzuchecken."',
  'Opens shift in app': 'Öffnet Schicht in der App',
  'Sees hospital name, ward, shift time, and a "Get directions" button that opens the device\'s native maps app.':
    'Sieht den Krankenhausnamen, die Station, die Schichtzeit und eine Schaltfläche „Wegbeschreibung", die die native Karten-App des Geräts öffnet.',
  'Travels to hospital': 'Fährt ins Krankenhaus',
  'No in-app GPS tracking during travel. The app is 100% online — nurse must have a connection to check in.':
    'Kein In-App-GPS-Tracking während der Fahrt. Die App ist 100 % online – die Pflegekraft muss eine Verbindung zum Einchecken haben.',
  'Pre-generate QR payload for this shift': 'QR-Payload für diese Schicht vorab generieren',
  'Selma prepares the QR payload (nurse ID + shift ID + hospital ID + valid time window) ready for the nurse\'s app to render on demand at check-in. The code is not shown until the nurse taps "Check In".':
    'Selma bereitet die QR-Payload vor (Pflegekraft-ID + Schicht-ID + Krankenhaus-ID + gültiges Zeitfenster), bereit zum Rendern in der App bei Check-in. Der Code wird erst angezeigt, wenn die Pflegekraft auf „Einchecken" tippt.',
  'Send 24-hr and 2-hr reminders': '24-Std.- und 2-Std.-Erinnerungen senden',
  'To nurses, hospital admin, and nursing home admin.':
    'An Pflegekräfte, Krankenhausadmin und Pflegeheimadmin.',
  'Monitor for late cancellations': 'Spätstornierungen überwachen',
  'If cancellation is received within 24 hours, maximum penalty is auto-calculated and applied from the contract on file.':
    'Wenn eine Stornierung innerhalb von 24 Stunden eingeht, wird die Höchststrafe automatisch berechnet und aus dem vorliegenden Vertrag angewendet.',

  // ─── PHASE 6 STEPS ────────────────────────────────────────────────────────
  'Receives arriving nurse': 'Empfängt ankommende Pflegekraft',
  'Nurse arrives at reception and opens the Selma app to show their QR code. Reception staff open the hospital portal to scan or enter the code.':
    'Die Pflegekraft kommt an der Rezeption an und öffnet die Selma-App, um den QR-Code zu zeigen. Das Empfangspersonal öffnet das Krankenhausportal, um den Code zu scannen oder einzugeben.',
  'Scans nurse\'s QR code': 'Scannt QR-Code der Pflegekraft',
  'Hospital portal camera (or manual code entry) reads the QR displayed on the nurse\'s phone. The platform validates it instantly.':
    'Die Krankenhausportalkamera (oder manuelle Code-Eingabe) liest den auf dem Telefon der Pflegekraft angezeigten QR. Die Plattform validiert ihn sofort.',
  'Receives check-in confirmation': 'Erhält Check-in-Bestätigung',
  '"Nurse Anna K. checked in — 07:02" shown instantly in the portal. No further action needed.':
    '„Pflegekraft Anna K. eingecheckt – 07:02" wird sofort im Portal angezeigt. Keine weitere Aktion erforderlich.',
  'Alert fires to all parties': 'Alarm an alle Parteien',
  'Hospital admin, nursing home admin, and Selma all receive an alert simultaneously.':
    'Krankenhausadmin, Pflegeheimadmin und Selma erhalten gleichzeitig einen Alarm.',
  'Hospital admin can punch in manually': 'Krankenhausadmin kann manuell einstempeln',
  'Used if the nurse\'s phone is dead or broken. Admin enters the nurse\'s platform ID manually. Creates a flagged audit record — both hospital and nursing home must confirm this entry.':
    'Wird verwendet, wenn das Telefon der Pflegekraft leer oder defekt ist. Der Admin gibt die Plattform-ID der Pflegekraft manuell ein. Erstellt einen markierten Prüfdatensatz – sowohl Krankenhaus als auch Pflegeheim müssen diesen Eintrag bestätigen.',
  'Check-in confirmation received': 'Check-in-Bestätigung erhalten',
  'Push notification the moment the nurse\'s QR is successfully validated by hospital reception.':
    'Push-Benachrichtigung, sobald der QR der Pflegekraft erfolgreich von der Krankenhausrezeption validiert wurde.',
  'Alert if no check-in': 'Alarm, wenn kein Check-in',
  'Also notified if the nurse fails to check in within the threshold time. Home is expected to contact the nurse immediately.':
    'Auch benachrichtigt, wenn die Pflegekraft nicht innerhalb der Schwellenwertzeit eincheckt. Das Heim wird erwartet, die Pflegekraft sofort zu kontaktieren.',
  'Opens assigned shift in app': 'Öffnet zugewiesene Schicht in der App',
  'Taps "Check In" — the app generates and displays a dynamic QR code unique to this nurse and this shift.':
    'Tippt auf „Einchecken" – die App generiert und zeigt einen dynamischen QR-Code an, der für diese Pflegekraft und diese Schicht einzigartig ist.',
  'Shows QR to hospital reception': 'Zeigt QR der Krankenhausrezeption',
  'Nurse holds up their phone screen. Hospital reception scans or reads the QR using the hospital portal — the nurse does not scan anything.':
    'Die Pflegekraft hält ihren Telefonbildschirm hoch. Die Krankenhausrezeption scannt oder liest den QR über das Krankenhausportal – die Pflegekraft scannt nichts.',
  'Validation passes': 'Validierung bestanden',
  'Correct nurse · Correct shift · Correct hospital · Within valid time window · Not already checked in.':
    'Richtige Pflegekraft · Richtige Schicht · Richtiges Krankenhaus · Innerhalb des gültigen Zeitfensters · Noch nicht eingecheckt.',
  'Clear error shown in portal': 'Klarer Fehler im Portal angezeigt',
  'Hospital reception sees "QR does not match this shift" or "Outside valid time window." Nurse is told to contact their nursing home admin — do not attempt manual override without authorisation.':
    'Die Krankenhausrezeption sieht „QR stimmt nicht mit dieser Schicht überein" oder „Außerhalb des gültigen Zeitfensters". Der Pflegekraft wird gesagt, ihre Heimverwaltung zu kontaktieren – keinen manuellen Override ohne Genehmigung versuchen.',
  'Shift moves to ACTIVE': 'Schicht wechselt zu AKTIV',
  'Check-in time is locked. A shift timer starts in the nurse\'s app. The nurse is now on the clock.':
    'Check-in-Zeit ist gesperrt. Ein Schicht-Timer startet in der App der Pflegekraft. Die Pflegekraft ist jetzt im Dienst.',
  'Generates nurse QR on demand': 'Generiert Pflegekraft-QR bei Bedarf',
  'When the nurse taps "Check In", the platform generates a dynamic QR code embedding: nurse ID · shift ID · hospital ID · valid time window. This code lives only in the nurse\'s app.':
    'Wenn die Pflegekraft auf „Einchecken" tippt, generiert die Plattform einen dynamischen QR-Code mit: Pflegekraft-ID · Schicht-ID · Krankenhaus-ID · gültiges Zeitfenster. Dieser Code lebt nur in der App der Pflegekraft.',
  'QR decoded by hospital portal': 'QR vom Krankenhausportal entschlüsselt',
  'Hospital portal reads the code submitted by reception and decodes the embedded identifiers.':
    'Das Krankenhausportal liest den von der Rezeption eingereichten Code und entschlüsselt die eingebetteten Kennungen.',
  'Match nurse to shift': 'Pflegekraft der Schicht zuordnen',
  'Confirms the nurse shown in the QR is assigned to this exact shift at this hospital.':
    'Bestätigt, dass die im QR angezeigte Pflegekraft dieser genauen Schicht in diesem Krankenhaus zugewiesen ist.',
  'Validate time window': 'Zeitfenster validieren',
  'QR must be presented within the valid window (15 mins before start by default). Expired codes are rejected automatically.':
    'QR muss innerhalb des gültigen Fensters vorgelegt werden (standardmäßig 15 Minuten vor Beginn). Abgelaufene Codes werden automatisch abgelehnt.',
  'Check for duplicates': 'Auf Duplikate prüfen',
  'Prevents the same nurse checking in twice to the same shift.':
    'Verhindert, dass dieselbe Pflegekraft zweimal in dieselbe Schicht eincheckt.',
  'Lock check-in timestamp': 'Check-in-Zeitstempel sperren',
  'Written to the immutable shift record. This is the billing start time.':
    'In den unveränderlichen Schichtdatensatz geschrieben. Dies ist die Abrechnungsstartzeit.',
  'Notify all parties': 'Alle Parteien benachrichtigen',
  'Hospital, nursing home, and nurse all receive real-time confirmation.':
    'Krankenhaus, Pflegeheim und Pflegekraft erhalten alle eine Echtzeit-Bestätigung.',

  // ─── PHASE 7 STEPS ────────────────────────────────────────────────────────
  'Live deployment view': 'Live-Einsatzansicht',
  'Portal shows each nurse as "Active" with a running timer for their shift.':
    'Das Portal zeigt jede Pflegekraft als „Aktiv" mit einem laufenden Timer für ihre Schicht an.',
  'Receives overtime approval prompt': 'Erhält Überstunden-Genehmigungsaufforderung',
  '30 minutes past scheduled end time — hospital admin must tap "Approve" or "End Shift Now."':
    '30 Minuten nach der geplanten Endzeit – der Krankenhausadmin muss auf „Genehmigen" oder „Schicht jetzt beenden" tippen.',
  'Approves or rejects extra time': 'Genehmigt oder lehnt zusätzliche Zeit ab',
  'Approval adds the extra hours to billing. Rejection ends the shift record — nurse must check out immediately.':
    'Genehmigung fügt die zusätzlichen Stunden zur Abrechnung hinzu. Ablehnung beendet den Schichtdatensatz – die Pflegekraft muss sofort auschecken.',
  'Can end shift early': 'Kann Schicht früher beenden',
  'If the ward no longer needs the nurse, hospital admin can trigger early checkout from the portal. Nurse is notified. Billing stops at that time.':
    'Wenn die Station die Pflegekraft nicht mehr benötigt, kann der Krankenhausadmin einen frühen Checkout vom Portal auslösen. Die Pflegekraft wird benachrichtigt. Die Abrechnung stoppt zu diesem Zeitpunkt.',
  'Nurse shown as "On shift"': 'Pflegekraft als „Im Dienst" angezeigt',
  'Nursing home portal shows the active deployment status and elapsed time.':
    'Das Pflegeheimportal zeigt den aktiven Einsatzstatus und die verstrichene Zeit an.',
  'Notified of overtime': 'Über Überstunden benachrichtigt',
  'If the hospital approves overtime, the nursing home is notified that the shift will run longer than planned.':
    'Wenn das Krankenhaus Überstunden genehmigt, wird das Pflegeheim benachrichtigt, dass die Schicht länger als geplant dauert.',
  'No action required otherwise': 'Ansonsten keine Aktion erforderlich',
  'Unless an emergency or alert fires.': 'Sofern kein Notfall oder Alarm eintritt.',
  'App shows shift as ACTIVE': 'App zeigt Schicht als AKTIV',
  'Running timer visible. "Check Out" is shown but not active until the shift end window opens.':
    'Laufender Timer sichtbar. „Auschecken" wird angezeigt, ist aber erst aktiv, wenn das Schichtende-Fenster öffnet.',
  'ArbZG break reminder': 'ArbZG-Pausenerinnerung',
  'Push at the 6-hour mark: "You are due a 30-min break as required by ArbZG."':
    'Push bei der 6-Stunden-Marke: „Sie haben Anspruch auf eine 30-minütige Pause gemäß ArbZG."',
  'Max hours warning': 'Maximale-Stunden-Warnung',
  'Push notification when approaching the 10-hour daily maximum.':
    'Push-Benachrichtigung, wenn das tägliche Maximum von 10 Stunden naht.',
  'Receives notification': 'Erhält Benachrichtigung',
  '"The hospital has approved your shift extension. You may continue working and check out when finished."':
    '„Das Krankenhaus hat Ihre Schichtverlängerung genehmigt. Sie können weiterarbeiten und auschecken, wenn Sie fertig sind."',
  'Receives early end notification': 'Erhält Früh-Ende-Benachrichtigung',
  '"The hospital has ended this shift early. Please check out now." Check-out button becomes active immediately.':
    '„Das Krankenhaus hat diese Schicht vorzeitig beendet. Bitte jetzt auschecken." Der Checkout-Button wird sofort aktiv.',
  'Track shift duration in real time': 'Schichtdauer in Echtzeit verfolgen',
  'Backend timer running continuously from check-in timestamp.':
    'Backend-Timer läuft kontinuierlich ab dem Check-in-Zeitstempel.',
  'Trigger ArbZG break alert at 6 hours': 'ArbZG-Pausenalarm bei 6 Stunden auslösen',
  'Automatic push to nurse at the 6-hour elapsed mark.':
    'Automatischer Push an die Pflegekraft bei der 6-Stunden-Marke.',
  'Trigger overtime prompt at shift end': 'Überstunden-Aufforderung am Schichtende auslösen',
  'If still active 30 mins after scheduled end — hospital portal gets the approval prompt.':
    'Wenn noch 30 Minuten nach dem geplanten Ende aktiv – das Krankenhausportal erhält die Genehmigungsaufforderung.',
  'Enforce 10-hour daily maximum': '10-Stunden-Tageslimit durchsetzen',
  'Blocks any overtime approval that would push the nurse past 10 hours total on that calendar day.':
    'Blockiert jede Überstundengenehmigung, die die Pflegekraft auf mehr als 10 Stunden an diesem Kalendertag bringen würde.',
  'Auto-alert if no checkout after shift': 'Automatischer Alarm, wenn kein Checkout nach der Schicht',
  'If no checkout is recorded within a configurable window past expected end, Selma admin is alerted.':
    'Wenn kein Checkout innerhalb eines konfigurierbaren Fensters nach dem erwarteten Ende aufgezeichnet wird, wird der Selma-Administrator benachrichtigt.',
  'Log every state change immutably': 'Jeden Zustandswechsel unveränderlich protokollieren',
  'Every event timestamped and recorded for ArbZG compliance audit trail.':
    'Jedes Ereignis wird mit einem Zeitstempel versehen und für den ArbZG-Compliance-Prüfpfad aufgezeichnet.',

  // ─── PHASE 8 STEPS ────────────────────────────────────────────────────────
  'Receives checkout notification': 'Erhält Checkout-Benachrichtigung',
  '"Anna K. checked out — 15:04. Shift: 07:02–15:04 (7h 32m billable after break deduction)."':
    '„Anna K. ausgecheckt – 15:04. Schicht: 07:02–15:04 (7 Std. 32 Min. abrechenbar nach Pausenabzug)."',
  'Shift locked in portal': 'Schicht im Portal gesperrt',
  'Read-only — no edits possible. Dispute window opens for 48 hours.':
    'Schreibgeschützt – keine Änderungen möglich. Das Streitfenster öffnet sich für 48 Stunden.',
  'Raise a dispute within 48 hours': 'Streit innerhalb von 48 Stunden einleiten',
  'Hospital flags the shift to Selma admin with a note. Record stays locked while dispute is reviewed.':
    'Das Krankenhaus kennzeichnet die Schicht mit einer Notiz für den Selma-Administrator. Der Datensatz bleibt gesperrt, während der Streit geprüft wird.',
  'Checkout confirmed': 'Checkout bestätigt',
  'Sees hours worked, ArbZG break deducted, and billable hours for this shift.':
    'Sieht geleistete Stunden, ArbZG-Pause abgezogen und abrechenbare Stunden für diese Schicht.',
  'Revenue dashboard updated': 'Umsatz-Dashboard aktualisiert',
  'This shift\'s earnings added to the projected payout for the current billing cycle.':
    'Die Einnahmen dieser Schicht werden zur projizierten Auszahlung für den aktuellen Abrechnungszeitraum hinzugefügt.',
  'Can raise a dispute': 'Kann einen Streit einleiten',
  'If the recorded hours are wrong, the home flags it to Selma within 48 hours.':
    'Wenn die erfassten Stunden falsch sind, meldet das Heim dies Selma innerhalb von 48 Stunden.',
  'Taps "Check Out"': 'Tippt auf „Auschecken"',
  'App shows a checkout QR code (same mechanism as check-in). Nurse shows it to hospital reception who scans it to confirm departure — or the hospital admin confirms checkout directly from the portal.':
    'Die App zeigt einen Checkout-QR-Code an (gleicher Mechanismus wie beim Check-in). Die Pflegekraft zeigt ihn der Krankenhausrezeption, die ihn scannt, um die Abreise zu bestätigen – oder die Krankenhausverwaltung bestätigt den Checkout direkt über das Portal.',
  'Shift summary shown': 'Schichtzusammenfassung angezeigt',
  'Check-in time · Check-out time · Total raw hours · Break deducted · Billable hours. Clear and readable.':
    'Check-in-Zeit · Check-out-Zeit · Gesamte Rohstunden · Pause abgezogen · Abrechenbare Stunden. Klar und lesbar.',
  'Shift moves to COMPLETED': 'Schicht wechselt zu ABGESCHLOSSEN',
  'Appears in past shifts list. Immutable. The nurse can reference this at any time.':
    'Erscheint in der Liste vergangener Schichten. Unveränderlich. Die Pflegekraft kann jederzeit darauf verweisen.',
  'Raw hours = checkout − check-in': 'Rohstunden = Checkout − Check-in',
  'Base duration of the shift.': 'Basisdauer der Schicht.',
  'Over 6 hrs → deduct 30 min': 'Über 6 Std. → 30 Min. abziehen',
  'ArbZG-mandated break deduction.': 'ArbZG-vorgeschriebener Pausenabzug.',
  'Over 9 hrs → deduct 45 min': 'Über 9 Std. → 45 Min. abziehen',
  'Overtime hours added if approved': 'Überstunden werden bei Genehmigung hinzugefügt',
  'Any hospital-approved overtime is included in billable total.':
    'Alle vom Krankenhaus genehmigten Überstunden sind im abrechnungsfähigen Gesamtbetrag enthalten.',
  'Billable = raw + overtime − deduction': 'Abrechenbar = Roh + Überstunden − Abzug',
  'The figure used for invoice generation and nursing home payout.':
    'Die für die Rechnungserstellung und die Auszahlung an das Pflegeheim verwendete Zahl.',
  'Record locked as immutable': 'Datensatz als unveränderlich gesperrt',
  'No further edits possible by any party without Selma admin override (with audit log).':
    'Keine weiteren Änderungen durch eine Partei ohne Selma-Admin-Override möglich (mit Prüfprotokoll).',
  'Flag manual entries for admin review': 'Manuelle Einträge zur Admin-Überprüfung kennzeichnen',
  'Any manual punch-in or manual checkout is highlighted in the admin dashboard.':
    'Jedes manuelle Einstempeln oder manuelle Auschecken wird im Admin-Dashboard hervorgehoben.',
  'Push payroll data to payment engine': 'Lohndaten an Zahlungs-Engine übertragen',
  'Feeds directly into Phase 9 billing cycle.': 'Fließt direkt in den Abrechnungszyklus Phase 9 ein.',

  // ─── PHASE 9 STEPS ────────────────────────────────────────────────────────
  'Receives invoice from Selma': 'Erhält Rechnung von Selma',
  'Itemised by shift: nurse count × billable hours × hourly rate. Any cancellation penalties included as separate line items.':
    'Nach Schicht aufgelistet: Pflegekraftanzahl × abrechenbare Stunden × Stundensatz. Eventuelle Stornierungsstrafen als separate Posten enthalten.',
  'Pays Selma': 'Bezahlt Selma',
  'Bank transfer to Selma\'s account — no direct financial contact with nursing homes.':
    'Überweisung auf Selmas Konto – kein direkter finanzieller Kontakt mit Pflegeheimen.',
  'Selma absorbs the risk': 'Selma übernimmt das Risiko',
  'Per contract terms, Selma chases the hospital. Nursing home is not exposed to the hospital\'s default.':
    'Gemäß Vertragsbedingungen mahnt Selma das Krankenhaus. Das Pflegeheim ist dem Zahlungsausfall des Krankenhauses nicht ausgesetzt.',
  'No night or weekend premium': 'Kein Nacht- oder Wochenendzuschlag',
  'Same hourly rate applies to all shift types — confirmed in alignment meetings.':
    'Derselbe Stundensatz gilt für alle Schichttypen – in Abstimmungsgesprächen bestätigt.',
  'Revenue dashboard': 'Umsatz-Dashboard',
  'Shows confirmed earnings from all completed shifts in the current billing period, projected before the payout runs.':
    'Zeigt bestätigte Einnahmen aus allen abgeschlossenen Schichten im aktuellen Abrechnungszeitraum, projiziert vor der Auszahlung.',
  'Receives payout from Selma': 'Erhält Auszahlung von Selma',
  'Every 15 days or monthly per agreed cycle. Amount = billable hours × rate − Selma commission − any breach penalties.':
    'Alle 15 Tage oder monatlich pro vereinbartem Zyklus. Betrag = abrechenbare Stunden × Satz − Selma-Provision − eventuelle Vertragsstrafen.',
  'Penalty deducted from payout': 'Strafe von Auszahlung abgezogen',
  'Cancellation penalties (from Phase 4 or 5) are deducted before the home receives their disbursement. Itemised in payout statement.':
    'Stornierungsstrafen (aus Phase 4 oder 5) werden abgezogen, bevor das Heim die Auszahlung erhält. In der Auszahlungsabrechnung aufgeführt.',
  'Pays nurses independently': 'Bezahlt Pflegekräfte eigenständig',
  'Home handles nurse salaries per their own employment contracts. Platform does not touch nurse pay.':
    'Das Heim verwaltet Pflegegehälter gemäß eigenen Arbeitsverträgen. Die Plattform greift nicht in die Pflegevergütung ein.',
  'Not part of platform payment': 'Kein Teil der Plattformzahlung',
  'The nurse is employed by the nursing home, who manages their salary.':
    'Die Pflegekraft ist beim Pflegeheim angestellt, das ihr Gehalt verwaltet.',
  'Shift history as payslip reference': 'Schichtverlauf als Gehaltsnachweis-Referenz',
  'Past completed shifts in the app give the nurse a clear record of hours worked — the nursing home uses the same data for payroll calculation.':
    'Vergangene abgeschlossene Schichten in der App geben der Pflegekraft einen klaren Nachweis der geleisteten Stunden – das Pflegeheim verwendet dieselben Daten für die Gehaltsberechnung.',
  'Aggregate all locked shift records': 'Alle gesperrten Schichtdatensätze aggregieren',
  'Pulls in every completed, immutable shift from the billing period.':
    'Zieht jede abgeschlossene, unveränderliche Schicht aus dem Abrechnungszeitraum ein.',
  'Apply cancellation penalties': 'Stornierungsstrafen anwenden',
  'Both hospital penalties (paid to homes) and nursing home penalties (deducted from payouts) are calculated from contract terms.':
    'Sowohl Krankenhausstrafen (an Heime gezahlt) als auch Pflegeheimstrafen (von Auszahlungen abgezogen) werden aus Vertragsbedingungen berechnet.',
  'Calculate invoice per hospital': 'Rechnung pro Krankenhaus berechnen',
  'Billable hours + any cancellation penalties received.':
    'Abrechenbare Stunden + eventuelle erhaltene Stornierungsstrafen.',
  'Receive hospital payment': 'Krankenhauszahlung erhalten',
  'Funds held before disbursing to homes.': 'Mittel werden vor der Auszahlung an Heime gehalten.',
  'Deduct platform commission': 'Plattformprovision abziehen',
  'Selma\'s commission comes off before the home receives their payout.':
    'Selmas Provision wird abgezogen, bevor das Heim seine Auszahlung erhält.',
  'Calculate payout per nursing home': 'Auszahlung pro Pflegeheim berechnen',
  'Billable hours × rate − commission − any penalties the home owes.':
    'Abrechenbare Stunden × Satz − Provision − eventuelle Strafen, die das Heim schuldet.',
  'Disburse every 15 days or monthly': 'Alle 15 Tage oder monatlich auszahlen',
  'Per the agreed payout cycle from the nursing home\'s contract.':
    'Gemäß dem vereinbarten Auszahlungszyklus aus dem Pflegeheimvertrag.',
  'Generate HGB-compliant reports': 'HGB-konforme Berichte erstellen',
  'All financial records retained for 10 years per German commercial law requirements.':
    'Alle Finanzunterlagen werden gemäß deutschen Handelsrechtsanforderungen 10 Jahre aufbewahrt.',

  // ─── PHASE 10 STEPS ───────────────────────────────────────────────────────
  'Rates the nursing home': 'Bewertet das Pflegeheim',
  '1–5 stars across: Punctuality, Clinical skill, Communication, and Professionalism — within 48 hours of shift end.':
    '1–5 Sterne für: Pünktlichkeit, klinische Kompetenz, Kommunikation und Professionalität – innerhalb von 48 Stunden nach Schichtende.',
  'Cannot see how they were rated': 'Kann nicht sehen, wie sie bewertet wurden',
  'All ratings are visible to Selma admin only — hospitals do not see nursing home ratings of them.':
    'Alle Bewertungen sind nur für den Selma-Admin sichtbar – Krankenhäuser sehen keine Pflegeheim-Bewertungen über sich.',
  'Can flag a dispute': 'Kann einen Streit markieren',
  'Raise a complaint to Selma within 48 hours if there was a serious problem with the deployment.':
    'Reichen Sie innerhalb von 48 Stunden eine Beschwerde bei Selma ein, wenn bei dem Einsatz ein ernstes Problem aufgetreten ist.',
  'Rates the hospital': 'Bewertet das Krankenhaus',
  '1–5 stars across: Payment speed, Communication, Ward environment — within 48 hours of shift end.':
    '1–5 Sterne für: Zahlungsgeschwindigkeit, Kommunikation, Stationsumgebung – innerhalb von 48 Stunden nach Schichtende.',
  'Only Selma admin sees all ratings from both directions.':
    'Nur der Selma-Administrator sieht alle Bewertungen aus beiden Richtungen.',
  'If a rating seems unfair or retaliatory, submits to Selma admin for manual review.':
    'Wenn eine Bewertung unfair oder vergeltend erscheint, wird sie zur manuellen Überprüfung an den Selma-Administrator eingereicht.',
  'Does not see their own rating': 'Sieht die eigene Bewertung nicht',
  'Confirmed — ratings are Selma-only. Nurses are never shown scores or hospital comments.':
    'Bestätigt – Bewertungen sind nur für Selma. Pflegekräften werden niemals Punktzahlen oder Krankenhauskommentare angezeigt.',
  'Receives Selma feedback separately': 'Erhält Selma-Feedback separat',
  'Selma sends individual feedback outside the app — via email or a separate feedback form.':
    'Selma sendet individuelles Feedback außerhalb der App – per E-Mail oder über ein separates Feedback-Formular.',
  'Shift record is immutable': 'Schichtaufzeichnung ist unveränderlich',
  'Nurse sees completed shifts in history but no rating data is shown anywhere in the app.':
    'Die Pflegekraft sieht abgeschlossene Schichten im Verlauf, aber es werden nirgendwo in der App Bewertungsdaten angezeigt.',
  'Receives all ratings — both directions': 'Erhält alle Bewertungen – beide Richtungen',
  'Full visibility across every shift and every party.':
    'Vollständige Sichtbarkeit über jede Schicht und jede Partei.',
  'Reviews disputes manually': 'Überprüft Streitigkeiten manuell',
  'Can investigate flagged or contested ratings. Can override or remove ratings with an audit log entry.':
    'Kann markierte oder angefochtene Bewertungen untersuchen. Kann Bewertungen mit einem Prüfprotokoll-Eintrag überschreiben oder entfernen.',
  'Low-rated homes deprioritised': 'Niedrig bewertete Heime werden deprioritisiert',
  'Consistently low scores move a nursing home down in the top-3 matching algorithm.':
    'Dauerhaft niedrige Punktzahlen verschieben ein Pflegeheim im Top-3-Matching-Algorithmus nach unten.',
  'Repeated 1-star → flag or block': 'Wiederholte 1-Stern → kennzeichnen oder blockieren',
  'Triggers a formal review and may result in temporary account suspension.':
    'Löst eine formelle Überprüfung aus und kann zu einer vorübergehenden Kontosperrung führen.',
  'Sends feedback to nurses independently': 'Sendet Feedback eigenständig an Pflegekräfte',
  'Outside the platform\'s normal automated flow — Selma\'s team handles this manually.':
    'Außerhalb des normalen automatisierten Ablaufs der Plattform – Selmas Team erledigt dies manuell.',

  // ─── QUESTIONS SECTION ────────────────────────────────────────────────────
  'Open Qs': 'Offene Fragen',
  'Questions pending client confirmation': 'Fragen zur Kundenbestätigung ausstehend',
  'These questions must be answered before the relevant phase can be built. All are drawn from this walkthrough — each one blocks a specific part of the architecture.':
    'Diese Fragen müssen beantwortet werden, bevor die relevante Phase aufgebaut werden kann. Alle stammen aus dieser Übersicht – jede blockiert einen bestimmten Teil der Architektur.',
  'Architecture Questions Register': 'Architektur-Fragenregister',
  'Questions marked NEW were raised after the alignment meeting based on this flow. All HIGH-priority answers are needed before database design begins.':
    'Mit NEU markierte Fragen wurden nach dem Abstimmungsgespräch auf Basis dieses Ablaufs gestellt. Alle Antworten mit HOHER Priorität sind erforderlich, bevor mit dem Datenbankentwurf begonnen wird.',

  // Q-Group titles
  'Phase 1 — Contract setup': 'Phase 1 – Vertragsaufbau',
  'Cancellation & withdrawal — across all phases': 'Stornierung & Rückzug – über alle Phasen',
  'Overtime & extra time handling': 'Umgang mit Überstunden und Mehrarbeit',
  'Existing open questions — still need answers': 'Bestehende offene Fragen – noch ohne Antwort',

  // Q Tags
  'Blocks: Phase 1 workflow':      'Blockiert: Phase-1-Workflow',
  'Blocks: Withdrawal flow':       'Blockiert: Rückzugsablauf',
  'Blocks: GDPR compliance':       'Blockiert: DSGVO-Compliance',
  'Blocks: Billing engine design': 'Blockiert: Abrechnungs-Engine-Design',
  'Blocks: Billing engine':        'Blockiert: Abrechnungs-Engine',
  'Blocks: Nurse withdrawal flow': 'Blockiert: Pflegekraft-Rückzugsablauf',
  'Blocks: Early termination billing': 'Blockiert: Abrechnung bei vorzeitiger Beendigung',
  'Blocks: Transparency logic':    'Blockiert: Transparenzlogik',
  'Blocks: Overtime flow':         'Blockiert: Überstundenablauf',
  'Blocks: Rate calculation':      'Blockiert: Tarifberechnung',
  'Blocks: ArbZG enforcement logic': 'Blockiert: ArbZG-Durchsetzungslogik',
  'Blocks: ArbZG + nurse UX':      'Blockiert: ArbZG + Pflegekraft-UX',
  'Job posting schema':            'Schema für Stellenausschreibungen',
  'Matching logic':                'Matching-Logik',
  'GDPR / legal':                  'DSGVO / Rechtliches',
  'QR architecture':               'QR-Architektur',
  'Billing':                       'Abrechnung',
  'Billing cycle':                 'Abrechnungszyklus',

  // Q Texts
  'Who at Selma is responsible for preparing and issuing the service contract to a hospital or nursing home — is this a manual step by a Selma ops team member, or will the platform generate a contract template automatically?':
    'Wer bei Selma ist für die Vorbereitung und Ausstellung des Dienstleistungsvertrags an ein Krankenhaus oder Pflegeheim verantwortlich – ist dies ein manueller Schritt durch ein Selma-Ops-Teammitglied, oder wird die Plattform automatisch eine Vertragsvorlage generieren?',
  'What happens if a hospital or nursing home wants to terminate their contract mid-deployment — i.e. while nurses are actively working shifts? Is there a minimum notice period, and who is responsible for fulfilling open shifts during the exit window?':
    'Was passiert, wenn ein Krankenhaus oder Pflegeheim seinen Vertrag mitten im Einsatz kündigen möchte – also während Pflegekräfte aktiv Schichten arbeiten? Gibt es eine Mindestkündigungsfrist und wer ist für die Besetzung offener Schichten während des Ausstiegszeitraums verantwortlich?',
  'Does Selma issue a separate Data Processing Agreement (DPA) to each hospital and nursing home — or is it embedded within the main service contract? Who acts as Data Controller and who is the Processor under GDPR?':
    'Stellt Selma jedem Krankenhaus und Pflegeheim einen separaten Auftragsverarbeitungsvertrag (AVV) aus – oder ist dieser in den Hauptdienstleistungsvertrag eingebettet? Wer fungiert als Verantwortlicher und wer ist der Auftragsverarbeiter gemäß DSGVO?',
  'Are contract terms the same for all hospitals and nursing homes, or can Selma negotiate bespoke commission rates and billing cycles per client? If bespoke — does the platform need to support per-client rate configuration in the admin backend?':
    'Sind die Vertragsbedingungen für alle Krankenhäuser und Pflegeheime gleich, oder kann Selma individuelle Provisionssätze und Abrechnungszyklen pro Kunde aushandeln? Falls individuell – muss die Plattform eine kundenseitige Tarif-Konfiguration im Admin-Backend unterstützen?',
  'What are the exact cancellation penalty amounts or formulas for: (a) hospital cancels >24 hrs before shift, (b) hospital cancels <24 hrs before shift, (c) nursing home cancels after accepting, (d) nursing home cancels <24 hrs? Are these fixed euro amounts, a percentage of the shift value, or defined in each contract individually?':
    'Was sind die genauen Stornierungsstrafe-Beträge oder -Formeln für: (a) Krankenhaus storniert >24 Std. vor Schicht, (b) Krankenhaus storniert <24 Std. vor Schicht, (c) Pflegeheim storniert nach Annahme, (d) Pflegeheim storniert <24 Std.? Sind dies feste Euro-Beträge, ein Prozentsatz des Schichtwertes oder individuell im Vertrag definiert?',
  'If a nurse individually withdraws from an assigned shift without enough notice, what is the nursing home\'s obligation? Must they replace the nurse, notify the hospital within a set time window, or is there a standard fallback process? Who decides what "enough notice" means?':
    'Wenn sich eine Pflegekraft einzeln ohne ausreichende Vorankündigung aus einer zugewiesenen Schicht zurückzieht, welche Verpflichtung hat das Pflegeheim? Müssen sie die Pflegekraft ersetzen, das Krankenhaus innerhalb eines festgelegten Zeitfensters benachrichtigen, oder gibt es einen Standard-Fallback-Prozess? Wer entscheidet, was „ausreichende Vorankündigung" bedeutet?',
  'If a hospital terminates a shift early during Phase 7 (active shift) — for example because the ward situation changed — does the nursing home still get paid for the full originally agreed shift duration, or only for hours actually worked?':
    'Wenn ein Krankenhaus eine Schicht während Phase 7 (aktive Schicht) vorzeitig beendet – z. B. weil sich die Stationssituation geändert hat – erhält das Pflegeheim dann noch die volle ursprünglich vereinbarte Schichtdauer bezahlt, oder nur die tatsächlich geleisteten Stunden?',
  'Should the platform show a full cancellation history log to each party — i.e. can a hospital see how many times a nursing home has cancelled in the past 90 days? Or is this data visible only to Selma admin?':
    'Soll die Plattform jeder Partei ein vollständiges Stornierungsprotokoll anzeigen – d. h. kann ein Krankenhaus sehen, wie oft ein Pflegeheim in den letzten 90 Tagen storniert hat? Oder sind diese Daten nur für den Selma-Administrator sichtbar?',
  'Who triggers the overtime approval request — does the system automatically prompt the hospital portal when the shift runs 30 minutes past end time, or does the hospital admin proactively initiate it? What happens if the hospital never responds to the overtime prompt?':
    'Wer löst die Überstunden-Genehmigungsanfrage aus – fordert das System das Krankenhausportal automatisch auf, wenn die Schicht 30 Minuten nach Endzeit läuft, oder initiiert der Krankenhausadmin sie proaktiv? Was passiert, wenn das Krankenhaus nie auf die Überstunden-Aufforderung reagiert?',
  'Is overtime billed at the same hourly rate as the standard shift, or is there a separate overtime multiplier (e.g. 1.25× or 1.5×)? This was discussed as "no urgent/standard rate difference" — but does that apply to overtime too, or is overtime treated differently?':
    'Werden Überstunden zum gleichen Stundensatz wie die Standardschicht abgerechnet, oder gibt es einen separaten Überstunden-Multiplikator (z. B. 1,25× oder 1,5×)? Dies wurde als „kein Unterschied zwischen Dringlichkeits-/Standardtarif" besprochen – gilt das auch für Überstunden, oder werden Überstunden anders behandelt?',
  'If overtime would push a nurse past the ArbZG 10-hour daily maximum, should the platform: (a) hard-block the hospital from approving it, (b) allow it but flag it as a compliance violation, or (c) require a Selma admin override? What is the liability if overtime in breach of ArbZG is approved and recorded?':
    'Wenn Überstunden eine Pflegekraft über das ArbZG-Tageshöchstmaß von 10 Stunden bringen würden, soll die Plattform: (a) das Krankenhaus hart daran hindern, es zu genehmigen, (b) es erlauben, aber als Compliance-Verstoß kennzeichnen, oder (c) einen Selma-Admin-Override erfordern? Wie ist die Haftung, wenn ArbZG-verletzte Überstunden genehmigt und aufgezeichnet werden?',
  'Can a nurse themselves request an extension to their shift — for example if they want to stay longer voluntarily — or can overtime only ever be initiated by the hospital? In Germany, voluntary overtime without employer request has different legal implications under ArbZG.':
    'Kann eine Pflegekraft selbst eine Verlängerung ihrer Schicht beantragen – z. B. wenn sie freiwillig länger bleiben möchte – oder können Überstunden nur vom Krankenhaus initiiert werden? In Deutschland hat freiwillige Mehrarbeit ohne Arbeitgeberanforderung unterschiedliche rechtliche Implikationen gemäß ArbZG.',
  'What exact fields must a hospital provide in a job posting? (Ward name, Shift type, Start and end datetime, Headcount required, Specialisation, Urgency flag — confirm which are mandatory vs optional.)':
    'Welche genauen Felder muss ein Krankenhaus in einer Stellenausschreibung angeben? (Stationsname, Schichttyp, Start- und Endzeitpunkt, benötigte Personalzahl, Spezialisierung, Dringlichkeitskennzeichen – bestätigen, welche Pflicht- und welche optionale Felder sind.)',
  'What is the acceptance window for a nursing home to respond to a posting? What happens if all 3 homes decline or time out — does the system auto-expand to the next 3 available homes?':
    'Wie lange hat ein Pflegeheim Zeit, auf eine Ausschreibung zu antworten? Was passiert, wenn alle 3 Heime ablehnen oder die Zeit abläuft – erweitert das System automatisch auf die nächsten 3 verfügbaren Heime?',
  'When does a nurse\'s GDPR consent need to be collected — at the nursing home contract stage, during nurse onboarding, or when they first use the app? Who is responsible for collecting it?':
    'Wann muss die DSGVO-Einwilligung einer Pflegekraft eingeholt werden – beim Vertragsabschluss des Pflegeheims, beim Onboarding der Pflegekraft oder bei der ersten App-Nutzung? Wer ist für die Einholung verantwortlich?',
  'Which QR scanning direction is preferred? Nurse QR → hospital portal scans it (current design), or hospital QR → nurse app scans it?':
    'Welche QR-Scan-Richtung wird bevorzugt? Pflegekraft-QR → Krankenhausportal scannt ihn (aktuelles Design), oder Krankenhaus-QR → Pflegekraft-App scannt ihn?',
  'What percentage or flat fee does Selma deduct as platform commission before paying the nursing home? Is this fixed across all homes or negotiated per contract?':
    'Welchen Prozentsatz oder welche Pauschalgebühr zieht Selma als Plattformprovision ab, bevor das Pflegeheim bezahlt wird? Ist dies für alle Heime einheitlich oder wird es vertraglich ausgehandelt?',
  'What is the billing cycle — monthly or bi-weekly (every 15 days)? Is this fixed for all clients or per-contract?':
    'Wie lautet der Abrechnungszyklus – monatlich oder zweiwöchentlich (alle 15 Tage)? Ist dies für alle Kunden einheitlich oder vertraglich geregelt?',
};

/**
 * Translate a string. Falls back to the original English string
 * if no German translation exists (graceful degradation).
 */
export function t(str, lang) {
  if (!str) return str;
  if (lang === 'de' && translations[str]) {
    return translations[str];
  }
  return str;
}
