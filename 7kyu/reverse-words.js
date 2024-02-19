// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


function reverseWords(str) {
    const string = str.split(" ")
    let test = '';
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        test += element.split("").reverse().join("") 
    }
    const x = str.replaceAll(/[a-zA-Z!.,?]/g, '0');
    const reverstedString = test.split("").reduce((acc, l) => acc.replace('0', l), x);
    return reverstedString
}


reverseWords('The quick brown fox jumps over the lazy dog.')