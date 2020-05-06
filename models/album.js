'use strict';
module.exports = (sequelize, DataTypes) => {
  const album = sequelize.define('album', {
    albumName: DataTypes.STRING,
    yearReleased: DataTypes.DATE,
    albumDuration: DataTypes.INTEGER
  }, {});
  album.associate = function(models) {
    // associations can be defined here
  };
  return album;
};