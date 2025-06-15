var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

numbers.sort((a, b) => a - b);

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] === numbers[i - 1]) {
        numbers.splice(i, 1);
        i--;
    }
}

console.log(numbers);
