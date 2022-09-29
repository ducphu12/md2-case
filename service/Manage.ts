export interface Manage<T>{
    find(id:number);
    add(t:T);
    edit(id:number, t:T);
    delete(id:number);
    show();


}