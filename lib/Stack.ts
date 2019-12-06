import { IDataScructure } from "./IDataStructure";

export class Stack implements IDataScructure{
    private stack: any[] = [];

    public size(): number{
        return this.stack.length;
    }

    public add(element: any){
        this.stack.push(element);
    }
    
    public poll(): any{
        let elementToPoll = this.peek();
        this.stack = [...this.stack.filter(x => x != elementToPoll)];
        return elementToPoll;
    }

    public isEmpty(): boolean{
        return this.size() == 0 ? true : false;
    }

    public peek(): any{
        return this.stack[this.stack.length - 1];
    }
}