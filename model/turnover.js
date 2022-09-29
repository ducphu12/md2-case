"use strict";
exports.__esModule = true;
exports.Turnover = void 0;
var Turnover = /** @class */ (function () {
    function Turnover() {
        this._income = 0;
    }
    Object.defineProperty(Turnover.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (value) {
            this._date = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Turnover.prototype, "income", {
        get: function () {
            return this._income;
        },
        set: function (value) {
            this._income = value;
        },
        enumerable: false,
        configurable: true
    });
    return Turnover;
}());
exports.Turnover = Turnover;
