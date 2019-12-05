import { IDataScructure } from "./IDataStructure";

export class Queue implements IDataScructure {
    private queue: any[] = [];

    public size(): number {
        return this.queue.length;
    }

    public enqueue(value: any){
        this.queue = [...this.queue, value];
    }

    public poll(): any{
        let elementToPoll = this.queue[0];
        this.queue = [...this.queue.filter(x => x != this.queue[0])];
        return elementToPoll;
    }

    public isEmpty() :boolean{
        return this.size() == 0 ? true : false;
    }

    public peek(): any{
        return this.queue[0];
    }
}