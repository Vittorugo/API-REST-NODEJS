const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const index = require('./routes/index') 
const task  = require('./routes/task')
const Sequelize  = require('sequelize')
const connection = require('./config/database')
const User  = require('./models/Users')
const Task  = require('./models/Tasks')

// configurações ...


    // middleware

        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())



    // conexão com o banco 

        

        /*

            Descomentar para verificar  se a conexao com o banco foi estabelica  
        */
        const connect = connection.authenticate().then( () => {

            console.log('Conectado ao banco!')

        }).catch( (err) => {

            console.log('Erro ao conectar ao banco:' + err)

        }).done()
        
    
        //User.sync({force:true})
        //Task.sync({force: true})

    //rotas 

        app.use(index)
        app.use(task)
    

    // conexao 

        const PORT  = 3000
        app.listen(PORT, () => { console.log(`Conectado na porta: ${PORT}`)}) // conectando  a porta 3000