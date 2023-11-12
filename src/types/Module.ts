import Question from "./Question";
import Subject from "./Subject";

interface Module {
  id?: number;
  name: string;
  description: string;
  step: number | string | null | undefined;
  passing: number;
  active?: number;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  subject: number | string | Subject;
  questions?: Question[];
}
export default Module;
