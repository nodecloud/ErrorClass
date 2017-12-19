import _ from 'lodash';

import AbstractError from './AbstractError';

export default class ForbiddenError extends AbstractError {
    constructor(obj) {
        super(_.defaults(obj, {
            status: 403,
            code: 101
        }));
    }
}
