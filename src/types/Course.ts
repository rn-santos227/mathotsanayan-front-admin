import Module from "./Module";

interface Course {
  id?: number;
  name: string;
  description: string | null;
  modules: Module[] | null;
}
export default Course;
