interface Admin {
  id?: number;
  email: string;
  name: string;
  password?: string;
  password_confirm?: string;
  contact_number: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}
export default Admin;
