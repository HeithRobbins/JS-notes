var players = [
    'Altuve',
    'Bregman',
    'Correa',
    'Springer'
]

players.forEach(function(element) {
    console.log(element)
})


for (player in players) { // 
    console.log(player)
    console.log(players[player])
}


for (var i = 0; i < players.length i++) {
    console.log(players[i])
}

var student = {
    name: 'Kristine',
    age: 12,
    city: 'Scottsdale'
};

for (var key in student) {
    console.log(key + " => " + student[key]);
}


 
var players = [
    'Altuve',
    'Bregman',
    'Correa',
    'Springer'
];

var i = 0;
while (i < players.length) {
    console.log(players[i]);
    i++;
}

var i = 21;
do {
    console.log(players[i]);
    i++;
} while (i < players.length)