import User from './User';
import Active from './Active';

class Alert {
  id: number | undefined;
  active?: Active;
  active_id: number | undefined;
  user?: User
  user_id: number | null | undefined;
  type: string | undefined;
  action: string | undefined;
  created_at: Date | undefined;
  message: string | null | undefined;

  /* Status = 0 (Não lido), 1 (Lido), 2 (Apagado) */
  status?: number;

  constructor(data: Partial<Alert> = {}) {
    Object.assign(this, data);
  }
}

export default Alert;