'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractError = function (_Error) {
    _inherits(AbstractError, _Error);

    function AbstractError(obj) {
        _classCallCheck(this, AbstractError);

        var _this = _possibleConstructorReturn(this, (AbstractError.__proto__ || Object.getPrototypeOf(AbstractError)).call(this));

        _this.extra = {};
        _this.code = 100;
        Object.setPrototypeOf(_this, AbstractError.prototype);
        if (_lodash2.default.isString(obj)) {
            _this.message = obj;
            return _possibleConstructorReturn(_this);
        }
        for (var key in obj) {
            switch (key) {
                case 'expandCode':
                    _this.code = _lodash2.default.toNumber('' + _this.code + obj[key]);
                    if (_lodash2.default.isNaN(_this.code)) {
                        _this.code = 100;
                    }
                    break;
                default:
                    _this[key] = obj[key];
                    break;
            }
        }
        return _this;
    }

    _createClass(AbstractError, [{
        key: 'getHttpError',
        value: function getHttpError() {
            return {
                code: this.code,
                message: this.message,
                extra: this.extra
            };
        }
    }]);

    return AbstractError;
}(Error);

exports.default = AbstractError;
module.exports = exports['default'];