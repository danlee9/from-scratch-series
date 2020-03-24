function HashTable(size) {
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
}

HashTable.prototype.hash = function(key) {
    let total = 0;
    for (let i=0; i<key.length; i++) {
        total += key.charCodeAt(i);
    }
    let bucket = total % this.numBuckets;
    return bucket;
}

HashTable.prototype.insert = function(key, value) {
    let index = this.hash(key);
    if (!this.buckets[index])
        this.buckets[index] = new HashNode(key, value);
    else if (this.buckets[index].key === key) {
        this.buckets[index].value = value;
    } else {
        let current = this.buckets[index];
        while (current.next) {
            if (current.next.key === key) {
                current.next.value = value;
                return;
            }
            current = current.next;
        }
        current.next = new HashNode(key, value);
    }
};

HashTable.prototype.get = function(key) {
    let index = this.hash(key);
    let bucket = this.buckets[index];
    while (bucket) {
        if (bucket.key === key)
            return bucket.value;
        bucket = bucket.next;
    }
    return null;
}

HashTable.prototype.retrieveAll = function() {
    let arr = [];
    this.buckets.forEach(bucket => {
        while (bucket) {
            arr.push(bucket);
            bucket = bucket.next;
        }
    });
    return arr;
}

var ht = new HashTable(30);


ht.insert('Dean', 'dean@gmail.com');
ht.insert('Megan', 'megan@gmail.com');
ht.insert('Dane', 'dane@yahoo.com');
ht.insert('Dean', 'deanmachine@gmail.com');
ht.insert('Megan', 'megansmith@gmail.com');
ht.insert('Dane', 'dane1010@outlook.com');
ht.insert('Joey', 'joey@facebook.com');
ht.insert('Samantha', 'sammy@twitter.com');

// console.log(ht.buckets);
// console.log(ht.get('Dane'));
console.log(ht.retrieveAll());


