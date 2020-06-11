// Let's talk about how we can give our programs more of a dynamic type of behavior. So far we've just talked about implementing if statements an if statement isn't too handy without also having the ability to give a another option. The ability to have a if or an else, I love the way that they're described because you can read it almost like plain language.Where you can say if such and such is true.If this condition is met I want you to run everything inside of this section.Else, if not then I want you to show everything or run everything in this other section


var age = 30;

if (age <= 10) {
    console.log('You can eat from the kid menu');
} else {
    console.log('Adult menu time for you');
}

// compound conditionals

var age = 30

if (age <= 10) {
    console.log("You can eat from the kid's menu")
    console.log("You are not old enough to dirve")
    console.log("You are not old enough to reant a car")
} else if (age >= 16 && age < 25) {
    console.log("You can not eat from the kid's menu")
    console.log("You are old enough to dirve")
    console.log("You are not old enough to reant a car")
} else if (age >= 16 && age < 25) {
    console.log("You can not eat from the kid's menu")
    console.log("You are old enough to dirve")
    console.log("You are old enough to reant a car")
}