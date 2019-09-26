const Sequelize  = require('sequelize')
const connection = require('../config/database')


const User = connection.define('Users', {

    id: {

        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,

    },

    name: {

        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Este campo não pode ser vazio!'
            }
        }
    },

    email: {

        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate:{
            isEmail: {
                msg: 'Este campo precisa ser um e-mail'
            }
        }

    },
})

User.associate = (models) => {

    Users.hasMany(models.Tasks) // associação 1 para muitos  entre os modelos 

}

module.exports = User