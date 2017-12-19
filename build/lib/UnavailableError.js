'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _AbstractError2 = require('./AbstractError');

var _AbstractError3 = _interopRequireDefault(_AbstractError2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnavailableError = function (_AbstractError) {
    _inherits(UnavailableError, _AbstractError);

    function UnavailableError(obj) {
        _classCallCheck(this, UnavailableError);

        var _this = _possibleConstructorReturn(this, (UnavailableError.__proto__ || Object.getPrototypeOf(UnavailableError)).call(this, obj));

        _lodash2.default.assign(_this, {
            status: 503,
            code: 103
        });
        return _this;
    }

    return UnavailableError;
}(_AbstractError3.default);

exports.default = UnavailableError;
module.exports = exports['default'];