/* # freeCodeCamp bonfires */

/*
Bonfire: Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
*/

function every(collection, pre) {
	var len = collection.length, i;
	for (i = 0; i < len; i++) {
		if (!collection[i][pre]) {
			return false;
		}
	}
	return true;
}

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

/*
Bonfire: Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/

function binaryAgent(str) {
	var arr = str.split(' '), result = [];
	arr.forEach(function(binary) {
		result.push(String.fromCharCode(parseInt(binary, 2)));
	});
	return result.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

/*
Bonfire: Steamroller
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamroller(arr) {
	var result = [], len = arr.length, i;
	for (i = 0; i < len; i++) {
		if (Array.isArray(arr[i])) {
			// Recursion
			result = result.concat(steamroller(arr[i]));
		}
		else {
			result.push(arr[i]);
		}
	}
	return result;
}

steamroller([1, [2], [3, [[4]]]]);

/*
Bonfire: Drop it
Drop the elements of an array (first argument), starting from the front,
until the predicate (second argument) returns true.

*/

function drop(arr, func) {
	var shifts = 0, i;
	for (i = 0; i < arr.length; i++) {
		if(!func(arr[i])) shifts++;
		else break;
	}
	var j;
	for (j = 0; j < shifts; j++) arr.shift();
	return arr;
}

drop([1, 2, 3, 9, 2], function(n) {
	return n > 2;
});

drop([1, 2, 3, 4], function(n) {
	return n > 5;
});

/*
Bonfire: Finders Keepers
Create a function that looks through an array (first argument) and returns the first element
in the array that passes a truth test (second argument).
*/

function find(arr, func) {
	return arr.filter(func)[0];
}

find([1, 2, 3, 4], function(num) {
	return num % 2 === 0;
});

/*
Bonfire: Sum All Primes
Sum all the prime numbers up to and including the provided number.

A prime number is defined as having only two divisors, 1 and itself.
For example, 2 is a prime number because it's only divisible by 1 and 2.
1 isn't a prime number, because it's only divisible by itself.

The provided number may not be a prime.
*/
function sumPrimes(num) {
	function isPrime(num) {
		var i;
		for (i = 2; i < num; i++) {
			if (num % i === 0) {
				return false;
			}
		}
		// 1 and negative numbers are not primes
		return num > 1;
	}
	var result = 0, i;
	for (i = num; i > 1; i--) {
		if(isPrime(i)) result = result + i;
	}
	return result;
}

/*
Bonfire: Sum All Odd Fibonacci Numbers
Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8,
and each subsequent number is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.
*/

function sumFibs(num) {
	function generateFib(max) {
		var fib = [0, 1],
		next, i;
		while (fib[fib.length - 1] + fib[fib.length - 2] <= max) {
			fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
		}
		return fib;
	}
	var fibonacci = generateFib(num);
	var odds = fibonacci.filter(function(val) {
		return (val % 2) ? true : false;
	});
	return odds.reduce(function(a, b) {
		return a + b;
	});
}

sumFibs(4);

/*
Bonfire: Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
	var result = str[0], len = str.length, i;
	for (i = 1; i < len; i++) {
		if (str[i].charCodeAt() === 32 || str[i].charCodeAt() === 95) {
			result = result + ' ';
		}
		else if (str[i] === str[i].toUpperCase() && result[i-1].charCodeAt() !== 32 && str[i].charCodeAt() !== 45) {
			result = result + ' ' + str[i];
		}
		else {
			result = result + str[i];
		}
	}
	return result.replace(/\s/g, '-').toLowerCase();
}

spinalCase("This Is Spinal Tap");
spinalCase("thisIsSpinalTap");

/*
Bonfire: Convert HTML Entities
Convert the characters...
& < > ' "
...in a string to their corresponding HTML entities.

notes:
http://dev.w3.org/html5/html-author/charref
*/

