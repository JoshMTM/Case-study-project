const mongoose = require('mongoose')

const beerSchema = mongoose.Schema({
    id: {type: Number},
    image_url: {type: String},
    name: {type: String},
    description: {type: String}
})

module.exports = mongoose.model('Beer', beerSchema)