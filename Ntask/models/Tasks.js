const Sequelize = require('sequelize')
const connection = require('../config/database')

const Task = connection.define( 'Tasks', {

    id: {

        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },

    title: {

        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: {

                args: [2,255],
                msg: "Titulo muito curto"
            },
            notEmpty: {
                msg: "Este campo não pode estar vazio!"
            },


        }

    },

    done: {

        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    
    }


})

Task.associate = (models) => {

    Tasks.belongsTo(models.Users)

}


module.exports = Task