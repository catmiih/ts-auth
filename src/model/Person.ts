import User from './User';

class Person {
  id: number | undefined;
  name: string | undefined;
  birthday_date: Date | undefined;
  user?: User | null | undefined;

  constructor(data: Partial<Person> = {}) {
    Object.assign(this, data);
  }
}

export default Person;