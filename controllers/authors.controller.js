const Author = require("../models/Author.model");

module.exports.authorController = {
  addAuthor: function (req, res) {
    Author.create({
      nameAuthor: req.body.authorName,
      biography: req.body.biography,
    }).then((author) => {
      res.json(author);
    });
  },
  getAuthor: function (req, res) {
    Author.find().then((author) => {
      res.json(author);
    });
  },
};