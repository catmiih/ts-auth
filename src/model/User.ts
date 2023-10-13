import Person from './Person';
import Portfolio from './Portfolio';
import Alert from './Alert';


class User {
  id: number | undefined;
  username: string | undefined;
  password: string | undefined;
  email: string | undefined;
  created_at: Date | undefined;
  account_status: string | undefined;
  person: Person | null | undefined;
  portfolio: Portfolio[] | undefined;
  alert: Alert[] | undefined;

  constructor(data: Partial<User> = {}) {
    Object.assign(this, data);
  }
}

export default User;