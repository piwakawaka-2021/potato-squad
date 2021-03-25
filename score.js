const file = require('./file')


// where vegetable is a string
function addPointToVegetable(vegetablesObj, vegetable) {
    if (!vegetablesObj.hasOwnProperty(vegetable)) {
        throw new Error("The vegetable:", vegetable, "can't be found")
    }
    vegetablesObj[vegetable]++
}

// updates JSON
function addScore(path, vegetableName, cb) {
    file.readJSON(path, (err, data) => {
        if (err) {
            console.log('Error reading file:',err)
            return
        }

        // increase veg score count by 1
        console.log("DATA:", data.vegetables )
        const vegetable = data.vegetables.find(element => element.name == vegetableName)
        vegetable.score += 1

        // write back to file
        file.writeJSON(path, data, () => console.log("Successfully updated data")) 
    })
}

addScore("./data/vegetables.JSON", "Potato", () => {
    console.log("added score??")
})