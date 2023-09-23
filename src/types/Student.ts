import Course from "./Course";
import School from "./School";
import Section from "./Section";
interface Student {
  id?: number;
  full_name?: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  suffix: string;
  student_number: string;
  email: string;
  password: string;
  password_confirm: string;
  contact_number: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  course: number | string | Course;
  school: number | string | School;
  section: number | string | Section;
}
export default Student;
