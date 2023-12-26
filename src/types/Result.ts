import Module from "./Module";
import Answer from "./Answer";
import Student from "./Person";

type Result = {
  id: number;
  progress?: number;
  timer: number;
  total_score: number;
  items: number;
  average: number;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  module: Module;
  student: Student;
  answers: Answer[];
};
export default Result;
