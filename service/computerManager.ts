import {Manage} from "./Manage";
import {Computer} from "../model/computer";
import {Time} from "../model/time";
import {Service} from "../model/service";

export class ComputerManager implements Manage<Computer>{
    computer:Computer[]=[];


    constructor() {
        let May1 = new Computer(1,"may 1","off");
        let May2 = new Computer(2,"may 2","on");
        let May3 = new Computer(3,"may 3","off");
        let May4 = new Computer(4,"may 4","on");
        let May5 = new Computer(5,"may 5","off");
        let May6 = new Computer(6,"may 6","off");
        let May7 = new Computer(7,"may 7","on");
        this.computer.push(May1,May2,May3,May4,May5,May6,May7);


    }

    add(t: Computer) {
        this.computer.push(t)
    }

    delete(id:number) {
                let index = this.find(id);
                this.computer.splice(index, 1)
            }



    edit(id:number,t:Computer) {
        let index = this.find(id);
        this.computer[index]=t;
    }

    find(id:number) {
        for (let i = 0; i < this.computer.length; i++) {
            if (id == this.computer[i].id) {

            }
            return i


        }
        return -1;
    }

    show() {
        return this.computer;
    }


}