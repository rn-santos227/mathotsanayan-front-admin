import Account from "./Account";

type Audit = {
  id: number;
  user: Account;
  activity: string;
  table: string;
  content: string;
  ip_address: string;
  created_at: string;
};

export default Audit;
