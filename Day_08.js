let numbers = [5, 12, 3, 7, 9];

let max = numbers.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
}, numbers[0]);

console.log(max);  // Output: 12
