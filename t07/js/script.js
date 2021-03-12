class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
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

function createLinkedList(arr) {
    let ll = new LinkedList();
    for(const n of arr) {
        ll.add(n);
    }
    return ll;
}

/*
const ll = createLinkedList([100, 1, 2, 3, 100, 4, 5, 100]);
ll.log(); // "100, 1, 2, 3, 100, 4, 5, 100"
while(ll.remove(100));
ll.log(); // "1, 2, 3, 4, 5"
ll.add(10);
ll.log(); // "1, 2, 3, 4, 5, 10"
console.log(ll.contains(10)); // "true"
console.log(ll.count());
let sum = 0;
for(const n of ll) {
    sum += n;
}
console.log(sum); // "25"
ll.clear();
ll.log(); // ""
*/