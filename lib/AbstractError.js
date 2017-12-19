import _ from 'lodash';

export default class AbstractError extends Error {
    constructor(obj) {
        super();
        this.extra = {};
        Object.setPrototypeOf(this, AbstractError.prototype);
        if (_.isString(obj)) {
            this.message = obj;
            return;
        }
        this.code = _.get(obj, 'code', 100);
        for (let key in obj) {
            switch (key) {
                case 'expandCode':
                    this.code = _.toNumber(`${this.code}${obj[key]}`);
                    if (_.isNaN(this.code)) {
                        this.code = 100;
                    }
                    break;
                case 'code':
                    break;
                default:
                    this[key] = obj[key];
                    break;
            }
        }
    }

    getHttpError() {
        return {
            code: this.code,
            message: this.message,
            extra: this.extra
        }
    }
}
