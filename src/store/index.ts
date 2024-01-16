import { createPinia } from "pinia";
import { useAccountsModule } from "./modules/accounts_module";
import { useAdminsModule } from "./modules/admins_module";
import { useAnswersModule } from "./modules/answers_module";
import { useAuditModule } from "./modules/audit_module";
import { useAuthModule } from "./modules/auth_module";
import { useCorrectsModule } from "./modules/corrects_module";
import { useCoursesModule } from "./modules/courses_module";
import { useDashboardModule } from "./modules/dashboard_module";
import { useImageModule } from "./modules/image_module";
import { useModulesModule } from "./modules/modules_module";
import { useOptionsModule } from "./modules/options_module";
import { useQuestionsModule } from "./modules/questions_module";
import { useResultsModule } from "./modules/results_module";
import { useSchoolsModule } from "./modules/schools_module";
import { useSectionsModule } from "./modules/sections_module";
import { useStudentsModule } from "./modules/students_module";
import { useSubjectsModule } from "./modules/subjects_module";
import { useTeachersModule } from "./modules/teachers_module";
import { useTestModule } from "./modules/test_module";

const pinia = createPinia();

export {
  pinia,
  useAccountsModule,
  useAdminsModule,
  useAnswersModule,
  useAuditModule,
  useAuthModule,
  useCorrectsModule,
  useCoursesModule,
  useDashboardModule,
  useImageModule,
  useModulesModule,
  useOptionsModule,
  useQuestionsModule,
  useResultsModule,
  useSchoolsModule,
  useSectionsModule,
  useStudentsModule,
  useSubjectsModule,
  useTeachersModule,
  useTestModule,
};
