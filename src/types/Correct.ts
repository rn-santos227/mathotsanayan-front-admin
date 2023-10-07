import Module from "./Module";
import Question from "./Question";
import Subject from "./Subject";

interface Correct {
  id?: number;
  content: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  module?: number | string | Module;
  question?: number | string | Question;
  subject?: number | string | Subject;
}
export default Correct;
