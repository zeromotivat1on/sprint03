/*
    In order to check if it works correctly - install Line Server from Visual Code extensions,
    and then in right left corner (blue line) press 'Go Live'
*/

import * as list from "./module.js";

function createLinkedList(arr) {
    let ll = new list.LinkedList();
    for(const n of arr) {
        ll.add(n);
    }
    return ll;
}


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
