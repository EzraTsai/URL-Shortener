const mongoose = require('mongoose')
const Schema = mongoose.Schema
const generateURL = require('../generater')

const shortenerSchema = new Schema({
    fullUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        default: generateURL(),
        type: String,
        require: true
    }
})
module.exports = mongoose.model('Shortener', shortenerSchema)