export interface IDataScructure {
    size(): number;
    add(value: any);
    poll(): any;
    isEmpty(): boolean;
    peek(): any;
}