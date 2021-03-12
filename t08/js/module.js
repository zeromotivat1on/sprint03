class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(value) {
        let newNode = new Node(value);

        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    remove(value) {
        if (!this.head) {
            return null;
        }

        let deletedNode = null;

        while (this.head && this.head.value === value) {
            deletedNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;

        if (currentNode !== null) {
            while (currentNode.next) {
                if (currentNode.next.value === value) {
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }

        if (this.tail && this.tail.value === value) {
            this.tail = currentNode;
        }

        return deletedNode;
    }

    contains(value) {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;

        while (currentNode) {
            if (value !== undefined && currentNode.value === value) {
                return true;
            }
            
            currentNode = currentNode.next;
        }

        return false;
    }

    [Symbol.iterator]() {
        let element = this.head;

        return {
            next() {
                let value, done = true;

                if (element !== null) {
                    value = element.value;
                    done = false;
                    element = element.next;
                }
                
                return {
                    value: value,
                    done: done
                }
            }
        }
    }

    clear() {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;

        while (currentNode) {
            this.remove(currentNode.value);
            
            currentNode = currentNode.next;
        }
    }

    count() {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;
        let length = 0;
        
        while (currentNode) {
            length++;
            currentNode = currentNode.next;
        }

        return length;
    }

    log() {
        const arr = [];

        let currentNode = this.head;

        while (currentNode) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }

        console.log(arr);
    }
}