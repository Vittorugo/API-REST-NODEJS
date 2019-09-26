/*module.exports = {

  username : 'root',
  password : 'root',
  database: 'ntask',
  host: '127.0.0.1',
  dialect: 'mysql',

}*/

const Sequelize  = require('sequelize')

const connection = new Sequelize('ntask', 'root', 'root', {

  host: '127.0.0.1',
  dialect: 'mysql'

})


module.exports = connection



 