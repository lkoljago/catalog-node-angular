module.exports = (Sequelize, config) => {
  
  const sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
    dialect: config.db.dialect,
    host: config.db.host,
    define : {
      timestamps : true,
      paranoid : true
    }
  });
  sequelize.authenticate().then(() => {
      console.log('Connection to database successful');
  }).catch((err) => {
      console.log('Unable to connect to database', err);
  });

  const User = require('./User')(Sequelize, sequelize);

  return {
      User,
      sequelize: sequelize,
      Sequelize: Sequelize,
  };
};