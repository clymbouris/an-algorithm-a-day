/*
[2015-10-26] Challenge #238 [Easy] Consonants and Vowels
submitted 1 month ago by jnazario2 0
Description

You were hired to create words for a new language. However, your boss wants these words to follow a strict pattern
of consonants and vowels. You are bad at creating words by yourself, so you decide it would be best to randomly generate them.
Your task is to create a program that generates a random word given a pattern of consonants (c) and vowels (v).
Input Description

Any string of the letters c and v, uppercase or lowercase.
Output Description

A random lowercase string of letters in which consonants (bcdfghjklmnpqrstvwxyz) occupy the given 'c' indices
and vowels (aeiou) occupy the given 'v' indices.
Sample Inputs

cvcvcc

CcvV

cvcvcvcvcvcvcvcvcvcv
Sample Outputs

litunn

ytie

poxuyusovevivikutire
Bonus

Error handling: make your program react when a user inputs a pattern that doesn't consist of only c's and v's.
When the user inputs a capital C or V, capitalize the letter in that index of the output.
*/

function createWord(str) {
	var result = [],
	len = str.length, i;
	for (i = 0; i < len; i++) {
		if (str[i] !== 'c' && str[i] !== 'C' && str[i] !== 'v' && str[i] !== 'V') {
			result = 'Input should consist only of "v" for vowels and "c" for consonants';
			return result;
		}
		result.push(getWord(str[i]));
	}
	function getWord(char) {
		var consonants = 'bcdfghjklmnpqrstvwxyz',
		vowels = 'aeiou', selection;

		if (char === 'c' || char === 'C') {
			var index = Math.floor(Math.random() * consonants.length),
			selection = consonants;
		}
		else if (char === 'v' || char === 'V') {
			var index = Math.floor(Math.random() * vowels.length),
			selection = vowels;
		}
		return (char === char.toUpperCase()) ? selection[index].toUpperCase() : selection[index];
	}
	return result.join('');
}


/*
[2015-11-02] Challenge #239 [Easy] A Game of Threes
submitted 1 month ago by Blackshell2 0
Background

Back in middle school, I had a peculiar way of dealing with super boring classes.
I would take my handy pocket calculator and play a "Game of Threes". Here's how you play it:

First, you mash in a random large number to start with. Then, repeatedly do the following:
If the number is divisible by 3, divide it by 3.
If it's not, either add 1 or subtract 1 (to make it divisible by 3), then divide it by 3.
The game stops when you reach "1".
While the game was originally a race against myself in order to hone quick math reflexes,
it also poses an opportunity for some interesting programming challenges. Today, the challenge is
to create a program that "plays" the Game of Threes.

Challenge Description

The input is a single number: the number at which the game starts.
Write a program that plays the Threes game, and outputs a valid sequence of steps you need to take to get to 1.
Each step should be output as the number you start at, followed by either -1 or 1
(if you are adding/subtracting 1 before dividing), or 0 (if you are just dividing).
The last line should simply be 1.

Input Description

The input is a single number: the number at which the game starts.
100

Output Description

The output is a list of valid steps that must be taken to play the game.
Each step is represented by the number you start at, followed by either -1 or 1 (if you are adding/subtracting 1 before dividing),
or 0 (if you are just dividing). The last line should simply be 1.
100 -1
33 0
11 1
4 -1
1

Challenge Input

31337357
*/

// first attempt
function gameOfThrees(num) {
	while (num !== 1) {
		if (num % 3 === 0) {
			console.log(num, 0);
			num = num / 3;
		}
		else if ((num + 1) % 3 === 0) {
			console.log(num, 1);
			num = (num + 1) / 3;
		}
		else if ((num - 1) % 3 === 0) {
			console.log(num, -1);
			num = (num - 1) / 3;
		}
	}
	return num;
}

// second attempt
function gameOfThrees(num) {
	while (num > 1) {
		var op = (-num - 1) % 3 + 1;
		console.log(num, op);
		num = (num + op) / 3;
	}
	return num;
}

/*
[2015-12-14] Challenge # 245 [Easy] Date Dilemma
submitted 1 day ago by Blackshell2 0
Description

Yesterday, Devon the developer made an awesome webform, which the sales team would use to record
the results from today's big new marketing campaign, but now he realised he forgot to add a validator
to the "delivery_date" field! He proceeds to open the generated spreadsheet but, as he expected,
the dates are all but normalized... Some of them use M D Y and others Y M D, and even arbitrary separators are used! Can you help him parse all the messy text into properly ISO 8601 (YYYY-MM-DD) formatted dates before beer o'clock?

Assume only dates starting with 4 digits use Y M D, and others use M D Y.
Sample Input

2/13/15
1-31-10
5 10 2015
2012 3 17
2001-01-01
2008/01/07
Sample Output

2015-02-13
2010-01-31
2015-05-10
2012-03-17
2001-01-01
2008-01-07
*/

function validateDate(str) {
	var seperators = ['-', ' ', '/'], strArr;
	var i;
	for (i = 0; i < str.length; i++) {
		var j;
		for (var j = 0; j < seperators.length; j++) {
			if (str.indexOf(seperators[j]) !== -1) {
				strArr = str.split(seperators[j]);
			}
			if (strArr) break;
		}
	}
	if (strArr[0].length !== 4) {
		strArr.push(strArr.shift());
		strArr.push(strArr.shift());
	}
	if (strArr[0].length !== 4) {
		strArr[0] = '20' + strArr[0];
	}
	return strArr.join('-');
}