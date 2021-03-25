const file = require('./file')


// where vegetable is a string
function addPointToVegetable(vegetablesObj, vegetable) {
    if (!vegetablesObj.hasOwnProperty(vegetable)) {
        throw new Error("The vegetable:", vegetable, "can't be found")
    }
    vegetablesObj[vegetable]++
}

// updates JSON
function addScore(path, data, cb) {
    file.readJSON(path, (err, vegetable) => {
        if (err) {
            console.log('Error reading file:',err)
            return
        }
    // increase customer order count by 1
        vegetable.score += 1

        file.writeJSON(path, data, () => console.log("Successfully updated data")) 
    })
}

