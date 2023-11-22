import Course from "./Course";
import Module from "./Module";
import Question from "./Question";

interface Option {
  id?: number;
  content: string;
  file: File | null;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  has_file?: number;
  course?: number | Course;
  module?: number | Module;
  question?: number | Question;
}
export default Option;
