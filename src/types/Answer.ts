import Module from "./Module";
import Question from "./Question";
import Student from "./Student";

interface Answer {
  id?: number;
  content: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  module?: number | Module;
  question?: number | Question;
  student?: number | Student;
}
export default Answer;
