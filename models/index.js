const User = require("./User");
const Post = require("./Post");
const Description = require("./Description");

User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

Post.hasMany(Description, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

Description.belongsTo(Post, {
  foreignKey: "post_id",
});

User.hasMany(Description, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Description.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Post, Description };
