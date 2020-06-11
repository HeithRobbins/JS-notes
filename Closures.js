function battingAverage() {
    var hits = 100
    var atBats = 300
    //this is one type of closure
    return {
        getCurrentAverage: function () {
            return (hits / atBats)
        },
        updateHitAndAtBats: function (hit, atBat) {
            hits += hit  // with this you are taking all the hits and add new hit (+1)
            atBats += atBat
        }
    }
}

var altuve = battingAverage()
console.log(altuve.getCurrentAverage())
altuve.updateHitAndAtBats(0, 20)
console.log(altuve.getCurrentAverage())