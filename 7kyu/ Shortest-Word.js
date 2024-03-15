// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    const arrayNumbers = s.split(" ").map(e => e.length)
    return Math.min(...arrayNumbers)
}