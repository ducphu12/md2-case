export class Time{
    private _StartTime:number;
    private _EndTime:number;


    constructor(StartTime: number, EndTime: number) {
        this._StartTime = StartTime;
        this._EndTime = EndTime;
    }

    get StartTime(): number {
        return this._StartTime;
    }

    set StartTime(value: number) {
        this._StartTime = value;
    }

    get EndTime(): number {
        return this._EndTime;
    }

    set EndTime(value: number) {
        this._EndTime = value;
    }
}