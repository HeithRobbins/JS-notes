// I have an object that holds a value I want to work with ( I want the username ).
var userObj = {
    username: "ryan"
}

// I have a function that I want to manipulate the value from that object, but not update the actual object itself.
function changeName(username) {
    return username = "semper-ry"
}

// To accompolish this, I need to pass my VALUE, not the object itself.

console.log(changeName(userObj.username)) // This passes just the value without referencing the entire object

// If I pass the entire object, I create a reference to it and run the risk of causing unwanted SIDE EFFECTS. 
function changeName(obj) {
    // running the function like this will have a side effect, which updates the original object
    return obj.username = "semper-ry"
}

console.log(changeName(userObj)) // This passes the entire object, and creates a reference to it.


// Play with reference vs value on your own, console log results etc...