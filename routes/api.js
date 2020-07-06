let express = require('express')
let router = express.Router()
const Note = require('../model/note')


router.get('/notes', function (request, response, next) {
    Note.findAll({raw:true}).then(function (notes) {
        response.send({status:0,data:notes})
    })

})

router.post('/notes/add', function (request,response, next) {
    let note = request.body.note
    Note.create({text:note}).then(function () {
        response.send({status:0})
    }).catch(function (err) {
        response.send({status:1,errMag:err})
    })
})

router.post('/notes/edit', function (req, res, next) {
    res.send('respond with a resource')
})

router.post('/notes/delete', function (req, res, next) {
    res.send('respond with a resource')
})

module.exports = router
