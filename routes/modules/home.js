const express = require('express')
const router = express.Router()
const Shortener = require('../../models/shortener')

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/', (req, res) => {
    const fullUrl = (req.body.fullUrl)
    Shortener.create({ fullUrl })
        .then(shortener => {
            const orgUrl = req.protocol + "://" + req.get('host') + req.originalUrl
            let a = shortener.shortUrl
            let newUrl = orgUrl + a
            res.render('generate', { newUrl, fullUrl })
        })
        .catch(error => console.log(error))
})

module.exports = router