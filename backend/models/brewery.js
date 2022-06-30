const mongoose = require('mongoose')

const brewerySchema = mongoose.Schema({
    id: {type: String},
    name: {type: String},
    country: {type: String}
})

module.exports = mongoose.model('Brewery', brewerySchema)