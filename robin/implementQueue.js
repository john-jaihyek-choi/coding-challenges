// You've just received intel that your local market has received a huge shipment of toilet paper! In desperate need, you rush out to the store. Upon arrival, you discover that there is an enormously large line of people waiting to get in to the store. You step into the queue and start to wait. While you wait, you being to think about data structures and come up with a challenge to keep you busy. Your mission: create a queue data structure. Remember, queues are FIFO - first in first out - in nature. Your queue should be a class that has the methods "add" and "remove". Adding to the queue should store an element until it is removed.

// Brainstorm:
// Queue;
    // FIFO: First in First out
// Methods:
    // Add:
        // will add the value to the end of the queue
    // Remove:
        // will remove the value of the front (the very bottom) of the queue;
    
class Queue {
    constructor(value) {
        this.list = value ? [value] : [];
        this.size = value ? 1 : 0;
    }

    add(value) {
        this.list.push(value);
        this.size++;
        return this.list;
    }

    remove() {
        this.list.shift();
        this.size--;
        return this.list;
    }

}

const newQueue = new Queue();

console.log(newQueue.add(2));
console.log(newQueue.add(3));
console.log(newQueue.add(4));
console.log(newQueue.remove());
console.log(newQueue.remove());