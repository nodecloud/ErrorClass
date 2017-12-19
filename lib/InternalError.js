import _ from 'lodash';

import AbstractError from './AbstractError';

export default class InternalError extends AbstractError {
    constructor(obj) {
        super(_.defaults(obj, {
            status: 500,
            code: 100
        }));
    }
}
