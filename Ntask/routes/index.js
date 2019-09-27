const express    = require('express')
const index = express.Router()


const User = require('../models/Users')


index.get('/', (req, res) => {

    res.send(" Home Page!")

})

module.exports = index