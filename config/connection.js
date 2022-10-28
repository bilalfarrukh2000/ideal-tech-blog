const Sequelize = require('sequelize');
require('dotenv').config();



let sequelize;

if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DB_LINK, {dialectOptions: {
    ssl: {
        rejectUnauthorized: false
    }
}});
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PWD,    
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    },
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0',
  );
}

module.exports = sequelize;