import Password from "@/interfaces/Password";

type Admin = Password & {
  id?: number;
  email: string;
  name: string;
  contact_number: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
};
export default Admin;
