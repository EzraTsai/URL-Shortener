const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlshortenerSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Urlshortener', urlshortenerSchema)