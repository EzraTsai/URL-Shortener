const mongoose = require('mongoose')
const Shortener = require('../shortener')
mongoose.connect('mongodb://localhost/URL-shortener', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
    console.log('mongoose error!')
})
db.once('open', () => {
    console.log('mongodb connected!')
    Shortener.create(
        { name: '6y7UP' },
        { name: 'jcmB3' },
        { name: 'Ecp3Y' }
        )
        .then(() => {
            console.log('finished')
            db.close()
        })

})