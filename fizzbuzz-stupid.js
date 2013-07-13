/**
 * fizzbuzz-stupid.js
 * 
 * This is a stupid JavaScript implementation of the "fizzbuzz" problem.
 * 
 * Ian Cooper
 * 13 July 2013
 *
 */

var oldToString = Number.prototype.toString;
Number.prototype.toString = function (n) {
    var output = "";

    if (this % 3 == 0) {
	output += "Fizz"
    }

    if (this % 5 == 0) {
	output += "Buzz"
    }

    if (output.length == 0) {
	output = oldToString.call(this);
    }

    return output;
};

for (var i = 0; i <= 100; i++) {
    console.log(Number(i).toString());
}
