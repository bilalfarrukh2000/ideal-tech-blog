const Sequelize = require('sequelize');
require('dotenv').config();



let sequelize;


  sequelize = new Sequelize(process.env.DB_LINK,  null, null, {})



module.exports = sequelize;