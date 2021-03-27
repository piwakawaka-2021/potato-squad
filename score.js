const file = require('./file')



// updates JSON
function addScore(path, vegetableName) {
    console.log("add score called")
    file.readJSON(path, (err, data) => {
        if (err) {
            console.log('Error reading file:',err)
            return
        }

        // increase veg score count by 1
        // console.log("DATA:", data.vegetables )
        // console.log(data)
        const vegetable = data.vegetables.find(element => element.name == vegetableName)
        console.log(vegetable)
        vegetable.score += 1
        console.log("added score: " + vegetable.name)

        // write back to file
        file.writeJSON(path, data, null) 
    })
}

function answerVegetables(path, arr, cb) {
    // console.log(arr)
    for (i=0; i<arr.length; i++) {
       console.log(arr[i])
       console.log(path)
        addScore(path, arr[i])
    }
    // cb();
}

function getTotalScore(path, cb) {
    file.readJSON(path, (err, data) => {
        if (err) {
            console.log('Error reading file:',err)
            return
        }
        let score = 0;
        for (i=0; i<data.vegetables.length; i++) {
            score += data.vegetables[i].score;
        }

        cb(score)

    })
}

// addScore("./data/vegetables.JSON", "Potato", () => {
//     console.log("added score??")
// })


module.exports = {
    answerVegetables
}