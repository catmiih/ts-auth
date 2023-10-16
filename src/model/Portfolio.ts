import User from './User';
import Transaction from './Transaction';
import { Decimal } from '@prisma/client/runtime/library';

class Portfolio {
  id: number | undefined;
  port_value: Decimal | undefined;
  income_value: Decimal | undefined;
  user?: User | undefined;
  risk: number | undefined;
  transactions?: Transaction[] | null | undefined;

  constructor(data: Partial<Portfolio> = {}) {
    Object.assign(this, data);
  }
}

export default Portfolio