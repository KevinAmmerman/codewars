// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// More examples in the test cases.

// Good luck!



// First i look for the numbers that are double in the array
// Second i filter all the numbers out that were double
// Third i sum up and return the result
function repeats(arr) {
    const singleNums = arr.filter((num, index) => arr.indexOf(num) !== index)
    const noDublicates = arr.filter((num) => !singleNums.includes(num))
    return noDublicates.reduce((a, b) => a + b);
};