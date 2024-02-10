// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!



/**
 * Generates a standardized phone number string from an array of single-digit numbers.
 * 
 * This function formats an array of 10 integers (0 through 9) into a string that represents
 * a phone number in the format "(XXX) XXX-XXXX". The input array is expected to contain exactly
 * 10 elements, where each element is a single digit from 0 to 9. The function constructs the phone
 * number string by slicing the array into three parts: the area code (first 3 digits), the middle part
 * (next 3 digits), and the last part (final 4 digits). These parts are then joined together and formatted
 * to match the standard phone number format. This utility is useful for displaying unformatted numeric
 * phone number data in a more readable and universally recognized format.
 * 
 * @param {number[]} numbers - An array of 10 integers, where each integer is a digit from 0 to 9, representing a phone number.
 * @returns {string} The formatted phone number as a string in the format "(XXX) XXX-XXXX".
 * 
 * @example
 * createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // returns "(123) 456-7890"
 * 
 * @remarks
 * The input array must contain exactly 10 elements, each of which should be a single digit (0-9). If the input
 * does not meet these criteria, the function's behavior is not guaranteed, and it may not return a valid phone
 * number format.
 * 
 * @author [author]
 * @version [version]
 * @complexity O(n) - where n is the length of the input array. The primary operations (slice, join) are linear
 * in the size of the portions of the array they process, making the overall complexity linear in the size of
 * the input array.
 * @since 2024-02-10
 */
function createPhoneNumber(numbers) {
    const firstPart = numbers.slice(0, 3).join('').replace(/[ ,]/g, "");
    const middlePart = numbers.slice(3, 6).join('').replace(/[ ,]/g, "");;
    const lastPart = numbers.slice(6, 10).join('').replace(/[ ,]/g, "");;
    return `(${firstPart}) ${middlePart}-${lastPart}`;
}