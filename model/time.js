"use strict";
exports.__esModule = true;
exports.Time = void 0;
var Time = /** @class */ (function () {
    function Time(StartTime, EndTime) {
        this._StartTime = StartTime;
        this._EndTime = EndTime;
    }
    Object.defineProperty(Time.prototype, "StartTime", {
        get: function () {
            return this._StartTime;
        },
        set: function (value) {
            this._StartTime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Time.prototype, "EndTime", {
        get: function () {
            return this._EndTime;
        },
        set: function (value) {
            this._EndTime = value;
        },
        enumerable: false,
        configurable: true
    });
    return Time;
}());
exports.Time = Time;
