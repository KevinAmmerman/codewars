// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


function reverseWords(str) {
    const string = str.split(" ")
    let string2 = '';
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        string2 += element.split("").reverse().join("") 
    }
    const x = str.replaceAll(/[a-zA-Z!.,?]/g, '0');
    const reverstedString = test.split("").reduce((acc, l) => acc.replace('0', l), x);
    return reverstedString
}


function reverseWords(str) {
    return str.split(" ").map(word => word.split("").reverse().join("")).join(" ");
}