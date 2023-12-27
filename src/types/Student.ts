import Course from "./Course";
import School from "./School";
import Section from "./Section";
import Person from "./Person";

interface attached_section {
  section_name: Section;
}

type Student = Person & {
  student_number: string;
  course: number | string | Course;
  school: number | string | School;
} & attached_section;

export default Student;
