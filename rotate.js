function rotate(nums, k) {
    const result = nums.slice(k).concat(nums.slice(0, k));
    return result;
}
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 4));
// right rotate
function toRightRotate(a, d) {
    const array = [];
    for (let i = 0; i < a.length; i++) {
        array.push(a[i]);
    }
    for (let j = 1; j <= d; j++) {
        console.log(array.pop(array.unshift(array[array.length - 1])));
    }
    return array;
}
console.log(toRightRotate([1, 2, 3, 4, 5], 3));

function toLeftRotate(a, d) {
    const array = [];
    for (let i = 0; i < a.length; i++) {
        array.push(a[i]);
    }
    for (let j = 1; j <= d; j++) {
        console.log(array.shift(array.push(array[0])));
    }
    return array;
}
console.log(toLeftRotate([1, 2, 3, 4, 5], 3));
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.pop(arr.unshift(arr.length)));
console.log(arr);
