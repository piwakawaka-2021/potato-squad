const express = require('express')
const router = express.Router()
const fs = require('fs')
const file = require('./file')



router.get('/:id', (req, res) => {
    id = Number(req.params.id)

    path = "./data/questions.JSON"
    file.getQuestion(path, id, cb)

    function cb(data) {
        res.render("quiz", data)
        // res.send(data)

    }
})

router.post('/:id', (req, res) => {
    // save answer 
   

    // redirect to the next question page 
    
})



// Quiz Question do you sleep alot ? 

// potato 1 point


// you are a potato

module.exports = router
