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


function writeJSON(path, data, cb) {
    fs.writeFile(path, JSON.stringify(data, null, 2), (err) => {
        if (err) console.log('Error writing file:', err)
        else cb()
    })
}


module.exports = {
    readJSON,
    writeJSON,
}