const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const shortenUrl = require('./modules/shortenUrl')

router.use('/', home)
router.use('/:shortUrl', shortenUrl)

module.exports = router