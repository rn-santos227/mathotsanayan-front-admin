import Subject from "./Subject";

interface Module {
  id?: number;
  name: string;
  description: string;
  step: number | string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  subject: number | string | Subject;
}
export default Module;
