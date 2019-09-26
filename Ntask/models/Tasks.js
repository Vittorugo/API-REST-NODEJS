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
            len: [2,255],
            notEmpty: true,


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