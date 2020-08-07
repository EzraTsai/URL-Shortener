const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const Shortener = require('./models/shortener')
const shortener = require('./models/shortener')
const generaterURL = require('./generater')
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

app.engine('hbs', exphbs({ defaultLayout: 'main', extname:'.hbs'}))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req,res) => {
    const fullUrl = (req.body.fullUrl)
    const shortUrl = generaterURL(req,res)
    res.render('generate', { fullUrl, shortUrl })
})

app.listen(PORT, () => {
    console.log('App is listening on port: 3000')
})