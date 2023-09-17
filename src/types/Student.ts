import School from "./School";
import Section from "./Section";

interface Student {
  id?: number;
  fullname?: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  suffix?: string;
  student_number?: string;
  email: string;
  password?: string;
  password_confirm?: string;
  contact_number: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  school?: number | School;
  section?: number | Section;
}
export default Student;
