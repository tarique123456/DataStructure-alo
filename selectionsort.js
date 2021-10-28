function selectionsort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let minindex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minindex]) {
                minindex = j;
            }
        }

        [array[i], array[minindex]] = [array[minindex], array[i]];
    }
    return array;
}

// const myarray = [1, 99, 49, 6, 11, 22, 34, 56, 29];

// selectionsort(myarray);
// console.log(myarray);

console.log(selectionsort([2, 99, 49, 6, 11, 22, 34, 56, 29, 1]));
