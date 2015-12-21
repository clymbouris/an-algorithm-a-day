/*
Power digit sum
Problem 16
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
*/

function sumDigits(num, pow) {
	var ans = Math.pow(num, pow).toString().split('');
    return ans.reduce((current, next) => {
    	return parseInt(current) + parseInt(next);
    });
}

sumDigits(2, 15); // 26
sumDigits(2, 1000); // JS can't handle such a big number but logic seems correct

/*
Special Pythagorean triplet
Problem 9
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 3(2) + 4(2) = 9 + 16 = 25 = 5(2).

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

http://stackoverflow.com/questions/16143499/pythagorean-triples-formula-in-javascript-project-euler-prob-9

Pythagoras
a2 + b2 = c2

Also we have
a + b + c = 1000

algebra, rearrange c to left
c = 1000 - (a + b)

insert c back in pythagoras
a2 + b2 = (1000 - (a + b))2

multiply out
a2 + b2 = 1000000 - 2000 * (a + b) + (a + b)2

multiply out
a2 + b2 = 1000000 - 2000 * (a + b) + a2 + 2 * a * b + b2

rearrange a2 + b2 to simplify
0 = 1000000 - 2000 * (a + b) + 2 * a * b

rearrange unknowns to left
2000 * (a + b) - 2 * a * b = 1000000

simplify, / 2
1000 * (a + b) - a * b = 500000

factorize
a(1000 - b) + 1000 * b = 500000

rearrange
a(1000 - b) = 500000 - 1000 * b

a = (500000 - 1000 * b) / (1000 - b)
*/

function PythagoreanProduct(sum) {
	var a, b, c;
	for (b = 1; b < sum; b++) {
		a = (500000 - 1000 * b) / (1000 - b);
		if (a === parseInt(a)) {
			c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
			console.log('a: ' + a, 'b: ' + b, 'c: ' + c);
			break;
		}
	}
	return a * b * c;
}



/*
Factorial digit sum
Problem 20
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!

NOTE: Unfortunately this can't work here because of a limitation in numbers in JavaScript. The number
returned from getFactorial function will be written in scientific notation so can't get that kind of precision

*/

function factDigitSum(num) {

	function getFactorial(num) {
		var i, product = 1;
		for (i = num; i > 0; i--) {
			product = product * i;
		}
		return product;
	}
	var product = getFactorial(num);
	return product.toString().split('').reduce(function(a, b) {
		return parseFloat(a) + parseFloat(b);
	});
}

factDigitSum(10); // 27
factDigitSum(21);
factDigitSum(100); // can't get answer


/*
Largest palindrome product
Problem 4
A palindromic number reads the same both ways.

The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

function largestPalindrome() {

	function isPalindrome(num) {
		var arr = num.toString().split('');
		var len = (arr.length - arr.length % 2) / 2,i;
		for (i = 0; i < len; i++) {
			if (!(arr[i] === arr[arr.length - 1 - i])) {
				return false;
			}
		}
		return true;
	}
	// Sure not the quickest way to do this as I'm comparing all 3-digit number products in existence!
	var i, top = 0;
	for (i = 999; i > 99; i--) {
		var j;
		for (j = 999; j > 99; j--) {
			if (isPalindrome(i * j)) {
				top = (top >= i * j) ? top : i * j;
			}
		}
	}
	return top;
}

/*
10001st prime
Problem 7
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

function getPrime(pos) {
	function isPrime(num) {
		var i;
		for (i = 2; i < num / 2; i ++) {
			if( num % i === 0) return false;
		}
		return num > 1;
	}
	function fetchPrime(pos) {
		var primes = [], i;
		for (i = 2; primes.length <= pos; i++) {
			if(isPrime(i)) primes.push(i);
		}
		return primes[primes.length - 1];
	}
	return fetchPrime(pos);
}

getPrime(10001); // 104743

/*
Sum square difference
Problem 6
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers
and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

function sumSqDiff(num) {
	var sumOfSq = 0, sqOfSum = 0, i;
	for (i = 1; i <= num; i++) {
		sumOfSq = sumOfSq + (i * i);
		sqOfSum = sqOfSum + i;
	}
	sqOfSum = sqOfSum * sqOfSum;
	return sqOfSum - sumOfSq;
}

/*
Summation of primes
Problem 10
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

function sumPrimes(threshold) {
	function getPrimes(threshold) {
		var primes = [2], i;
		for (i = 2; i < threshold; i++) {
			if (i % 2 !== 0 && isPrime(i)) primes.push(i);
		}
		return primes;
	}
	function isPrime(num) {
		var i;
		for (i = 2; i < num; i++) {
			if (num % i === 0) return false;
		}
		return num > 1;
	}
	var primes = getPrimes(threshold);
	return primes.reduce(function(a, b) {
		return a + b;
	});
}

// 142913828922


/*
Smallest multiple
Problem 5
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

function smallestMultiple(max) {
	function evenlyDivisible(num, max) {
		var i;
		for (i = 1; i <= max; i++) {
			if (num % i !== 0) return false;
		}
		return true;
	}
	var number = max * 2;
	while (!evenlyDivisible(number, max)) {
		number = number + max;
	}
	return number;
}

/*
Even Fibonacci numbers
Problem 2
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2,
the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

function sumEvenFibonacci(threshold) {
	function generateFibonacci(threshold) {
		var fibonacci = [1, 2];
		while (fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2] < threshold) {
			fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
		}
		return fibonacci;
	}
	var fibonacci = generateFibonacci(threshold),
	evenFibonacci = [], len = fibonacci.length, i;
	for (i = 0; i < len; i++) {
		if (fibonacci[i] % 2 === 0) evenFibonacci.push(fibonacci[i]);
	}
	return evenFibonacci.reduce(function(a, b) {
		return a + b;
	});
}


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