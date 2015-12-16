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