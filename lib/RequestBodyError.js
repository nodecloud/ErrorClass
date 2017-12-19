import _ from 'lodash';

import AbstractError from './AbstractError';

export default class RequestBodyError extends AbstractError {
    constructor(obj) {
        super(_.defaults(obj, {
            status: 400,
            code: 102
        }));
    }
}
