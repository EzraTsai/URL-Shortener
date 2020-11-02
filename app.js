const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const routes = require('./routes')
const Shortener = require('./models/shortener')
const app = express()
const PORT = process.env.PORT || 3000

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/URL-shortener'
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
    console.log('mongoose error!')
})
db.once('open', () => {
    console.log('mongodb connected!')
})

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(routes)

app.get('/:shortUrl', (req, res) => {
    const params = req.params.shortUrl
    Shortener.findOne({ shortUrl: params })
        .lean()
        .then(item => {
            res.redirect(item.fullUrl)
        })
        .catch(error => console.log(error))
})

app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`)
})