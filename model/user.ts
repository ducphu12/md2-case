export class user{
    private _userId:number
    private _userAccount:string
    private _userPassword:number


    constructor(userId: number, userAccount: string, userPassword: number) {
        this._userId = userId;
        this._userAccount = userAccount;
        this._userPassword = userPassword;
    }

    get userId(): number {
        return this._userId;
    }

    set userId(value: number) {
        this._userId = value;
    }

    get userAccount(): string {
        return this._userAccount;
    }

    set userAccount(value: string) {
        this._userAccount = value;
    }

    get userPassword(): number {
        return this._userPassword;
    }

    set userPassword(value: number) {
        this._userPassword = value;
    }
}