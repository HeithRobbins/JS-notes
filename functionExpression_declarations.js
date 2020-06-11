// So far we've talked about building functions using this type of syntax where you say something like function greeting and then inside of it we can return something like Hey there.

function greeting() {
    return "Hi there!";
}

// And here we can just return say Hi there again and this is going to perform pretty much the same way in most cases.

var greeting = function () {
    return 'Hi there again';
};

// Let's test it out just to make sure. I say console log greeting and then pass this and let's rename this one we'll say greeting to and. Now if I copy this and call greeting two both of these should run.

var greetingTwo = function () {
    return 'Hi there again'
}
console.log(greeting())
console.log(greetingTwo())

// Now if I console log this out where I call build menu and then make sure you put your parens at the end of it.If I hit clear and run this you can see it says kids menu.

var age = 3

if (age <= 10) {
    var buildMenu = function () {
        return "Kids Menu"
    }

    function builderMenuTwo () {
        return "Another kids menu"
}
console.log(builderMenu())
console.log(builderMenuTwo())
}

