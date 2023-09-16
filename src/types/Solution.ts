import Course from "./Course";
import Module from "./Module";
import Question from "./Question";

interface Solution {
  id?: number;
  title: string;
  soltution: string;
  type: string;
  file?: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  course?: number | Course;
  module?: number | Module;
  question?: number | Question;
}
export default Solution;
