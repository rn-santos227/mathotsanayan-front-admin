import Module from "./Module";

interface Course {
  id?: number;
  name: string;
  description: string | null;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  modules?: Module[] | null;
}
export default Course;
