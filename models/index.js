const User = require('./user');
const Post = require('./post');
const Description = require('./description');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

Post.hasMany(Description, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

Description.belongsTo(Post, {
  foreignKey: 'post_id',
});

User.hasMany(Description, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Description.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Post, Description};
