"use strict";
exports.__esModule = true;
var computerManager_1 = require("../service/computerManager");
var computer_1 = require("../model/computer");
var UserManager_1 = require("../service/UserManager");
var serviceManager_1 = require("../service/serviceManager");
var turnover_1 = require("../model/turnover");
var user_1 = require("../model/user");
var input = require('readline-sync');
var ListComp = new computerManager_1.ComputerManager();
var ListUser = new UserManager_1.UserManager();
var ListService = new serviceManager_1.ServiceManager();
var price = 10;
var priceService = 0;
var currentDate = new Date();
var turnovers = new turnover_1.Turnover();
turnover.date = "".concat(currentDate.getDate(), "-").concat(currentDate.getMonth() + 1, "-").concat(currentDate.getFullYear());
turnover.income = 0;
function account() {
    var menu = "\n    ====Billing Software====\n    1. Register\n    2. Login\n    0. Log out\n    ";
    var choice;
    do {
        console.log(menu);
        choice = +input.question("Enter selection: ");
        switch (choice) {
            case 1:
                var id1 = +input.question("Enter new user id: ");
                var name1 = input.question("Enter new user name: ");
                var pass1 = input.question("Enter new user pass: ");
                var User = new user_1.user(id1, name1, pass1);
                ListUser.add(User);
                break;
            case 2:
                var userName = input.question("Enter user name: ");
                var userPass = input.question("Enter user pass: ");
                if (userName == "ha" && userPass == "ha12345") {
                    adminMenu();
                }
                if (userName == name1 && userPass == pass1) {
                    adminMenu();
                }
                else {
                    console.log("Wrong username or id, re-enter!!");
                }
                break;
            case 0:
                break;
            default:
                console.log("Wrong, please re-enter");
                break;
        }
    } while (choice != 0);
}
function adminMenu() {
    var menu1 = "\n    ------Management menu------\n    1. Show list of computers\n    2. Add a new machine\n    3. Turn on the machine and Add a service\n    4. Close the machine and Pay\n    5. Edit machine information\n    6. Remove a machine from the list\n    7. Edit price \n    8. Account Management\n    9. Turnover\n    0. Exit\n    ";
    var choice;
    do {
        console.log(menu1);
        choice = +input.question("Enter selection: ");
        switch (choice) {
            case 1:
                showComputer();
                break;
            case 2:
                addComputer();
                break;
            case 3:
                openComputer();
                break;
            case 4:
                turnovers.income += offComputer();
                break;
            case 5:
                editComputer();
                break;
            case 6:
                deleteComputer();
                break;
            case 7:
                priceEdit();
                break;
            case 8:
                addAccount();
                break;
            case 9:
                turnover();
                break;
            case 0:
                break;
            default:
                console.log("Wrong then re-enter");
                break;
        }
    } while (choice != 0);
}
function showComputer() {
    console.log(ListComp.show());
}
function addComputer() {
    var idAdd = +input.question("Enter new device id: ");
    if (ListComp.find(idAdd) == -1 && idAdd >= 0) {
        var nameAdd = input.question("Enter new device name: ");
        var statusAdd = input.question("Enter machine status: ");
        ListComp.add(new computer_1.Computer(idAdd, nameAdd, statusAdd));
    }
    else if (idAdd >= 0) {
        console.log("Id already exists, please re-enter!");
    }
    else {
        console.log("Id is not satisfied, please re-enter!");
    }
}
function deleteComputer() {
    var idDelete = +input.question("Enter the id you want to delete: ");
    if (ListComp.find(idDelete) == -1) {
        console.log("Id does not exist");
    }
    else {
        var menuDelete = "\n    You may want to delete ?\n    1. Delete\n    0. Exit\n    ";
        var choice = void 0;
        do {
            console.log(menuDelete);
            choice = +input.question("Enter selection: ");
            switch (choice) {
                case 1:
                    ListComp["delete"](idDelete);
                    showComputer();
                    console.log("Deleted successfully!");
                    break;
                case 0:
                    break;
            }
        } while (choice != 0);
    }
}
function editComputer() {
    var idEdit = +input.question("Enter the id you want to edit: ");
    if (ListComp.find(idEdit) == -1) {
        console.log("The id you want to fix does not exist!");
    }
    else {
        var nameEdit = input.question(" Enter a new name: ");
        var statusEdit = input.question("Enter a new status: ");
        ListComp.edit(idEdit, new computer_1.Computer(idEdit, nameEdit, statusEdit));
    }
}
function openComputer() {
    var menu = "\n    1. Open machine\n    2. More services\n    0. Exit\n    ";
    var choice;
    do {
        console.log(menu);
        choice = +input.question("Enter selection: ");
        switch (choice) {
            case 1:
                var idOpen = +input.question("Enter the device id you want to open: ");
                if (ListComp.find(idOpen) == -1) {
                    console.log("Id does not exist!");
                }
                else {
                    var index = ListComp.find(idOpen);
                    if (ListComp.computer[index].status == "off") {
                        ListComp.computer[index].status = "on";
                        ListComp.computer[index].time.StartTime = Date.now();
                        showComputer();
                        console.log("The device has been opened!");
                    }
                    else {
                        console.log("Machine is working!");
                    }
                }
                break;
            case 2:
                var idAdd = +input.question("Machine id add service: ");
                if (ListComp.find(idAdd) == -1) {
                    console.log("Id does not exist!");
                }
                else {
                    var index1 = ListComp.find(idAdd);
                    if (ListComp.computer[index1].status == "off") {
                        console.log("Machine not working!");
                    }
                    else if (ListComp.computer[index1].status == "on") {
                        console.log(ListService);
                        var idService = +input.question("Enter service id: ");
                        if (idService >= 1 && idService <= 4) {
                            var index2 = ListService.find(idService);
                            ListComp.computer[index1].service.push(ListService.listService[index2]);
                            for (var i = 0; i < ListComp.computer.length; i++) {
                                if (i == index1) {
                                    console.log(ListComp.computer[index1].service);
                                    for (var j = 0; j < ListService.listService.length; j++) {
                                        if (j == index2) {
                                            console.log(ListService.listService[index2].nameService + " Price:" + ListService.listService[index2].price);
                                            priceService += ListService.listService[index2].price;
                                            return priceService;
                                        }
                                    }
                                }
                            }
                        }
                        else {
                            console.log("Id does not exist!");
                        }
                    }
                    return turnovers.income += priceService;
                }
                break;
            case 0:
                break;
            default:
                console.log("Entered wrong, enter again");
                break;
        }
    } while (choice != 0);
}
function offComputer() {
    var totalMoney = 0;
    var idOff = +input.question("Enter the id of the device you want to close: ");
    if (ListComp.find(idOff) == -1) {
        console.log("Id does not exist, please re-enter!!");
    }
    else {
        var index1 = ListComp.find(idOff);
        if (ListComp.computer[index1].status == "off") {
            console.log("Machine not working!");
        }
        else if (ListComp.computer[index1].status == "on") {
            ListComp.computer[index1].status = "off";
            ListComp.computer[index1].time.EndTime = Date.now();
            showComputer();
            console.log("Closed the second machine: " + (index1 + 1));
            var totalTime = (ListComp.computer[index1].time.EndTime - ListComp.computer[index1].time.StartTime) / 1000;
            var totalMoney_1 = totalTime * price + priceService;
            console.log("Used Time: " + totalTime + " s ");
            console.log("Total amount: " + totalMoney_1 + "USD");
            return totalMoney_1;
        }
    }
    return turnovers.income += totalMoney;
}
function priceEdit() {
    var newPrice = +input.question("New price: ");
    price = newPrice;
}
function addAccount() {
    var menuAccount = "\n    ------Account-----\n    1. Add account\n    2. Edit account\n    3. Delete account\n    4. Show list of accounts\n    0. Exit\n    ";
    var choice1;
    do {
        console.log(menuAccount);
        choice1 = +input.question("Enter selection: ");
        switch (choice1) {
            case 1:
                var id1 = +input.question("Enter user id: ");
                var name1 = input.question("Enter user name: ");
                var pass1 = input.question("Enter user pass: ");
                var User = new user_1.user(id1, name1, pass1);
                ListUser.add(User);
                break;
            case 2:
                var id2 = +input.question("The account id you want to edit: ");
                var name2 = input.question("New name: ");
                var pass2 = input.question("New pass: ");
                ListUser.edit(id2, new user_1.user(id2, name2, pass2));
                break;
            case 3:
                var id3 = +input.question("The account id you want to delete: ");
                ListUser["delete"](id3);
                break;
            case 4:
                ListUser.show();
                break;
            case 0:
                break;
        }
    } while (choice1 != 0);
}
function turnover() {
    console.log("Revenue up to now: ");
    console.log("".concat(turnover.date, ":$").concat(turnover.income, " ") + "USD");
}
account();
