import School from "./School";

interface Teacher {
  id: number | null;
  first_name: string;
  middle_name: string | null;
  last_name: string;
  email: string;
  contact_number: string;
  school_id: number | School;
}
export default Teacher;
