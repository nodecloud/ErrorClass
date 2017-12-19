import _ from 'lodash';

import AbstractError from './AbstractError';

export default class ConfigError extends AbstractError {
    constructor(obj) {
        super(obj);
        _.assign(this, {
            status: 503,
            code: 104
        });
    }
}