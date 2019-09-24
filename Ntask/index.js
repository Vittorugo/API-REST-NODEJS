const express = require('express')
const app = express()
const index = require('./routes/index') 
const task  = require('./routes/task')


// configurações ...

    //rotas 

        app.use(index)
        app.use(task)
    
        // app.set('json spaces',4) //- melhorar a tabulação dos .json



    // conexao 

        const PORT  = 3000
        app.listen(PORT, () => { console.log(`Conectado na porta: ${PORT}`)}) // conectando  a porta 3000