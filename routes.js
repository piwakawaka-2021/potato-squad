const express = require('express')
const router = express.Router()
const quiz = require('./quiz')


// question not selected 
router.get('/', (req, res) => {
    res.redirect("./1")
})

// end results
router.get('/results', (req, res) => {
    // get most scored vege! 
    quiz.getResultVegetable("./data/vegetables.JSON", (data) => {
        res.render("results", data)
    })

})

// new question 
router.get('/:id', (req, res) => {
    id = Number(req.params.id)
    path = "./data/questions.JSON"

    // reset quiz
    if (id == 1) {
        quiz.resetScore("./data/vegetables.JSON", () => {
            quiz.getQuestion(path, id, (data) => {
                res.render("quizz", data)
            })
        })
    }
    else {
        quiz.getQuestion(path, id, (data) => {
            res.render("quizz", data)
        })
    }
})

// submitted question 
router.post('/:id', (req, res) => {
    // save answer 
    path = "./data/vegetables.JSON"
    nextID = Number(req.params.id) + 1

    const answer = req.body.submit
    const array = answer.split(',')

    quiz.receiveAnswer(path, array, () => {

        quiz.getNumberOfQuestions("./data/questions.JSON", (numberOfQuestions) => {
            // if there is a next question
            if (nextID <= numberOfQuestions) res.redirect("./" + nextID)

            // else go to final results 
            else res.redirect("./results")
        })
    })
})

module.exports = router
