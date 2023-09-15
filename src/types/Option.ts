import Course from "./Course";
import Module from "./Module";
import Question from "./Question";

interface Option {
  id?: number;
  content: string;
  correct: boolean;
  type: string;
  file?: string;
  course_id: number | Course;
  module_id: number | Module;
  question_id: number | Question;
}
export default Option;
