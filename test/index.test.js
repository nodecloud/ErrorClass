const assert = require('assert');

const ErrorBundle = require('../build');
const AbstractError = ErrorBundle.AbstractError;
const AuthError = ErrorBundle.AuthError;
const BadRequestError = ErrorBundle.BadRequestError;
const CloudUnavailableError = ErrorBundle.CloudUnavailableError;
const ConflictError = ErrorBundle.ConflictError;
const DatabaseError = ErrorBundle.DatabaseError;
const RequestBodyError = ErrorBundle.RequestBodyError;
const UnSupportError = ErrorBundle.UnSupportError;

describe('AbstractError', function () {
    describe('#Construct', function () {
        it('should runs without any unexpected results', function () {
            var error = new AbstractError('error');
            assert.equal(error.message, 'error');
            error = new AbstractError({
                message: 'error',
                code: 100000,
                status: 401
            });
            assert.equal(error.code, 100000);
            assert.equal(error.status, 401);
        });
    });
    describe('#getHttpError()', function () {
        it('should runs without any unexpected results', function () {
            var error = new AbstractError({
                message: 'error',
                code: 100000,
                status: 401,
                id: 1,
                extra: {
                    info: 'http error'
                }
            });
            var httpRes = error.getHttpError();
            assert.equal(httpRes.code, 100000);
            assert.equal(httpRes.message, 'error');
            assert.equal(typeof httpRes.id, 'undefined');
            assert.equal(typeof httpRes.extra, 'object');
            assert.equal(httpRes.extra.info, 'http error');
        });
    });
});

describe('Other Error', function () {
    it('should runs without any unexpected results', function () {
        var error = new AuthError();
        assert.equal(error.code, 101101);
        assert.equal(error.status, 401);
        error = new BadRequestError();
        assert.equal(error.code, 101102);
        assert.equal(error.status, 400);
        error = new CloudUnavailableError();
        assert.equal(error.code, 101201);
        assert.equal(error.status, 503);
        error = new ConflictError();
        assert.equal(error.code, 101104);
        assert.equal(error.status, 409);
        error = new DatabaseError();
        assert.equal(error.code, 101105);
        assert.equal(error.status, 503);
        error = new RequestBodyError();
        assert.equal(error.code, 101102);
        assert.equal(error.status, 400);
        error = new UnSupportError();
        assert.equal(error.code, 101103);
        assert.equal(error.status, 503);
    });
});