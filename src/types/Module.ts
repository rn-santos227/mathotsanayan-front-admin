import Course from "./Course";

interface Module {
  id?: number;
  description: string;
  step: number;
  course: number | Course;
}
export default Module;
