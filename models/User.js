module.exports = (Sequelize, sequelize) => {
  return sequelize.define("user", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });
}