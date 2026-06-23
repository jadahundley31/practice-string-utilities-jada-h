/*Part 2: Practicing String Utilities
1. Create the stringUtils.js Module:
○ Define and export the following functions:
■ capitalize(str): Converts the first letter of a string to
uppercase.
■ reverse(str): Reverses the characters in a string.
■ contains(str, substr): Checks if a substring exists within a
string and returns true or false.*/

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
//console.log(capitalize('hello'));

function reverse(str) {
    return str.split('').reverse().join('');
}
//console.log(reverse('hello'));

function contains(str, substr) {
    return str.includes(substr);
}
//console.log(contains('hello','p'));

module.exports = {capitalize, reverse, contains};