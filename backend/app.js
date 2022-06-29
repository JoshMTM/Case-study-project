express = require('express')
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json());

app.post("/api/books", (req, res, next) => {
    const book = req.body
    console.log(book)
    res.status(201).json({
        message: 'Booked save succesfully'
    })
})

app.use((req, res, next) => {
    console.log('First middleware');
    next();
})

app.use((req, res, next) => {
    res.send('from backend')
})


module.exports = app