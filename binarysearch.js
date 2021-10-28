function binarySearch(arr, key) {
    let low = 0;
    let high = arr.length - 1;
    let mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);

        if (arr[mid] === key) {
            return mid;
        }
        if (arr[mid] < key) {
            low = mid + 1;
        }
        if (arr[mid] > key) {
            high = mid - 1;
        }
    }
    return -1;
}

const arr = [1, 3, 5, 7, 8, 9, 12, 14];

console.log(binarySearch(arr, 15));

function linerSearch(arr1, key) {
    for (let i = 0; i < arr1.length - 1; i++) {
        if (arr1[i] === key) {
            return `index number is => ${i}`;
        }
    }
    return -1;
}
console.log(linerSearch(arr, 12));
