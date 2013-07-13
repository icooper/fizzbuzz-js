/**
 * fizzbuzz.js
 * 
 * This is a JavaScript implementation of the "fizzbuzz" problem.
 * 
 * Ian Cooper
 * 13 July 2013
 *
 */

fmt = function (n) {
    var output = "";

    if (n % 3 == 0) {
	output += "Fizz"
    }

    if (n % 5 == 0) {
	output += "Buzz"
    }

    if (output.length == 0) {
	output = n;
    }

    return output;
};

for (var i = 0; i <= 100; i++) {
    console.log(fmt(i));
}
