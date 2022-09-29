"use strict";
exports.__esModule = true;
exports.ServiceManager = void 0;
var service_1 = require("../model/service");
var ServiceManager = /** @class */ (function () {
    function ServiceManager() {
        this.listService = [];
        var service1 = new service_1.Service(1, "coca ", 10000);
        var service2 = new service_1.Service(2, "bim bim nho ", 15000);
        var service3 = new service_1.Service(3, "sting ", 15000);
        var service4 = new service_1.Service(4, "bim bim co lon ", 20000);
        this.listService.push(service1, service2, service3, service4);
    }
    ServiceManager.prototype.add = function (t) {
        this.listService.push(t);
    };
    ServiceManager.prototype["delete"] = function (id) {
    };
    ServiceManager.prototype.edit = function (id, t) {
    };
    ServiceManager.prototype.find = function (id) {
        for (var i = 0; i < this.listService.length; i++) {
            if (this.listService[i].id == id) {
                return i;
            }
        }
        return -1;
    };
    ServiceManager.prototype.show = function () {
    };
    return ServiceManager;
}());
exports.ServiceManager = ServiceManager;
