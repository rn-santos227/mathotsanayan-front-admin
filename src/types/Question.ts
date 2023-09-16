import Course from "./Course";
import Module from "./Module";

interface Question {
  id?: number;
  content: string;
  type: string;
  file: string | string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  module?: number | Module;
  course?: number | Course;
  questions: Question[] | null;
}
export default Question;
