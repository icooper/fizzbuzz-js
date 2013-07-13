/**
 * fizzbuzz-silly.js
 * 
 * This is another silly JavaScript implementation of the "fizzbuzz" problem.
 * 
 * Ian Cooper
 * 13 July 2013
 *
 */

function Int(n) {
    this.value = n;
}

Int.prototype = {

    increment: function () {
	return ++this.value;
    },

    valueOf: function () {
	return this.value;
    },

    toString: function () {
	var output = "";
	
	if (this.value % 3 == 0) {
	    output += "Fizz"
	}
	
	if (this.value % 5 == 0) {
	    output += "Buzz"
	}
	
	if (output.length == 0) {
	    output = Number(this.value).toString();
	}

	return output;
    }
};

for (var i = new Int(0); i <= 100; i.increment()) {
    console.log(i.toString());
}


