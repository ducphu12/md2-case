import {user} from "../model/user";
import {Manage} from "./Manage";

export class UserManager implements Manage<user>{
    users: user[] = [];

    add(t: user) {
        this.users.push(t)
    }

    delete(id: number) {
        let index = this.find(id);
        this.users.splice(index, 1)
    }

    edit(id: number, t: user) {
        let index = this.find(id);
        this.users[index]=t;
    }

    find(id: number) {
        for (let i = 0; i < this.users.length; i++) {
            if (id == this.users[i].userId) {

            }
            return i


        }
        return -1;
    }

    show() {
        console.log(this.users)
    }



}