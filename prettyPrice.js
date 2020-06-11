function prettyPrice(gross, extension)
    // if (instanceof(this is not working)(extension, int))
    extension = extension * 0.01
    return int(gross) + extension

console.log(prettyPrice(100, 0.95))


// Jordon why of do doing it 

const prettyPrice = (grossPrice, extension) => {
    if (Number.isSafeInteger(extension)) {
        extension = extension * 0.01
    }
    return Math.floor(grossPrice) + extension
}

Math.floor(3.50)