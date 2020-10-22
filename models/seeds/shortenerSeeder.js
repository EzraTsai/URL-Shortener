const mongoose = require('mongoose')
const Shortener = require('../shortener')
const generateURL = require('../../generater')
mongoose.connect('mongodb://localhost/URL-shortener', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
    console.log('mongoose error!')
})
db.once('open', () => {
    console.log('mongodb connected!')
    Shortener.create(
        {
            shortUrl: generateURL(),
            fullUrl: 'https://www.youtube.com/watch?v=SLpUKAGnm-g'
        },
        {
            shortUrl: generateURL(),
            fullUrl: 'https://lighthouse.alphacamp.co/courses/42/assignments/1239'
        }
    )
        .then(() => {
            console.log('finished')
            db.close()
        })
})