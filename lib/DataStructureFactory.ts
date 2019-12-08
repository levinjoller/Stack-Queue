import { Queue } from "./Queue";
import { Stack } from "./Stack";
import { Structure } from "./Structure";
import { IDataScructure } from "./IDataStructure";

export class DataStructureFactory{
    public static create (structure: Structure): IDataScructure{
        switch (structure) {
            case Structure.FIFO:               
                return new Queue();
            default:
                return new Stack();
        }
    }
}

export default DataStructureFactory;