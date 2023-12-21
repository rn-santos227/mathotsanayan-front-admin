import { createPinia } from "pinia";
import { useAuthModule } from "./modules/auth_module";
import { useCorrectModule } from "./modules/corrects_module";
import { useCourseModule } from "./modules/courses_module";
import { useDasboardModule } from "./modules/dashboard_module";
import { useImageModule } from "./modules/image_module";
import { useModuleModule } from "./modules/modules_module";
import { useOptionModule } from "./modules/options_module";
import { useQuestionModule } from "./modules/questions_module";
import { useResultModule } from "./modules/results_module";
import { useSchoolModule } from "./modules/schools_module";
import { useSectionModule } from "./modules/sections_module";
import { useStudentModule } from "./modules/students_module";
import { useSubjectModule } from "./modules/subject_module";
import { useTeacherModule } from "./modules/teachers_module";
import { useTestModule } from "./modules/test_module";

const pinia = createPinia();

export {
  pinia,
  useAuthModule,
  useCorrectModule,
  useCourseModule,
  useDasboardModule,
  useImageModule,
  useModuleModule,
  useOptionModule,
  useQuestionModule,
  useResultModule,
  useSchoolModule,
  useSectionModule,
  useStudentModule,
  useSubjectModule,
  useTeacherModule,
  useTestModule,
};
