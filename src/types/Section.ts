import School from "./School";
import Teacher from "./Teacher";

interface Section {
  id: number | null;
  name: string;
  level: string;
  description: string | null;
  school_id: number | School;
  teacher_id: number | Teacher;
}
export default Section;
