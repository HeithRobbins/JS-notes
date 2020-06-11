//The topic is called hoisting. Hoisting is essentially a very specific way that the javascript interpreter actually reads variables. So we're going to go through some examples to see how this works. What this is going to essentially be related to, is where you should define your variables in your program. If you define them in the wrong order then you might run into some odd types of bugs. The way that hoisting works is, I'm not going to declare a variable I'm just going to assign a variable. If I have a variable like this 
name = 'Kristine' //and type out 
console.log(name)
// Hoisted
name = 'Kristine';
console.log(name); // 'Kristine'
var name;

// Initializers not hoisted
console.log(age); // undefined
var age = 33;