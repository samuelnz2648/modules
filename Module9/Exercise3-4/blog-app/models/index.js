const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = require("./userModel")(sequelize, Sequelize.DataTypes);
db.Post = require("./postModel")(sequelize, Sequelize.DataTypes);

db.User.associate(db);
db.Post.associate(db);

module.exports = db;
