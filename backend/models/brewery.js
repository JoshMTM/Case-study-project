const mongoose = require('mongoose')

const beerSchema = mongoose.Schema({
    id: {type: Number},
    name: {type: String},
    description: {type: String},
    image_url: {type: String}
})

module.exports = mongoose.model('Beer', beerSchema)