function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

function LinkedList() {
    this.head = null;
    this.tail = null;
}

LinkedList.prototype.addToHead = function(value) {
    let newNode = new Node(value, this.head, null);
    if (this.head)
        this.head.prev = newNode;
    else
        this.tail = newNode;
    this.head = newNode;
}

LinkedList.prototype.addToTail = function(value) {
    let newNode = new Node(value, null, this.tail);
    if (this.tail)
        this.tail.next = newNode;
    else
        this.head = newNode;
    this.tail = newNode;
}

LinkedList.prototype.removeHead = function() {
    if (!this.head)
        return null;
    let val = this.head.value;
    this.head = this.head.next;
    if (this.head)
        this.head.prev = null;
    else
        this.tail = null;
    return val;
}

// const ll = new LinkedList();

// ll.addToHead(100);
// ll.addToHead(200);
// ll.addToTail(300);

// ll.removeHead();

// console.log(ll.removeHead());

LinkedList.prototype.removeTail = function() {
    if (!this.tail)
        return null;
    let val = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail)
        this.tail.next = null;
    else
        this.head = null;
    return val;
}

LinkedList.prototype.search = function(val) {
    let current = this.head;
    while (current) {
        if (current.value === val)
            return val;
        current = current.next;
    }
    return null;
}

LinkedList.prototype.indexOf = function(val) {
    let arr = [];
    let current = this.head;
    let index = 0;
    while (current) {
        if (current.value === val)
            arr.push(index);
        current = current.next;
        index++
    }
    return arr;
}

const ll = new LinkedList();
ll.addToHead(100);
ll.addToHead(200);
ll.addToHead(300);
ll.addToHead(400);
ll.addToHead(500);
ll.addToHead(600);

console.log(ll.indexOf(100));

// console.log(ll.search(300));
// console.log(ll.search(123));