const express    = require('express')
const task = express.Router()


const Task = require('../models/Tasks')


// Listando todos os dados Encontrados na tabela Tasks 

task.get('/tasks', (req, res) => {

    Task.findAll({}).then( ( tasks ) => {

        res.status(200).json({ msg: "Consulta Realizada com sucesso!", tasks})

    }).catch( (err) => {


        res.status(400).json({msg: "Erro ao consultar!"})
    })


})


// Cadastrando novo valor na tabela Tasks

task.post('/tasks', (req, res ) => {

    /*
    try {
        
        const { title , done } = req.body

        let task = await Task.create({

            title,
            done
        })

        res.status(200).send(task)

    } catch (error) {
        res.status(400).send({err: error})        
    }*/


    Task.create({

        title: req.body.title,
        done: req.body.done

    }).then( (tasks) => {


        res.status(200).json({msg: "Tarefa cadastrada com sucesso!", tasks})
    
    }).catch( (err) => {


        res.status(400).json({msg: "Erro ao cadastrar!", error: err})
    })

})




module.exports = task