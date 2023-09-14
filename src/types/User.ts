import Admin from "./Admin";

interface User {
  id: number | null;
  type: number;
  admin: Admin | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
export default User;
