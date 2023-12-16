import Module from "./Module";

type Subject = {
  id?: number;
  name: string;
  description: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  modules?: Module[] | null;
};
export default Subject;
