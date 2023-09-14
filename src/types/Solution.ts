import Course from "./Course";
import Module from "./Module";
import Question from "./Question";

interface Solution {
  id: number | null;
  title: string;
  soltution: string;
  type: string;
  file: string | null;
  course_id: number | Course;
  module_id: number | Module;
  question_id: number | Question;
}
export default Solution;
