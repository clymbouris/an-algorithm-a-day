# freeCodeCamp bonfires
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