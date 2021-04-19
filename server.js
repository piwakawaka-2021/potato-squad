const express = require('express')
const hbs = require('express-handlebars')
const fs = require('fs')
const file = require('./file')

const routes = require('./routes')

const server = express()

// Server configuration
server.use(express.static("public"))
server.use(express.urlencoded({ extended: false }))

server.use("/quiz", routes)

// Handlebars configuration
server.engine("hbs", hbs({ extname: "hbs" }))
server.set("view engine", "hbs")

// Your routes/router(s) should go here
server.get("/", (req, res) => {
    path = "./data/vegetables.JSON"

    file.readJSON(path, cb)

    function cb(err, data) {
        // console.log(data.vegetables)
        res.render("home", data)
        // res.send(data)

    }
})

server.get('/vege', (req, res) => {
  id = Number(req.params.id)
  path = "./data/vegetables.JSON"
  fs.readFile(path, "utf-8", (err, data) => {
      const parsedData = JSON.parse(data)

      res.render('vege', parsedData)
    })
   
})

module.exports = server

