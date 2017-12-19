import _ from 'lodash';

import AbstractError from './AbstractError';

export default class RequestBodyError extends AbstractError {
    constructor(obj) {
        super(obj);
        _.assign(this, {
            status: 400,
            code: 102
        });
    }
}
