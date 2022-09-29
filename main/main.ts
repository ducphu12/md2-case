import {ComputerManager} from "../service/computerManager";
import {Computer} from "../model/computer";
import {UserManager} from "../service/UserManager";
import {ServiceManager} from "../service/serviceManager";
import {Turnover} from "../model/turnover";
import {user} from "../model/user";

let input = require('readline-sync');
let ListComp:ComputerManager = new ComputerManager();
let ListUser:UserManager = new UserManager();
let ListService:ServiceManager = new ServiceManager();
let price = 10;
let priceService = 0;
let currentDate = new Date();
let turnovers = new Turnover();
turnover.date = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;
turnover.income = 0;


function account() {
    let menu = `
    ====Billing Software====
    1. Register
    2. Login
    0. Log out
    `
    let choice: number;
    do {
        console.log(menu)
        choice = +input.question("Enter selection: ");
        switch (choice) {
            case 1:
                let id1 = +input.question("Enter new user id: ");
                let name1 = input.question("Enter new user name: ");
                let pass1 = input.question("Enter new user pass: ");
                let User = new user(id1, name1, pass1);
               ListUser.add(User);
                break;
            case 2:
                let userName = input.question("Enter user name: ");
                let userPass = input.question("Enter user pass: ");
                if (userName == "ha" && userPass == "ha12345") {
                    adminMenu();
                }
                if (userName == name1 && userPass == pass1) {
                    adminMenu();
                } else {
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
    let menu1 = `
    ------Management menu------
    1. Show list of computers
    2. Add a new machine
    3. Turn on the machine and Add a service
    4. Close the machine and Pay
    5. Edit machine information
    6. Remove a machine from the list
    7. Edit price 
    8. Account Management
    9. Turnover
    0. Exit
    `
    let choice: number;
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
    } while (choice != 0)
}

function showComputer() {
    console.log(ListComp.show());
}

function addComputer() {
    let idAdd = +input.question("Enter new device id: ");
    if (ListComp.find(idAdd) == -1 && idAdd >= 0) {
        let nameAdd = input.question("Enter new device name: ");
        let statusAdd = input.question("Enter machine status: ");
      ListComp.add(new Computer(idAdd, nameAdd, statusAdd));
    } else if (idAdd >= 0) {
        console.log("Id already exists, please re-enter!");
    } else {
        console.log("Id is not satisfied, please re-enter!");
    }


}

function deleteComputer() {
    let idDelete = +input.question("Enter the id you want to delete: ");
    if (ListComp.find(idDelete) == -1) {
        console.log("Id does not exist");
    } else {
        let menuDelete = `
    You may want to delete ?
    1. Delete
    0. Exit
    `
        let choice: number;
        do {
            console.log(menuDelete);
            choice = +input.question("Enter selection: ");
            switch (choice) {
                case 1:
                    ListComp.delete(idDelete);
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
    let idEdit = +input.question("Enter the id you want to edit: ");
    if (ListComp.find(idEdit) == -1) {
        console.log("The id you want to fix does not exist!");
    } else {
        let nameEdit = input.question(" Enter a new name: ");
        let statusEdit = input.question("Enter a new status: ");
        ListComp.edit(idEdit, new Computer(idEdit, nameEdit, statusEdit));
    }
}

function openComputer() {

    let menu = `
    1. Open machine
    2. More services
    0. Exit
    `
    let choice: number;
    do {
        console.log(menu);
        choice = +input.question("Enter selection: ");
        switch (choice) {
            case 1:
                let idOpen = +input.question("Enter the device id you want to open: ");
                if (ListComp.find(idOpen) == -1) {
                    console.log("Id does not exist!");
                } else {
                    let index = ListComp.find(idOpen);
                    if (ListComp.computer[index].status == "off") {
                        ListComp.computer[index].status = "on";
                        ListComp.computer[index].time.StartTime = Date.now();
                        showComputer();
                        console.log("The device has been opened!");
                    } else {
                        console.log("Machine is working!");
                    }
                }
                break;
            case 2:
                let idAdd = +input.question("Machine id add service: ");
                if (ListComp.find(idAdd) == -1) {
                    console.log("Id does not exist!");
                } else {
                    let index1 = ListComp.find(idAdd);
                    if (ListComp.computer[index1].status == "off") {
                        console.log("Machine not working!");
                    } else if (ListComp.computer[index1].status == "on") {
                        console.log(ListService);
                        let idService = +input.question("Enter service id: ");
                        if (idService >= 1 && idService <= 4) {
                            let index2 = ListService.find(idService);
                            ListComp.computer[index1].service.push(ListService.listService[index2]);
                            for (let i = 0; i < ListComp.computer.length; i++) {
                                if (i == index1) {
                                    console.log(ListComp.computer[index1].service);
                                    for (let j = 0; j < ListService.listService.length; j++) {
                                        if (j == index2) {
                                            console.log(ListService.listService[index2].nameService + " Price:" + ListService.listService[index2].price);
                                            priceService += ListService.listService[index2].price;
                                            return priceService;
                                        }
                                    }
                                }
                            }
                        } else {
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
    let totalMoney = 0;
    let idOff = +input.question("Enter the id of the device you want to close: ");
    if (ListComp.find(idOff) == -1) {
        console.log("Id does not exist, please re-enter!!");
    } else {
        let index1 = ListComp.find(idOff);
        if (ListComp.computer[index1].status == "off") {
            console.log("Machine not working!");
        } else if (ListComp.computer[index1].status == "on") {
            ListComp.computer[index1].status = "off";
            ListComp.computer[index1].time.EndTime = Date.now();
            showComputer();
            console.log("Closed the second machine: " + (index1 + 1));
            let totalTime = (ListComp.computer[index1].time.EndTime - ListComp.computer[index1].time.StartTime) / 1000;
            let totalMoney = totalTime * price + priceService;
            console.log("Used Time: " + totalTime + " s ");
            console.log("Total amount: " + totalMoney + "USD");
            return totalMoney;
        }
    }
    return turnovers.income += totalMoney;

}

function priceEdit() {
    let newPrice = +input.question("New price: ");
    price = newPrice;
}

function addAccount() {
    let menuAccount = `
    ------Account-----
    1. Add account
    2. Edit account
    3. Delete account
    4. Show list of accounts
    0. Exit
    `
    let choice1: number;
    do {
        console.log(menuAccount);
        choice1 = +input.question("Enter selection: ");
        switch (choice1) {
            case 1:
                let id1 = +input.question("Enter user id: ")
                let name1 = input.question("Enter user name: ");
                let pass1 = input.question("Enter user pass: ");
                let User = new user(id1, name1, pass1);
               ListUser.add(User);
                break;
            case 2:
                let id2 = +input.question("The account id you want to edit: ");
                let name2 = input.question("New name: ");
                let pass2 = input.question("New pass: ");
              ListUser.edit(id2, new user(id2, name2, pass2));
                break;
            case 3:
                let id3 = +input.question("The account id you want to delete: ");
               ListUser.delete(id3);
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
    console.log(`${turnover.date}:$${turnover.income} `+"USD");
}

account();