import Module from "./Module";
import Answer from "./Answer";
interface Result {
  id?: number;
  progress?: number;
  timer?: number;
  total_score?: number;
  average?: number;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  module?: Module;
  answers?: Answer[];
}
export default Result;
