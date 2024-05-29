// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         const letter = str[i];
//         if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
//             count++
//         }
//     }
//     console.log(count)
// }

function getCount(str) {
    return str.split('').reduce((acc, letter) => {
        if(letter.match(/[aeiouAEIOU]/g)) {
            acc++
        }
        return acc 
    }, 0)
}

getCount('abracadabra')