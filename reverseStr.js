function reverse(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return str === newStr ? 'palindrom' : 'not palindrom';
    // return rev;
}

console.log(reverse('madam'));
