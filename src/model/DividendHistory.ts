import Active from './Active';

class DividendHistory {
  id: number | undefined;
  data_time: Date | undefined;
  dividend_yield: number | undefined;
  value: number | undefined;
  active: Active | null | undefined;

  constructor(data: Partial<DividendHistory> = {}) {
    Object.assign(this, data);
  }
}

export default DividendHistory;
