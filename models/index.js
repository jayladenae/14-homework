const User = require('./user');
const Blogs = require('./blogs');
const Comments = require('./comments');

User.hasMany(Blogs, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blogs.belongsTo(User, {
  foreignKey: 'user_id'
});

Blogs.hasMany(Comments, {
  foreignKey: 'Blog_id',
  onDelete: 'CASCADE'
});

Comments.belongsTo(User,{
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Blogs, Comments };