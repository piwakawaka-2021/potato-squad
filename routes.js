const express = require('express')
const router = express.Router()
const fs = require('fs')
const file = require('./file')
const score = require('./score')



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
    path = "./data/vegetables.JSON"
   

   const answer = req.body.answer
   const array = answer.split(',')
    console.log(array)


    score.answerVegetables(path, array, cb)

    function cb (data) {
        res.send("done")
    }
   
   
    
})





// Quiz Question do you sleep alot ? 

// potato 1 point


// you are a potato

module.exports = router
