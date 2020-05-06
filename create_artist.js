const Sequelize = require("sequelize");
//const prompt = require("prompt-promise");
const sequelize = new Sequelize("sequelize-exercises", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});
var response = [];

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
    
    //const albums = sequelize.define("albums", {
//albumName: "THe Squeezed Apple",
//yearReleased: "1998",
//albumDuration: 120,
//});

    const Model = Sequelize.Model;
    class Artist extends Model {}
    Artist.init(
        {
          id: {
            type: Sequelize.INTEGER,
            //autoIncrement: true,
            primaryKey: true,
          },
          artist_name: {
            type: Sequelize.STRING,
            // allowNull defaults to true
          },
        },
        {
          sequelize,
          modelName: "artist",
          tableName: "artist",
          timestamps: false,
        }
      );