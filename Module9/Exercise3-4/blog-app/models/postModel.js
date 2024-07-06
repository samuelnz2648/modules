module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING },
    likes: { type: DataTypes.INTEGER, defaultValue: 0 },
    comments: { type: DataTypes.JSON, defaultValue: [] },
  });

  Post.associate = (models) => {
    Post.belongsTo(models.User, { foreignKey: "userId" });
  };

  return Post;
};
