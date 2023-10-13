import Active from './Active';

class ActiveType {
  id: number | undefined;
  type: string | undefined;
  sub_type: string | undefined;
  active: Active | null | undefined;

  constructor(data: Partial<ActiveType> = {}) {
    Object.assign(this, data);
  }
}

export default ActiveType;