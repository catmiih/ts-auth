import User from './User';
import Active from './Active';

class Alert {
  id: number | undefined;
  active: Active | null | undefined;
  user: User | null | undefined;
  type: string | undefined;
  action: string | undefined;
  created_at: Date | undefined;
  message: string | undefined;

  constructor(data: Partial<Alert> = {}) {
    Object.assign(this, data);
  }
}

export default Alert;