const fs = require('fs')

function readJSON(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
        if (err) {
            return cb && cb(err)
        }
        try {
            const object = JSON.parse(fileData)
            return cb && cb(null, object)
        } catch(err) {
            return cb && cb(err)
        }
    })
}

// returns question object 
function getQuestion(filePath, questionID, cb) {
    readJSON(filePath, (err, data) => {
        // get question 
        const question = data.questions.find(element => element.id == questionID)
        cb(question)
    })
}

function writeJSON(path, data) {
    fs.writeFile(path, JSON.stringify(data), (err) => {
        if (err) console.log('Error writing file:', err)
    })
}


module.exports = {
    getQuestion
}