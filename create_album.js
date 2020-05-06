const Sequelize = require("sequelize");
const prompt = require("prompt-promise");
const sequelize = new Sequelize("sequelize-exercises", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});

var response = [];
const db = require("./models");

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);

    prompt("album: ")
      .then(function album(val) {
        response.push(val);
        return prompt("year: ");
      })

      .then(function year(val) {
        response.push(val);
        return prompt("artist id: ");
      })

      .then(function artistId(val) {
        response.push(val);
        console.log(response);

        db.album.create({
          //albumName: "The Squeezed Apple",
          //yearReleased: "1998",
          //albumDuration: 120,
        });

        prompt.done();

        //return prompt("Would you like to add another record?: ");
      });

    //.then(function album(val) {
    console.log(album);
  });
