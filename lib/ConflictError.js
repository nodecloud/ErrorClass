import _ from 'lodash';

import AbstractError from './AbstractError';

export default class ConflictError extends AbstractError {
    constructor(obj) {
        super(_.defaults(obj, {
            status: 409,
            code: 107
        }));
    }
}
