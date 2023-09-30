import Course from "./Course";
import Module from "./Module";
import Option from "./Option";
import Solution from "./Solution";

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
  options?: Option[] | null;
  solutions?: Solution[] | null;
}
export default Question;
