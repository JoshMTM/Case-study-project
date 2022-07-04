
const express = require('express')
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const Beer = require('./models/brewery')
const app = express()
const request = require('request')

app.use(bodyParser.json())
const url = 'https://api.punkapi.com/v2/beers'

mongoose.connect("mongodb+srv://vladiepops:0YMYJNWqFK8ejaJ8@beerapp.gxkxh.mongodb.net/?retryWrites=true&w=majority")
.then( () => {
    console.log('Connected to database!')
})
.catch( () => {
    console.log('Connection failed!')
})


// below is to allow the backend-frontend communication when running on different local servers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200")
    res.setHeader(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept, x-rapidapi-key, x-rapidapi-host")
    res.setHeader(
        "Access-Control-Allow-Methods", 
        "GET, POST, PATCH, DELETE, OPTIONS")
    next()
})

// ------------------------ all backend links

// get beers from API by search name
app.post("/api/getbeers", (req, res, next) => {
    const searchItem = req.body.content.toLowerCase().replace(/ /g, '_')

    request({ url: url + '?beer_name=' + searchItem, method: 'GET' }, (error, response) => {
        const data = JSON.parse(response.body)
        res.status(201).json({
            message: 'Sucessfully found beers from API' ,
            data
        })
    })
})

// get beers for home page
app.get("/api/getbeers", (req, res, next) => {
    request({ url: url, method: 'GET' }, (error, response) => {
        const data = JSON.parse(response.body)
        res.status(201).json({
            message: 'Sucessfully fetching beers from backend' ,
            data
        })
    })
})

// retrieve all the beers stored in database (favorites)
app.get("/api/beers", (req, res, next) => {
    Beer.find()
    .then(data => {
        res.status(200).json({
            message: "Successfully retrieved beers from database",
            beers: data
        })
        
    })
    
})

// save a beer to database
app.post("/api/beers", (req, res, next) => {
    const id = req.body.content
    console.log(id)
    request({ url: url + '?ids=' + id, method: 'GET' }, (error, response) => {
        const data = JSON.parse(response.body)
        const beer = new Beer ({
            id: data[0].id,
            name: data[0].name,
            description: data[0].description,
            image_url: data[0].image_url
        })
        beer.save()
        res.status(201).json({
            message: 'Sucessfully saved beer to database'
        })
    })

})

// delete beer from database
app.delete("/api/beers/:id", (req, res, next) => {
    const id = req.params.id

    Beer.deleteOne({
        id
    }
    )
    .then(data => {
        res.status(200).json({
            message: "Successfully deleted beer from database"
        })
    })
})

module.exports = app;
