import _ from 'lodash';

import AbstractError from './AbstractError';

export default class InternalError extends AbstractError {
    constructor(obj) {
        super(obj);
        _.defaults(this, {
            status: 500,
            code: 100
        });
    }
}
