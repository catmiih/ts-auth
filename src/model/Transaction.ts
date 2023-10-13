import Portfolio from './Portfolio';

class Transaction {
  id: number;
  active: number;
  port: Portfolio | null;
  port_numb: number | null;
  quota_count: number;
  total_value: number;
  trade_date: Date;

  constructor(data: Transaction) {
    this.id = data.id;
    this.active = data.active;
    this.port = data.port || null;
    this.port_numb = data.port_numb || null;
    this.quota_count = data.quota_count;
    this.total_value = data.total_value;
    this.trade_date = data.trade_date;
  }
}

export default Transaction;