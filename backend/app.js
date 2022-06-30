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
    res.setHeader(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept, x-rapidapi-key, x-rapidapi-host")
    res.setHeader(
        "Access-Control-Allow-Methods", 
        "GET, POST, PATCH, DELETE, OPTIONS")
    next()
})

// fetch from angular the search-content and automatically retrieve from the brewery-API the corresponding brewery
app.post("/api/beers", (req, res, next) => {
    const breweryName = req.body.content
    const name = breweryName.toLowerCase()
    const result = name.replace(/ /g, '_')  

    request({ url: url + '?beer_name=' + result, method: 'GET' }, (error, response) => {
        const data = JSON.parse(response.body)
        console.log(data)
        
        if (data.message !== "Couldn't find Brewery") {
            const beer = new Beer ({
                id: data[0].id,
                name: data[0].name,
                description: data[0].description
            })

                console.log(beer)

                beer.save()
        }
    })
    res.status(201).json({
        message: 'Sucessfully retrieved data from frontend' 
    })
})

app.get("/api/beers", (req, res, next) => {
    Beer.find()
    .then(data => {
        console.log(data)
        res.status(200).json({
            message: "Successfully retrieved beers",
            beers: data
        })
        
    })
    
})

app.use("/api/beers", (req, res, next) => {
    const beers = [
        {
        id: "saldkasd",
        name: "Guiness",
        content: "very goood"
    }]

    res.status(200).json({
        message: "beer fetched succesfully",
        beers: beers
    })
})


// app.post("/api/books", (req, res, next) => {
//     const book = req.body
//     console.log(book)
//     res.status(201).json({
//         message: 'Booked save succesfully'
//     })
// })

// app.use((req, res, next) => {
//     console.log('First middleware');
//     next();
// })

// app.use((req, res, next) => {
//     res.send('from backend')
// })


module.exports = app