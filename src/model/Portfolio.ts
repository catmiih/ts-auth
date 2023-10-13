import User from './User';
import Transaction from './Transaction';

class Portfolio {
  id: number | undefined;
  port_value: number | undefined;
  income_value: number | undefined;
  user: User | undefined;
  risk: number | undefined;
  transactions: Transaction[] | undefined;

  constructor(data: Partial<Portfolio> = {}) {
    Object.assign(this, data);
  }
}

export default Portfolio