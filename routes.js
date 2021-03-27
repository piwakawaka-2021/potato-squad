const express = require('express')
const router = express.Router()
const fs = require('fs')
const file = require('./file')
const score = require('./score')


// question not selected 
router.get('/', (req, res) => {
    res.redirect("./quiz/1")
})

// new question 
router.get('/:id', (req, res) => {
    id = Number(req.params.id)
    path = "./data/questions.JSON"
    file.getQuestion(path, id, (data) => {
        res.render("quiz", data)
    })
})

// submitted question 
router.post('/:id', (req, res) => {
    // save answer 
    path = "./data/vegetables.JSON"
    nextID = Number(req.params.id) + 1


   const answer = req.body.submit
   console.log(answer)
   const array = answer.split(',')
    console.log(array)


    score.receiveAnswer(path, array, () => {
        res.redirect("./" + nextID)
   })
   
   
    
})

router.get('/vege', (req, res) => {
    id = Number(req.params.id)
    path = "./data/vegetables.JSON"
    fs.readFile(path, "utf-8", (err, data) => {
        const parsedData = JSON.parse(data)

        res.render('vege', parsedData)
      })
     
})



// Quiz Question do you sleep alot ? 

// potato 1 point


// you are a potato

module.exports = router
