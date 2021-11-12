const sequelize = require('../config/connection');
const { User, Blogs } = require('../models');

const userData = require('./users.json');
const blogData = require('./blogs.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const user = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const blog = await Blogs.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();