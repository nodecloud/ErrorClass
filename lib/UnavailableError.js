import _ from 'lodash';

import AbstractError from './AbstractError';

export default class UnavailableError extends AbstractError {
    constructor(obj) {
        super(obj);
        _.defaults(this, {
            status: 503,
            code: 100
        });
    }
}
