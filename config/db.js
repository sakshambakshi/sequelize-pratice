const Sequelize = require('Sequelize')


module.exports = new Sequelize('codegig', 'root', '', {
    host: 'localhost',
    // dialect:  'mysql' | 'mariadb'
    dialect:  'mysql' ,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    });
    


