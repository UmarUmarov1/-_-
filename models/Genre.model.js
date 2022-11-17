const mongoose = require("mongoose");

const genreSchema = mongoose.Schema({
  genreTitle: String,
  genreDescription: String
});

const Genre = mongoose.model("Genre", genreSchema);

module.exports = Genre;