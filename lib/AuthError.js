import _ from 'lodash';

import AbstractError from './AbstractError';

export default class AuthError extends AbstractError {
    constructor(obj) {
        super(_.defaults(obj, {
            status: 401,
            code: 108
        }));
    }
}
