class Filter {
    id: number | undefined

    constructor(data: Partial<Filter> = {}) {
        Object.assign(this, data);
      }
}

export default Filter;