"use strict";
exports.__esModule = true;
exports.ComputerManager = void 0;
var computer_1 = require("../model/computer");
var ComputerManager = /** @class */ (function () {
    function ComputerManager() {
        this.computer = [];
        var May1 = new computer_1.Computer(1, "may 1", "off");
        var May2 = new computer_1.Computer(2, "may 2", "on");
        var May3 = new computer_1.Computer(3, "may 3", "off");
        var May4 = new computer_1.Computer(4, "may 4", "on");
        var May5 = new computer_1.Computer(5, "may 5", "off");
        var May6 = new computer_1.Computer(6, "may 6", "off");
        var May7 = new computer_1.Computer(7, "may 7", "on");
        this.computer.push(May1, May2, May3, May4, May5, May6, May7);
    }
    ComputerManager.prototype.add = function (t) {
        this.computer.push(t);
    };
    ComputerManager.prototype["delete"] = function (id) {
        var index = this.find(id);
        this.computer.splice(index, 1);
    };
    ComputerManager.prototype.edit = function (id, t) {
        var index = this.find(id);
        this.computer[index] = t;
    };
    ComputerManager.prototype.find = function (id) {
        for (var i = 0; i < this.computer.length; i++) {
            if (id == this.computer[i].id) {
            }
            return i;
        }
        return -1;
    };
    ComputerManager.prototype.show = function () {
        return this.computer;
    };
    return ComputerManager;
}());
exports.ComputerManager = ComputerManager;
