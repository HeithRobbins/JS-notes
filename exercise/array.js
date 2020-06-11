// [1, 2, 3, 4, 5]

// 1
// 5
// 2
// 4
// 3


class ArrayPooper {
    constructor(arr) {
        this.arr = arr
        this.atBeginning = true
    }

    togglePopper() {
        this.atBeginning = !this.atBeginning
        return this.atBeginning ? this.arr.pop() : this.arr.shift()
    }
}

const ap = new ArrayPooper([1, 2, 3, 4, 5])

ap.togglePopper()
ap.togglePopper()
ap.togglePopper()
ap.togglePopper()
ap.togglePopper()

class ArrayPooper {
    constructor(arr) {
        this.arr = arr
        this.atBeginning = true
    }

    togglePopper() {
        this.atBeginning = !this.atBeginning
        return this.atBeginning ? this.arr.pop() : this.arr.shift()
    }
}

const ap = new ArrayPooper([1, 2, 3, 4, 5])

console.log(ap.togglePopper())
console.log(ap.togglePopper())
console.log(ap.togglePopper())
console.log(ap.togglePopper())
console.log(ap.togglePopper())

const strap = new ArrayPooper(['Hi', 'there', 'from', 'JS', 'PY'])

console.log(strap.togglePopper())
console.log(strap.togglePopper())
console.log(strap.togglePopper())
console.log(strap.togglePopper())
console.log(strap.togglePopper())