import School from "./School";
import Section from "./Section";

interface Student {
  id: number | null;
  first_name: string;
  middle_name: string | null;
  last_name: string;
  suffix: string | null;
  student_number: string | null;
  email: string;
  contact_number: string;
  school_id: number | School;
  section_id: number | Section;
}
export default Student;
