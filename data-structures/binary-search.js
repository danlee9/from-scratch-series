function BST(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

BST.prototype.insert = function(value) {
    if (value <= this.value) {
        if (!this.left)
            this.left = new BST(value);
        else
            this.left.insert(value);
    } else {
        if (!this.right)
            this.right = new BST(value);
        else
            this.right.insert(value);
    }
};

BST.prototype.contains = function(value) {
    if (this.value === value)
        return true;

    if (this.value > value && this.left)
        return this.left.contains(value);
    else if (this.value < value && this.right)
        return this.right.contains(value);

    return false;
};

// BST.prototype.depthFirstTraversal = function(func) {
//     if (this.value)
//         func(this.value);
//     if (this.left)
//         this.left.depthFirstTraversal(func);
//     if (this.right)
//         this.right.depthFirstTraversal(func);
//     return true;
// };

BST.prototype.depthFirstTraversal = function(func, order) {
    if (order === 'pre-order')
        func(this.value);
    if (this.left)
        this.left.depthFirstTraversal(func, order);
    if (order === 'in-order')
        func(this.value);
    if (this.right)
        this.right.depthFirstTraversal(func, order);
    if (order === 'post-order')
        func(this.value);
    return true;
};

BST.prototype.breadthFirstTraversal = function(func) {
    let queue = [this];
    while (queue.length) {
        let next = queue.shift();
        func(next.value);
        if (next.left)
            queue.push(next.left);
        if (next.right)
            queue.push(next.right);
    }
};

BST.prototype.getMinVal = function() {
    // let current = this;
    // while (current.left) {
    //     current = current.left;
    // }
    // return current.value;
    if (this.left)
        return this.left.getMinVal();
    else
        return this.value;
};

BST.prototype.getMaxVal = function() {
    // let current = this;
    // while (current.right) {
    //     current = current.right;
    // }
    // return current.value;
    if (this.right)
        return this.right.getMaxVal();
    else
        return this.value;
};

let bst = new BST(50);

bst.insert(30);
bst.insert(4);
bst.insert(1000);
bst.insert(20);
bst.insert(37);
bst.insert(889);
bst.insert(102);
bst.insert(1);
bst.insert(77);

// console.log(bst.contains(30));
// console.log(bst.contains(4));
// console.log(bst.contains(100000));
// console.log(bst.contains(5));
// console.log(bst.contains(77));

function simpleLog(value) {
    console.log(value);
}

// bst.depthFirstTraversal(simpleLog, 'post-order');

// bst.breadthFirstTraversal(simpleLog);

console.log(bst.getMinVal());
console.log(bst.getMaxVal());