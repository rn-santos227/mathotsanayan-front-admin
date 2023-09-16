import Course from "./Course";

interface Module {
  id?: number;
  name: string;
  description: string;
  step: number;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  course?: number | Course;
}
export default Module;
