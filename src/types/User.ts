import Admin from "./Admin";

type User = {
  id?: number;
  type: number;
  admin: Admin | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
};

export default User;
