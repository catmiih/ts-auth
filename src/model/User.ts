import Person from './Person';


class User {
  id: number | undefined;
  username: string | undefined;
  password: string | undefined;
  email: string | undefined;
  created_at: Date | undefined;
  account_status: string | undefined;
  person: Person | null | undefined;

  constructor(data: Partial<User> = {}) {
    Object.assign(this, data);
  }
}

export default User;