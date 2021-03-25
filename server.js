const express = require('express')
const hbs = require('express-handlebars')
const fs = require('fs')
const routes = require('./routes')

const server = express()

// Server configuration
server.use(express.static("public"))
server.use(express.urlencoded({ extended: false }))

server.use("/veges", routes)

// Handlebars configuration
server.engine("hbs", hbs({ extname: "hbs" }))
server.set("view engine", "hbs")

// Your routes/router(s) should go here
server.get("/", (req, res) => {
  fs.readFile("./data.json", "utf-8", (err, data) => {
    console.log(data)
    res.render("home", JSON.parse(data))
  })
})

module.exports = server
