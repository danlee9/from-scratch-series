function fibMemo(pos, cache) {
    cache = cache || [];
    if (cache[pos])
        return cache[pos];
    if (pos === 1 || pos === 2)
        return 1;

    cache[pos] = fibMemo(pos - 1, cache) + fibMemo(pos - 2, cache);
    return cache[pos];
}

console.log(fibMemo(50));