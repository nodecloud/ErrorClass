import _ from 'lodash';

import AbstractError from './AbstractError';

export default class NotFoundError extends AbstractError {
    constructor(obj) {
        super(obj);
        _.defaults(this, {
            status: 404,
            code: 103
        });
    }
}
