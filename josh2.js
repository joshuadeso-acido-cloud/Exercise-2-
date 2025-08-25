

function areValuesUnique(numbers) {
    return new Set(numbers).size === numbers.length;
}

console.log(areValuesUnique([1, 2, 3, 4]));
console.log(areValuesUnique([1, 2, 2, 4,]))