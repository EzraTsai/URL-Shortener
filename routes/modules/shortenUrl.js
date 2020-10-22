const express = require('express')
const router = express.Router()
const Shortener = require('../../models/shortener')

router.get('/', (req, res) => {
    Shortener.find({ shortUrl: req.params.shortUrl })
        .lean()
        .then( res.redirect('/'))
})

module.exports = router