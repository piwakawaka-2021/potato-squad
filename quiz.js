const file = require('./file')

// returns question object 
function getQuestion(filePath, questionID, cb) {
    file.readJSON(filePath, (err, data) => {
        // get question 
        const question = data.questions.find(element => element.id == questionID)
        const answer = data.questions.answer
        cb(question, answer)
    })
}

// finds total number of questions 
function getNumberOfQuestions(filePath, cb) {
    file.readJSON(filePath, (err, data) => {
        const n = data.questions.length
        cb(n)
    })
}

// when a quiz answer button has been pressed, add score to related vegetables
function receiveAnswer(path, arr, cb) {
    file.readJSON(path, (err, data) => {
        if (err) {
            console.log('Error reading file:', err)
            return
        }

        for (i = 0; i < arr.length; i++) {
            // increase veg score count by 1
            const vegetable = data.vegetables.find(element => element.name == arr[i])
            vegetable.score += 1
        }

        // write back to file
        file.writeJSON(path, data, () => {
            cb();
        })
    })
}

// get the final result
function getResultVegetable(path, cb) {
    file.readJSON(path, (err, data) => {
        if (err) {
            console.log('Error reading file:', err)
            return
        }
        let maxScore = 0;
        let maxIndex = 0;
        for (i = 0; i < data.vegetables.length; i++) {
            if (data.vegetables[i].score > maxScore) {
                maxScore = data.vegetables[i].score
                maxIndex = i
            }
        }
        cb(data.vegetables[maxIndex])
    })
}

// reset score on all vegetables 
function resetScore(path, cb) {
    file.readJSON(path, (err, data) => {
        if (err) {
            console.log('Error reading file:', err)
            return
        }

        // reset scores 
        for (i = 0; i < data.vegetables.length; i++) {
            data.vegetables[i].score = 0
        }

        file.writeJSON(path, data, cb)
    })
}

module.exports = {
    getQuestion, 
    getNumberOfQuestions,
    receiveAnswer,
    getResultVegetable,
    resetScore
}