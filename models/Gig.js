const Sequelize = require('sequelize')
    , db = require('../config/db')

module.exports =  db.define('gig' , {
    title: {
        type: Sequelize.STRING
    },
    technologies: {
        type: Sequelize.STRING
    },
    budget: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },  
    contact_email:{
        type: Sequelize.STRING
    },
    createdAt:{
        type: Sequelize.DATE
    },

    
})

