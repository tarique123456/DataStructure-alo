function quick(arr) {
    if (arr.length === 0) {
        return [];
    }
    const left = [];
    const right = [];
    const p = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < p) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quick(left).concat(p, quick(right));
}

console.log(quick([1, 45, 67, 2, 49, 79, 3, 12, 56]));
