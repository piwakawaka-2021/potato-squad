const express = require('express')
const router = express.router()
const fs = require('fs')
const file = require('./file')


router.get('quiz/:id', (req, res) => {
    id = Number(req.params.id)

    path = "./questions.json"
    file.getQuestion(path, id, cb)

    function cb(data) {
        res.render("Quiz", data)

    }
})



// Quiz Question do you sleep alot ? 

// potato 1 point


// you are a potato

module.exports = router
