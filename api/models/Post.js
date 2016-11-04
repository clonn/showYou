/**
 * Post.js
 *
 */
module.exports = {
  attributes: {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    videoUrl: {
      type: Sequelize.STRING,
      allowNull: false
    },
    describe: {
      type: Sequelize.STRING,
    }
  },
  associations: function() {
    Post.belongsTo(User, {});
  },
  options: {
    paranoid: true,
    classMethods: {},
    instanceMethods: {
    
    }
    // underscored: true
  }
};
