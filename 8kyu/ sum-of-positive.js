// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


// Version 1
function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element > 0) sum += element;
    }
    if(sum === 0) return 0
    else return sum;
}

// Version 2
function positiveSum(arr) {
    return arr.filter(n => n > 0).reduce((acc, n) => acc + n, 0)
}