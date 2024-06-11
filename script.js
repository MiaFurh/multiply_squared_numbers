function squareSum(numbers) {
    let sum = 0;
    let i = 0;

    while (i < numbers.length) {
        sum += numbers[i] * numbers[i];
        i++;
    }
    return sum;
}
console.log(squareSum([1, 2, 2]));
console.log(squareSum([10, 12, 2]));