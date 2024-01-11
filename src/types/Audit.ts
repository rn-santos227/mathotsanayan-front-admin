import Accounts from "./Account";

type Audit = {
  id: number;
  user: Accounts;
  activity: string;
  table: string;
  content: string;
  ip_address: string;
};

export default Audit;
