"use strict";
exports.__esModule = true;
exports.user = void 0;
var user = /** @class */ (function () {
    function user(userId, userAccount, userPassword) {
        this._userId = userId;
        this._userAccount = userAccount;
        this._userPassword = userPassword;
    }
    Object.defineProperty(user.prototype, "userId", {
        get: function () {
            return this._userId;
        },
        set: function (value) {
            this._userId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(user.prototype, "userAccount", {
        get: function () {
            return this._userAccount;
        },
        set: function (value) {
            this._userAccount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(user.prototype, "userPassword", {
        get: function () {
            return this._userPassword;
        },
        set: function (value) {
            this._userPassword = value;
        },
        enumerable: false,
        configurable: true
    });
    return user;
}());
exports.user = user;
