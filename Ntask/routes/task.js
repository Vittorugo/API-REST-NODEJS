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


// Retornando do banco de dados uma task selecionada pelo id

task.get('/tasks/:id', (req, res) => {

    Task.findOne({where: req.params}).then( ( tasks ) => {

        if ( tasks) {

            res.status(200).json(tasks)
        }else{

            res.status(404).json({msg: "Id não encontrado no Banco"})
        }
        

    }).catch( (err) => {


        res.status(412).json({ msg:"Id não encontrado no banco!", erro: err})
    })
})


// Atualizando task através do id 

task.put('/tasks/:id', (req,res) => {

    Task.update(req.body, {where: req.params}).then( (taks) => {

        console.log(req.body)
        
        res.status(204).json({msg: "Alteração realizada com sucesso!"})
    
    }).catch( (err)=> {


        res.status(412).json({msg: "Erro ao realizar alteração!"})
    })


})


// Deletando uma task através do id 
    // ps: Como done é uma variável boolean o bd assume seus valores como 1 ou 0. Sendo assim, devemos passar 1 ou 0 na requisição.

    /*
    task.delete('/tasks/:done', (req, res) => { 

        console.log(req.params)
        Task.destroy({where: req.params}).then( ( result ) => {

            res.sendStatus(204)
        
        }).catch( (err) => {


            res.sendStatus(412)
            
        })

    })*/


    task.delete('/tasks/:id', (req, res) => { 

        console.log(req.params)
        Task.destroy({where: req.params}).then( ( result ) => {

            res.sendStatus(204)
        
        }).catch( (err) => {


            res.sendStatus(412)
            
        })

    })

module.exports = task