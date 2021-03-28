const express = require('express')
const hbs = require('express-handlebars')

const routes = require('./routes')

const server = express()

// Server configuration
server.use(express.static("public"))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine("hbs", hbs({ extname: "hbs" }))
server.set("view engine", "hbs")

// Routes
server.use("/quiz", routes)

// Your routes/router(s) should go here
server.get("/", (req, res) => {
    res.render("home")
})

server.post("/", (req, res) => {
    res.redirect("./quiz/1")
})

module.exports = server

