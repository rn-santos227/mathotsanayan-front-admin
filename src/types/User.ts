import Admin from "./Admin";
import Student from "./Person";
import Teacher from "./Teacher";

type User = {
  id?: number;
  email: string;
  type_name: string;
  owner: Admin | Student | Teacher;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
};

export default User;
