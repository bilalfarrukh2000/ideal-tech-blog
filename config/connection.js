const Sequelize = require('sequelize');
require('dotenv').config();



let sequelize;


  sequelize = new Sequelize(process.env.DB_LINK, {dialectOptions: {
    ssl: {
        rejectUnauthorized: false
    }
}});

module.exports = sequelize;