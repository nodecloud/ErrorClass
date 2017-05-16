import _ from 'lodash';

import AbstractError from './AbstractError';

export default class UnSupportError extends AbstractError {
    constructor(obj) {
        super(obj);
        _.defaults(this, {
            status: 502,
            code: 101103
        });
    }
}
