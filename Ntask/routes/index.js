const express    = require('express')
const index = express.Router()
const bodyParser = require('body-parser')

const User = require('../models/Users')


index.post('/', async (req, res) => {

    try {

        const { name , email } = req.body

        const user = await User.create({

            name,
            email

        })

        return res.status(200).send(user)

    } catch (err) {

        return res.status(400).send( { error: err})
    }

})


module.exports = index