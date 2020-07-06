let express = require('express')
let router = express.Router()


router.get('/notes', function (req, res, next) {
    console.log('notes 1111111')
    res.send('respond with a resource')
})

router.post('/notes/add', function (req, res, next) {
    console.log('add.....')
    res.send('respond with a resource')
})

router.post('/notes/edit', function (req, res, next) {
    res.send('respond with a resource')
})

router.post('/notes/delete', function (req, res, next) {
    res.send('respond with a resource')
})

module.exports = router
