let stringOne =  "We are checking if this is a string"

stringOne


var str = 'The quick brown fox jumped over the lazy dog';

str.length(); // VM2349:1 Uncaught TypeError: str.length is not a function

str.length; // 44

str.charAt(2); // "e"

str.charAt(200); // ""

str.concat(' again and again'); // "The quick brown fox jumped over the lazy dog again and again"

str; // "The quick brown fox jumped over the lazy dog"

str.includes('quick'); // true

str.endsWith('dog'); // true

str.startsWith('Foo'); // false


////part2///

str.repeat(5); // "The quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dog"

str.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // null

'555-555-5555'.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // (4) ["555-555-5555", "555-", undefined, "555-", index: 0, input: "555-555-5555"]0: "555-555-5555"1: "555-"2: undefined3: "555-"index: 0input: "555-555-5555"length: 4__proto__: Array(0)

str.replace('fox', 'wolf'); // "The quick brown wolf jumped over the lazy dog"

'555-555-5555 is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // 0  // the way that search work is my index to find patterds? 

'Hi, 555-555-5555 is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // 4

str.indexOf('jumped'); // 20// with index of with found the word and bring you back the int(of the index)

str.lastIndexOf('jumped'); // 20  // the lastindex with found the last word of what you looking for and bring the indexof the int()

var str2 = str.concat('again and again');

str2.indexOf('again'); // 44
str2.lastIndexOf('again'); // 54


// part 3///
str.slice(4, 10); // "quick "

str.slice(-8); // "lazy dog"

str.slice(10); // "brown fox jumped over the lazy dog"

str.toUpperCase(); // "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG"

str.toLowerCase(); // "the quick brown fox jumped over the lazy dog"

var messyString = '    Hi there    ';

messyString.trim(); // "Hi there"

