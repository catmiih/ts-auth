import ActiveType from './ActiveType';
import ActiveHistory from './ActiveHistory';
import DividendHistory from './DividendHistory';
import Alert from './Alert';

class Active {
  id: number | undefined;
  shortname: string | undefined;
  fullname: string | undefined;
  type: ActiveType | null | undefined;
  active_history: ActiveHistory[] | undefined;
  dividend_history: DividendHistory[] | undefined;
  alerts: Alert[] | undefined;

  constructor(data: Partial<Active> = {}) {
    Object.assign(this, data);
  }
}

export default Active;