const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i'];

function missing(arr) {
    for (let i = 1; i < arr.length; i++) {
        const prev = arr[i - 1].charCodeAt();
        const current = arr[i].charCodeAt();

        if (current - prev !== 1) {
            return String.fromCharCode(prev + 1);
        }
    }
    return null;
}
console.log(missing(array));
