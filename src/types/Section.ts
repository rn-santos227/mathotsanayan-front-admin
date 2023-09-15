import School from "./School";
import Teacher from "./Teacher";

interface Section {
  id?: number;
  name: string;
  level: string;
  description?: string;
  school_id: number | School;
  teacher_id: number | Teacher;
}
export default Section;
