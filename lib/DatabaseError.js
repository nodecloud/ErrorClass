import _ from 'lodash';

import AbstractError from './AbstractError';

export default class DatabaseError extends AbstractError {
    constructor(obj) {
        super(_.defaults(obj, {
            status: 503,
            code: 105100
        }));
    }
}
