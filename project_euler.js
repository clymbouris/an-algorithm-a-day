/*
Multiples of 3 and 5
Problem 1
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

function sumMultiples(threshold) {
	function getMultiples(num, arr) {
		var current = 0;
		while (current + num < threshold) {
			current = current + num;
			if (arr.indexOf(current) === -1) arr.push(current);
		}
		return arr;
	}	
	var multiples = [];
	multiples = getMultiples(3, multiples);
	multiples = getMultiples(5, multiples);

	return multiples.reduce(function(a, b) {
		return a + b;
	});
	
}

sumMultiples(1000); 