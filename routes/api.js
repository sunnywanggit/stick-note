let express = require('express')
let router = express.Router()
const Note = require('../model/note')


router.get('/notes', function (request, response, next) {
    Note.findAll({raw:true}).then(function (notes) {
        response.send({status:0,data:notes})
    })

})

router.post('/notes/add', function (request,response, next) {
    Note.create({text:request.body.note}).then(function () {
        response.send({status:0})
    }).catch(function (err) { response.send({status:1,errMag:err}) })
})

router.post('/notes/edit', function (request, response, next) {
    Note.update({text:request.body.note},{where:{id:request.body.id}}).then(function () {
        response.send({status:0})
    })
})

router.post('/notes/delete', function (request, response, next) {
    Note.destory({where:{id:request.body.id}}).then(function () { response.send({status:0}) })
})

module.exports = router
