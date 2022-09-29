"use strict";
exports.__esModule = true;
exports.UserManager = void 0;
var UserManager = /** @class */ (function () {
    function UserManager() {
        this.users = [];
    }
    UserManager.prototype.add = function (t) {
        this.users.push(t);
    };
    UserManager.prototype["delete"] = function (id) {
        var index = this.find(id);
        this.users.splice(index, 1);
    };
    UserManager.prototype.edit = function (id, t) {
        var index = this.find(id);
        this.users[index] = t;
    };
    UserManager.prototype.find = function (id) {
        for (var i = 0; i < this.users.length; i++) {
            if (id == this.users[i].userId) {
            }
            return i;
        }
        return -1;
    };
    UserManager.prototype.show = function () {
        console.log(this.users);
    };
    return UserManager;
}());
exports.UserManager = UserManager;
