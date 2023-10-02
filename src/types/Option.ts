import Course from "./Course";
import Module from "./Module";
import Question from "./Question";

interface Option {
  id?: number;
  content: string;
  type: string;
  file: File[];
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  course?: number | Course;
  module?: number | Module;
  question?: number | Question;
}
export default Option;
