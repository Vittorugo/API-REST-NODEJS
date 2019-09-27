const express = require('express')
const user    = express.Router()

const Users = require('../models/Users')

user.get('/users', (req, res) => {

    Users.findAll({}).then( ( users ) => {

        
        res.status(200).json({msg: "Consulta realizada com sucesso!", users: users})
               
        
    }).catch( (err) => {


        res.status(404).json({error: err})
    })

})

user.post('/users', (req, res) => {

    Users.create({
        
        name: req.body.name,
        email: req.body.email
    
    }).then( (users) => {


        res.status(200).json({ msg: "Usurário cadastrado com sucesso!", users})
    
    }).catch( (err) => {

        res.status(404).json({ msg: "Erro ao cadastrar usuário!", error: err})
    })

})


user.delete('/users/:id', (req, res) => {

    Users.destroy({where: req.params}).then( () => {


        res.sendStatus(204)
    
    }).catch(( err ) => {

        res.sendStatus(412)
    })


})


module.exports = user