const express    = require('express')
const index = express.Router()


index.get('/', (req, res) => {

    res.json({status: "NTask API "})


})


module.exports = index