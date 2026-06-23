/*2. Test the Module in app.js:
○ Import the stringUtils.js module into app.js.
○ Test each function with different string inputs and log the results to
the console.*/

const stringUtils = require('./stringUtils.js')

console.log(stringUtils.capitalize('javascript'));
console.log(stringUtils.reverse('javascript'));
console.log(stringUtils.contains('javascript', 'q'));
