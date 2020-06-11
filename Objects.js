var user = { 
    name: 'Kristine',
    age: 12,
    city: 'Scottsdale',
    grades: {               // this is how you do nest objects
        math: 90,
        science: 80,
        lanaguageArts: 100
    }
}
user.grades.coding = 99 // what this is going to due is update the grade with a key of coding and grade what was stated
console.log(user.age)
console.log(user.grades.math) // this is how you would pull just the math from grades

typeof 12;
// "number"

typeof 'Astros';
// "string"

typeof true;
// "boolean"

typeof { name: "Kristine" };
// "object"

var age;
// undefined

typeof age;
// "undefined"

age = null;
// null

typeof age;
// "object"