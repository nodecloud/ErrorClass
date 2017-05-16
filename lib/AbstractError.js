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
        for (let key in obj) {
            this[key] = obj[key];
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
