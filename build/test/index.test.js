'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var assert = require('assert');

var ErrorBundle = require('../build');
var AbstractError = ErrorBundle.AbstractError;
var AuthError = ErrorBundle.AuthError;
var BadRequestError = ErrorBundle.BadRequestError;
var CloudUnavailableError = ErrorBundle.CloudUnavailableError;
var ConflictError = ErrorBundle.ConflictError;
var DatabaseError = ErrorBundle.DatabaseError;
var RequestBodyError = ErrorBundle.RequestBodyError;
var UnSupportError = ErrorBundle.UnSupportError;

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
            assert.equal(_typeof(httpRes.id), 'undefined');
            assert.equal(_typeof(httpRes.extra), 'object');
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