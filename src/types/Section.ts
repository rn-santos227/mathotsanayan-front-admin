import School from "./School";
import Teacher from "./Teacher";

interface Section {
  id?: number;
  name: string;
  level: string;
  description?: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  school?: number | School;
  teacher?: number | Teacher;
}
export default Section;
