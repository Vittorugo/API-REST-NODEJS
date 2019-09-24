const express    = require('express')
const task = express.Router()


task.get('/task', (req, res ) => {

    res.json({

        tasks: [

            {title: "Fazer Compras"},
            {title: "Consertar o PC"}

        ]

    })

})


module.exports = task