import Subject from "./Subject";
import Module from "./Module";
import Option from "./Option";
import Solution from "./Solution";

interface Question {
  id?: number;
  content: string;
  type: string;
  file: File[];
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  module?: number | Module;
  subject?: number | Subject;
  options?: Option[] | null;
  solutions?: Solution[] | null;
}
export default Question;
