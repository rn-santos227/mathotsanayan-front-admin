import VPassword from "./v_password";

interface VAdmin extends VPassword {
  name: string;
  email: string;
  contact_number: string;
}
export default VAdmin;
