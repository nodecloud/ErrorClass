import _ from 'lodash';

import AbstractError from './AbstractError';

export default class ForbiddenError extends AbstractError {
    constructor(obj) {
        super(obj);
        _.assign(this, {
            status: 403,
            code: 101
        });
    }
}