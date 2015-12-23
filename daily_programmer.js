/*
[2015-12-23] Challenge # 246 [Intermediate] Letter Splits
submitted 6 hours ago by fvandepitte
This problem is a simplified version of Text Segmentation in Natural Language Processing.
Description
Given a positive integer, return all the ways that the integer can be represented by letters using the mapping:
1 -> A
2 -> B
3 -> C
...
25 -> Y
26 -> Z
For example, the integer 1234 can be represented by the words :
ABCD -> [1,2,3,4]
AWD -> [1,23,4]
LCD -> [12,3,4]
Input description
A positive integer:
Output description
All possible ways the number can be represented once per line.
*/



/*
Description
We are going to calculate how long we can light our X-mass lights with 1 battery.
First off all some quick rules in the electronics:

- All things connected in parallel share the same voltage, but they have their own current.
- All things connected in serial share the same current, but they have their own voltage.
Parallel:
----O----
 |     |
 ---O---
Serial:
---O---O---
We are going to use 9V batteries for our calculation. They suply a voltage of 9V (Volt) (big surprise there)
and have a capacity from around 1200mAh (milliAmpere hour).

The lifetime of the battery can be calculate by deviding the capacity by the total Amperes we draw.

E.g. If we have a 9V battery and we use a light that uses 600 mA, we can light the light for 2 hours (1200/600)

For our lights we'll use average leds, wich need an voltage of 1.7V and a current of 20mA to operate.
Since we have a 9V we can have a max of 5 leds connected in serial. But by placing circuits in parallel,
we can have more than 5 leds in total, but then we'll drain the battery faster.

Part 1
As input you'll be given the length in hours that the lights needs te be lit. You have give me the max number of led's we can have for that time
Input
1
Output
300
Explanation:
We can have 5 leds in serial, but then they'll take only a current of 20mA. The battery can give us 1200mA for 1 hour. So if we devide 1200 by 20 we get that we could have 60 times 5 leds.

Part 2
Draw out the circuit. A led is drawn in this way -|>|-
input
20
Output
*--|>|---|>|---|>|---|>|---|>|--*
 |                             |
 --|>|---|>|---|>|---|>|---|>|--
 |                             |
 --|>|---|>|---|>|---|>|---|>|--

Part 3
Our circuit is not complete without a resistor to regulate the current and catch the voltage difference.
We need to calcute what the resistance should be from the resistor. This can be done by using Ohm's law.
We know we can have 5 leds of 1.7V in serie, so that is 0.5V over the resistor.
If we know the current we need we can calculate the resistance.

E.g. If we need 1 hour we can have a current of 1200 mA and we have 0.5V so the resistance is the voltage
divided by the current. => 0.5(V)/1.2(A) = 0.417 ohms
inputs
1
4
8
Outputs
0.417
1.667
3.333

Part 4
Putting it all Together
You'll be given 5 numbers, the voltage drop over a Led, the current it needs, the voltage of the battery
and the capacity and the time the leds need to be lit.

The units are in voltage V, current mA (divide by 1000 for A), voltage V, capacity (mAh), timespan h
input
1.7 20 9 1200 20 (ledV, ledmA, batteryV, batteryCapacity, hours)
Output
Resistor: 8.333 Ohms
Scheme:
*--|>|---|>|---|>|---|>|---|>|--*
 |                             |
 --|>|---|>|---|>|---|>|---|>|--
 |                             |
 --|>|---|>|---|>|---|>|---|>|--

*/

function maxLeds(ledV, ledmA, batteryV, batteryCapacity, hours) {
	var ledsMax = Math.floor(batteryV / ledV);
	var leds = Math.floor(ledsMax * (batteryCapacity / ledmA));
	return leds;
}

function drawCircuit(leds) {
	var led = "-|>|-", line = "-", vertical = "|", circuit = "", ledsPerLine = Math.floor(batteryV / ledV),
	i;
	for (i = 0; i < leds; i++) {
		if (i >= ledsPerLine && i % 5 === 0) {
			circuit += line + "\n|";
			var len = (line.length + led.length) * ledsPerLine, j;
			for (j = 0; j < len; j++) {
				circuit += " ";
			}
			circuit += "|\n";
		}
		circuit += line + led;
	}
	return circuit;
}



function getResistance(V, I, hours) {
	var R = V / I;
	return (R * hours).toFixed(3);
}

getResistance(0.5, 1.2, 1)


/*

97
[2015-11-09] Challenge #240 [Easy] Typoglycemia
submitted 1 month ago * by G33kDude1 1
Description

Typoglycemia is a relatively new word given to a purported recent discovery about how people read written text.
As wikipedia puts it:
The legend, propagated by email and message boards, purportedly demonstrates that readers can understand the
meaning of words in a sentence even when the interior letters of each word are scrambled.
As long as all the necessary letters are present, and the first and last letters remain the same, readers
appear to have little trouble reading the text.

Or as Urban Dictionary puts it:
Typoglycemia
The mind's ability to decipher a mis-spelled word if the first and last letters of the word are correct.
The word Typoglycemia describes Teh mdin's atbiliy to dpeihecr a msi-selpeld wrod if the fsirt and lsat lteetrs of the wrod are cerorct.

Input Description
Any string of words with/without punctuation.

Output Description
A scrambled form of the same sentence but with the word's first and last letter's positions intact.
Sample Inputs

According to a research team at Cambridge University, it doesn't matter in what order the letters in a word are, 
the only important thing is that the first and last letter be in the right place. 
The rest can be a total mess and you can still read it without a problem.
This is because the human mind does not read every letter by itself, but the word as a whole. 
Such a condition is appropriately called Typoglycemia.
Sample Outputs

Aoccdrnig to a rseearch taem at Cmabrigde Uinervtisy, it deosn't mttaer in waht oredr the ltteers in a wrod are, 
the olny iprmoatnt tihng is taht the frist and lsat ltteer be in the rghit pclae. 
The rset can be a taotl mses and you can sitll raed it wouthit a porbelm. 
Tihs is bcuseae the huamn mnid deos not raed ervey lteter by istlef, but the wrod as a wlohe. 
Scuh a cdonition is arppoiatrely cllaed Typoglycemia.
*/

// my attempt
function typoglycemia(str) {
	var words = str.split(' ');
	return words.map(word => {
		var newWord = word[0], len = word.length - 1;
		if(len !== 0) {
			var chars = [], i;
			for (i = 1; i < len; i++) {
				if (i % 2 === 0 || word[i] === ',' || word[i] === '.' || word[i] === '\'') {
					chars.push(word[i]);
				}
				else {
					chars.unshift(word[i]);
				}
			}
			var j;
			for (j = 0; j < chars.length; j++) {
				newWord += chars[j];
			}
			newWord += word[len];
		}
		return newWord;
	}).join(' ');
}

// seems much more solid solution (taken from forums)
function typoglycemia(input){
    return input.replace(/\b\w+\b/gm,function(word){
        var w, glyc = word;
        while (glyc === word && word.length >= 4){
            w = word.split('');
            glyc = w.shift() + '';
            while (w.length > 1) glyc += w.splice(Math.random() * w.length - 1, 1);
            glyc += w.length ? w[0] : '';
        }
        return glyc;
    });
}

str = "The legend, propagated by email and message boards," +
" purportedly demonstrates that readers can understand the meaning" +
" of words in a sentence even when the interior letters of each word" +
" are scrambled. As long as all the necessary letters are present, and the" +
" first and last letters remain the same, readers appear to have little trouble reading the text."


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