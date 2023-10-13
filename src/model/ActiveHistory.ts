import Active from './Active';

class ActiveHistory {
  id: number | undefined;
  data_time: Date | undefined;
  quota_value: number | undefined;
  valuation: number | undefined;
  active: Active | null | undefined;

  constructor(data: Partial<ActiveHistory> = {}) {
    Object.assign(this, data);
  }
}

export default ActiveHistory;