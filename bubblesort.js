const myarray = [1, 99, 49, 6, 11, 22, 34, 56, 29];
const bubble = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
};

bubble(myarray);
console.log(myarray);

const bubbles = (array, cb) => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (cb(array[j], array[j + 1]) > 0) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
};
bubbles(myarray, (a, b) => a - b);
console.log(myarray);
