// twosum
const array = [2, 5, 7, 2, 3, 4, 6, 8, 9];

function twosum(arr, goal) {
    let count = 0;
    const index = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === goal) {
                count++;
                index.push(`twoSum: ${i} & ${j}`);
                // index.push(`i: ${i}`);
                // index.push(`j: ${j}`);
            }
        }
    }
    console.log(`${count}`);
    return index;
}

console.log(twosum(array, 12));
function a(num) {
    let sums = 0;
    for (let i = 0; i <= num; i++) {
        sums += i;
    }
    return sums;
}
console.log(a(12));

// number
let num = 123145;
let sum = 0;

while (num !== 0) {
    sum += num % 10;
    num = parseInt(num / 10);
}
console.log(sum);

// count vowel
const vowels = ['a', 'e', 'i', 'o', 'u'];

function countsVowels(sentence) {
    let count = 0;
    const word = Array.from(sentence);

    word.forEach((value) => {
        if (vowels.includes(value)) {
            count++;
        }
    });
    return count;
}

console.log(countsVowels('i am tarique'));
