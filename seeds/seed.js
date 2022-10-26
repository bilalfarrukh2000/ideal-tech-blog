const sequelize = require('../config/connection');
const { Post } = require('../models');

const data= require('./post.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const posts = await Post.bulkCreate(data);
  console.log(posts);
}

seedDatabase();
