var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.star_wars_characters.findAll({}).then(function(dbCharacters) {
      console.log(dbCharacters);
      res.render("index", {
        msg: "Select your character!",
        characters: dbCharacters
      });
    });
   });

  // Load character page and pass in an character by id
  app.get("/character/:id", function(req, res) {
    db.star_wars_characters.findOne({ where: { id: req.params.id } }).then(function(dbCharacters) {
      res.render("character", {
        characters: dbCharacter
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
