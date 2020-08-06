const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000

mongoose.connect('mongodb://localhost/URL-shortener', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
    console.log('mongoose error!')
})
db.once('open', () => {
    console.log('mongodb connected!')
})

app.get('/', (req, res) => {
    res.send('worked')
})

app.listen(PORT, () => {
    console.log('App is listening on port: 3000')
})