function convert(str) {
	var map = { "&amp;": /&/g, "&lt;": /</g, "&gt;": />/g, '&quot;': /"/g, "&apos;": /'/g },
	key;
	for (key in map) {
		str = str.replace(map[key], key);
	}
	return str;
}

convert("Dolce & Gabbana");

/*
Bonfire: Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values
in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order,
but with no duplicates in the final array.

The unique numbers should be sorted by their original order,
but the final array should not be sorted in numerical order.
*/

function unite(arr) {
	var arglen = arguments.length, arrays = [], result, i;
	for (i = 0; i < arglen; i++) {
		arrays.push(arguments[i]);
	}
	result = arrays.reduce(function(arr1, arr2) {
		arr1.forEach(function(elem) {
			var index = arr2.indexOf(elem);
			if (index !== -1) {
				arr2.splice(index, 1);
			}
		});
		return arr1.concat(arr2);
	});
	return result;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/*
Bonfire: Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

function boo(bool) {
	return (bool === true || bool === false) ? true : false;
}

boo(null);

/*
Bonfire: Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

notes:
Unicode table for English characters
http://www.ibm.com/developerworks/library/l-u-cyr/table4.jpg

*/

function fearNotLetter(str) {
	var unicode = [], len = str.length, i;
	for (i = 0; i < len; i++) {
		unicode.push(str.charCodeAt(i));
	}
	var result, j;
	for (j = 1; j < len; j++) {
		if (unicode[j] - unicode[j-1] !== 1) {
			result = String.fromCharCode(unicode[j] - 1);
			return result;
		}
	}
	return result;
}

fearNotLetter("abce");

/*
Bonfire: DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pair(str) {
	var pairs = { "A": "T", "T": "A", "C": "G", "G": "C" },
	strArr = str.split(''), result = [], i;
	for (i = 0; i < strArr.length; i++) {
		var key;
		for (key in pairs) {
			if (key === strArr[i]) {
				result.push([strArr[i], pairs[key]]);
				break;
			}
		}
	}
	return result;
}

pair("GCG");

/*
Bonfire: Pig Latin
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.
*/

function translate(str) {
	function isConsonant(character) {
		var consonants = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "X", "Z", "W", "Y"];
		var i;
		for (i = 0; i < consonants.length; i++) {
			if (character === consonants[i] || character === consonants[i].toLowerCase()) {
				return true;
			}
		}
		return false;
	}
	var consoCount = 0, character, i;
	for (i = 0; i < str.length; i++) {
		character = str[i];
		if (isConsonant(character)) {
			consoCount++;
		}
		else {
			break;
		}
	}
	return (consoCount === 0) ? str + "way" : str.substr(consoCount) + str.slice(0, consoCount) + "ay";
}

translate("algorithm");

/*
Bonfire: Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it.
For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

function myReplace(str, before, after) {
	var arr = str.split(' '), beforeIndex = arr.indexOf(before), beforeFirstChar = arr[beforeIndex][0];
	if (beforeFirstChar === beforeFirstChar.toUpperCase()) {
		after = after[0].toUpperCase() + after.slice(1);
	}
	arr[beforeIndex] = after;
	return arr.join(' ');
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");

/*
Bonfire: Where art thou
Make a function that looks through an array of objects (first argument)
and returns an array of all objects that have matching property and value pairs (second argument).
Each property and value pair of the source object has to be present
in the object from the collection if it is to be included in the returned array.

For example, if the first argument is
[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument),
because it contains the property and it's value, that was passed on as the second argument.
*/

function where(collection, source) {
	var arr = [];
	var keys = Object.keys(source);
	collection.forEach(function(obj) {
		var i, matches = 0;
		for(i = 0; i < keys.length; i++) {
			if(obj.hasOwnProperty(keys[i]) && obj[keys[i]] === source[keys[i]]) {
				matches++;
			}
		}
		if (matches === keys.length) {
			arr.push(obj);
		}
	});
	return arr;
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

/*
Bonfire: Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

*/

function convert(num) {
	var romans = {
		"M": 1000,
		"CM": 900,
		"D": 500,
		"CD": 400,
		"C": 100,
		"XC": 90,
		"L": 50,
		"XL": 40,
		"X": 10,
		"IX": 9,
		"V": 5,
		"IV": 4,
		"I": 1
	};
	var result = "", i;
	for(i in romans) {
		while(num >= romans[i]) {
			result = result + i;
			num = num - romans[i];
		}
	}
	return result;
}

/*
Bonfire: Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the original arrays.
*/

function diff(arr1, arr2) {
	if (arguments.length === 0) return [];
	var arr = arr1.concat(arr2);
	var result = arr.filter(function(elem) {
		return arr1.indexOf(elem) === -1 || arr2.indexOf(elem) === -1;
	});
	return result;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/*
Bonfire: Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.
*/

function sumAll(arr) {
  arr = arr || [0];
  var boundaries = function(action) {
	return arr.reduce(function(a, b) {
		return action(a, b);
	});
  };
  var min = boundaries(Math.min), max = boundaries(Math.max), result = 0, i;

  for (i = min; i <= max; i++) {
	result = result + i;
  }
  return result;
}

sumAll([1, 4]);

/*
Bonfire: Where do I belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument)
once it has been sorted.

For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, where([20,3,5], 19) should return 2 because once the array has been sorted
it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

*/

function where(arr, num) {
  arr.push(num);
  arr.sort(function(a, b) {
	return a - b;
  });
  return arr.indexOf(num);
}

where([40, 60], 50);



/*
Bonfire: Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function),
followed by one or more arguments. Remove all elements from the initial array that are of
the same value as these arguments.
*/

function destroyer(arr) {
	var arrInput = arguments[0], i;
	for (i = 1; i < arguments.length; i++) {
		while (arrInput.indexOf(arguments[i]) !== -1) {
		arrInput.splice(arrInput.indexOf(arguments[i]), 1);
		}
	}
  return arrInput;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

/*
Bonfire: Falsy Bouncer
Remove all falsy values from an array.

Falsy values in javascript are false, null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  arr = arr.filter(function(val) {
  	return (val);
  });
  return arr;
}

bouncer([7, "ate", "", false, 9]);


/*
Bonfire: Mutations
Return true if the string in the first element of the array contains all of the letters of the string 
in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string 
are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

function mutation(arr) {
  var str1 = arr[0].toLowerCase(), str2 = arr[1].toLowerCase();
  for (var i = 0; i < str2.length; i++) {
  	if (str1.indexOf(str2[i]) === -1) {
  		return false;
  	}
  }
  return true;
}

mutation(["hello", "hey"]);



/*
Bonfire: Slasher Flick
Return the remaining elements of an array after chopping off n elements from the head.

The head meaning the beginning of the array, or the zeroth index
*/

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  arr.splice(0, howMany)
  return arr;
}

slasher([1, 2, 3], 2);

/*
Bonfire: Chunky Monkey
Write a function that splits an array (first argument) 
into groups the length of size (second argument) 
and returns them as a multidimensional array.
*/

function chunk(arr, size) {
  var len = Math.ceil(arr.length / size), result = [], i;
  for (i = 0; i < len; i++) {
  	result.push(arr.splice(0, size));
  }
  return result;
}

chunk(["a", "b", "c", "d"], 2);

/*
Bonfire: Truncate a string
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a "..." ending.

Note that the three dots at the end add to the string length.

If the length of the string is less than or equal to 3 characters,
then the length of the three dots is not added to the string length.
*/

function truncate(str, num) {
	var append = "...", result = "";
	if (num >= str.length) {
		return str;
	}
	else if (num <= 3) {
		result = str.slice(0, num) + append;
	}
	else if (str.length >= num) {
		result = str.slice(0, num);
		result = result.slice(0, -append.length) + append;
	}
	return result;
}

truncate("A-tisket a-tasket A green and yellow basket", 11);




/*
Bonfire: Repeat a string repeat a string
Repeat a given string (first argument) n times (second argument). 

Return an empty string if n is a negative number.

*/

function repeat(str, num) {
  // repeat after me
  var i, result = "";
  for (i = 0; i < num; i++) {
  	result += str;
  }
  return result;
}

repeat("abc", 3);


/*
Bonfire: Confirm the Ending
Check if a string (first argument) ends with the given target string (second argument).

notes:
substr(start, [length])
The start is the index to start. It can be negative like -1 up to -String.length.
The length argument only counts forward so substr(-1, 100) will just produce 1 character
*/

function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var tail = str.substr(-target.length, target.length);
  return (target === tail) ? true : false;
}

end("Bastian", "n");


/*
Bonfire: Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i] .
*/

function largestOfFour(arr) {
	var result = [];
	if(typeof arr === 'undefined') {
		return result;
	}
  	arr.forEach(function(subarray) {
	  	result.push(largestOfOne(subarray));
  	});
  	return result;
}

function largestOfOne(array) {
	return array.reduce(function(a,b) {
	  	return (a > b) ? a : b;
	});
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
/*
Bonfire: Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/

function titleCase(str) {
  if(typeof str === 'undefined') {
  	return "";
  }

  var input = str.split(' '), result = [];
  input.forEach(function(word) {
  	result.push((word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()));
  });
  return result.join(' ');
}

titleCase("I'm a little tea pot");

/*
Bonfire: Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWord(str) {
	var words = str.split(' ');
	return words.reduce(function(a, b) {
		return (a.length > b.length) ? a : b;
	}).length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

/*
Bonfire: Check for Palindromes
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled th'e same way both forward and backward, ignoring punctuation, case, and spacing.

You'll need to remove punctuation and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
*/

function palindrome(str) {
 	var noPunc = removePunc(str).toLowerCase(), input = noPunc.split(''), len = input.length, i;
  	for (i = 0; i < len; i++) {
  		// if there's an odd middle then it equals itself
  		if(!(input[i] === input[len - 1 - i])) {
  			return false;
  		}
  	}
  	return true;
}

function removePunc(str) {
	var punctuations = ['.', '?', '!', ':', ';', '-', '_', '(', ')', '/', '\\', ' ', ',', '\'', '"', '}', '{', '#', '^', '`', '~'],
	    len = str.length, result = [], i;
  	for(i = 0; i < len; i++) {
  		var j, hasPunct;
  		for (j = 0; j < punctuations.length; j++) {
  			if (str[i] === punctuations[j]) {
  				hasPunct = true;
  				break;
  			}
  			else {
  				hasPunct = false;
  			}
  		}
  		if(!hasPunct) {
  			result.push(str[i]);
  		}
  	}
  	return result.join('');
}