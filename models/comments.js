const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Comments extends Model {
  checkPassword(pass){
    console.log(pass)
    return bcrypt.compareSync(pass, this.password)
  }
}

Comments.init(
  {  
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'user',
          key: 'id',
      },
    },
    blog_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'blog',
            key: 'id',
        },
    },
},
{

      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'comments',
    }
  );
  
  module.exports = Comments;