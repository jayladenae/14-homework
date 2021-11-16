const User = require('./user');
const Project = require('./project');
const Comments = require('./comments');


User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

Comments.belongsTo(User, {
  foreignKey:'user_id',

});

Project.hasMany(Comments, {
  foreignKey:'project_id'
})


module.exports = { User, Project, Comments };
