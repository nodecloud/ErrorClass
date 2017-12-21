import _ from 'lodash';

import AbstractError from './AbstractError';

export default class BadRequestError extends AbstractError {
    constructor(obj) {
        super(obj);
        _.defaults(this, {
            status: 400,
            code: 102
        });
        this.code = this.code === null ? 102 : this.code;
    }
}
