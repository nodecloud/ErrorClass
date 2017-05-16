import _ from 'lodash';

import AbstractError from './AbstractError';

export default class CloudUnavailableError extends AbstractError {
    constructor(obj) {
        super(obj);
        _.defaults(this, {
            status: 400,
            code: 101201
        });
    }
}
