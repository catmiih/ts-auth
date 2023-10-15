import Person from "./Person";
import Portfolio from "./Portfolio";

class Filter {
    id: number | undefined
    username: string | undefined;
    email: string | undefined;
    created_at: Date | undefined;
    account_status: string | undefined;
    person: Person | null | undefined;

    constructor(data: Partial<Filter> = {}) {
        Object.assign(this, data);
      }
}

export default Filter;