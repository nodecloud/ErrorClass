import _ from 'lodash';

import AbstractError from './AbstractError';

export default class InfrastructureError extends AbstractError {
    constructor(obj) {
        super(obj);
        _.assign(this, {
            status: 503,
            code: 105
        });
    }
}
