import { expect } from "chai";
import { Queue } from "../lib/Queue";

describe("Data structures", () => {
    describe("Queue", () => {
        it("has size", () => {
            const testee = new Queue();
            const result = testee.size();
            expect(result).to.equal(0);
        })
        it("with one element added, has size", () => {
            const testee = new Queue();
            testee.enqueue("first element");
            const result = testee.size();
            expect(result).to.equal(1);
        })
        it("with two elements where one gets deleted, has size", () => {
            const testee = new Queue();
            testee.enqueue("first element");
            testee.enqueue(5);
            testee.poll();
            const result = testee.size();
            expect(result).to.equal(1);
        })
        it("with two elements where one gets deleted, has value", () => {
            const testee = new Queue();
            testee.enqueue("first element");
            testee.enqueue(5);
            let result = testee.poll();
            expect(result).to.equal("first element");
        })
        it("with no elements, is empty", () => {
            const testee = new Queue();
            const result = testee.isEmpty();
            expect(result).to.equal(true);
        })
        it("with two elements, is not empty", () => {
            const testee = new Queue();
            testee.enqueue("first element");
            testee.enqueue(5);
            const result = testee.isEmpty();
            expect(result).to.equal(false);
        })
        it("with two elements, returns the first element", () => {
            const testee = new Queue();
            testee.enqueue(33);
            testee.enqueue(5);
            let result = testee.peek();
            expect(result).to.equal(33);
        })
    })

    // describe("Factory", () => {
    //     it("can create Queue", () => {
    //         const structureType = DataStructures.Queue;
    //         const result = DataStructureFactory.create(structureType);
    //         expect(result).to.be.an.instanceOf(Queue);
    //     })
    // })
})