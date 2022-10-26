const User = require('./User');
const Post = require ('./Post');

User.hasMany(Post, {
  foreignKey:User.id
})

module.exports = {
    User,
    Post
  };