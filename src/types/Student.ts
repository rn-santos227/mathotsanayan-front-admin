import School from "./School";
import Section from "./Section";

interface Student {
  id?: number;
  first_name: string;
  middle_name?: string;
  last_name: string;
  suffix?: string;
  student_number?: string;
  email: string;
  contact_number: string;
  school_id: number | School;
  section_id: number | Section;
}
export default Student;
