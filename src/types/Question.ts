import Course from "./Course";
import Module from "./Module";

interface Question {
  id: number | null;
  content: string;
  type: string;
  file: string | string;
  module_id: number | Module;
  course_id: number | Course;
  questions: Question[] | null;
}
export default Question;
