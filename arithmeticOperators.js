2 + 2; // 4

2 - 2; // 0

2 / 2; // 1

2 * 10; // 20

5 % 2; // 1   //this gives us a remainder of 1 which is accurate

10 % 2; // 0 //This is where you see the modulus operator used the very most, whenever you need to find if a number is even or odd because if it is even it is always going to have a remainder of zero when it's some number % 2. So that is something that is very handy and you actually see this in quite a few programming exercises. So that's a good thing to keep in mind and that's when you would want to use it again.

8 % 2; // 0

2 ** 10; // 1024

var num = 2;

num++; // 2

++num; // 4

num; // 4

num--; // 4

num; // 3

--num; // 2

2++; // VM3506:1 Uncaught ReferenceError: Invalid left-hand side expression in postfix operation

++2; // VM3508:1 Uncaught ReferenceError: Invalid left-hand side expression in prefix operation

var someNum = 10;

var someOtherNum = -someNum;

someOtherNum; // -10

var strNum = '100';

var convertedNum = + strNum;

convertedNum; // 100