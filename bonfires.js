/* # freeCodeCamp bonfires */

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