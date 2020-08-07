const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortenerSchema = new Schema({
    fullUrl: {
        type: String,
        required: true
    }    
})
module.exports = mongoose.model('Shortener', shortenerSchema)