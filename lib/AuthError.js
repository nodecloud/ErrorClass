import _ from 'lodash';

import AbstractError from './AbstractError';

export default class AuthError extends AbstractError {
    constructor(obj) {
        super(obj);
        _.defaults(this, {
            status: 401,
            code: 108
        });
    }
}
