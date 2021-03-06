const rulesConfigInfra = require('rules-config/infra');
const IDI = require('openchs-idi');

module.exports = IDI.configure({
    "chs-admin": "admin",
    "org-admin": "chetna-admin",
    "org-name": "CHETNA-SNEHA",
    "secrets": '../secrets.json',
    "files": {
        "adminUsers": {
            "dev": ["./users/dev-admin-user.json"],
            "staging": ["./users/dev-admin-user.json"]
        },
        "forms": [
            "./registration/registrationForm.json",
            "./fieldWorker/Field Worker Registration.json",
            "./pregnancy/pregnantWomanEnrolment.json",
            "./child/checklistForm.json",
            "./child/childrenEnrolment.json",
            "./pregnancy/monthlyMonitoringPregnancy.json",
            "./child/monthlyMonitoringChildForm.json",
            "./shared/programExitForm.json",
            "./shared/programCancelForm.json",
            "./fieldWorker/Monthly reporting of field worker.json",
            "./fieldWorker/Monthly report of field worker Encounter Cancellation.json"
        ],
        "formMappings": ["./shared/formMappings.json"],
        "formDeletions": [],
        "formAdditions": [],
        "catchments": [
             "./shared/catchments.json"
        ],
        "checklistDetails": ["./child/checklist.json"],
        "concepts": [
            "./child/checklistConcepts.json",
            "./registration/registrationConcepts.json",
            "./shared/commonConcepts.json",
            "./child/childrenEnrolmentConcepts.json",
            "./pregnancy/pregnantWomanConcepts.json",
            "./child/lactatingMotherConcepts.json",
            "./pregnancy/monthlyMonitoringPregnancyConcepts.json",
            "./child/monthlyMonitoringChildConcepts.json",
            "./fieldWorker/fieldWorkerConcepts.json"
        ],
        "locations": ["./locations/area.json"],
        "programs": ["./programs.json"],
        "encounterTypes": ["./shared/encounterTypes.json"],
        "subjectTypes": ["./shared/subjectTypes.json"],
        "operationalEncounterTypes": ["./operationalModules/operationalEncounterTypes.json"],
        "operationalPrograms": ["./operationalModules/operationalPrograms.json"],
        "operationalSubjectTypes": ["./operationalModules/operationalSubjectTypes.json"],
        "users": {
            "dev": ["./users/dev-users.json"]
            // "staging": ["./users/staging-users.json"]
        },
        "rules": [
            "./shared/rules/index.js"
        ],
        "organisationSql": [],
        "organisationConfig": ["organisationConfig.json"],
        "translations": [
            "translations/en.json",
            "translations/gu_IN.json",
        ],
    }
}, rulesConfigInfra);
