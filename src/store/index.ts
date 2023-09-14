import { createPinia } from "pinia";
import { useAuthModule } from "./modules/auth_module";
import { useCourseModule } from "./modules/courses_module";
import { useSchoolModule } from "./modules/schools_module";
import { useTeacherModule } from "./modules/teachers_module";

const pinia = createPinia();
export {
  pinia,
  useAuthModule,
  useCourseModule,
  useSchoolModule,
  useTeacherModule,
};
