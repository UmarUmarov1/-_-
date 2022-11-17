const Genre = require("../models/Genre.model");

module.exports.genresController ={
	addGenres: function (req, res) {
		Genre.create({ 
			genreTitle: req.body.genreTitle, 
			genreDescription: req.body.genreDescription }).then((author) => {
		  res.json(author);
		});
	 },
	 getGenres: function(req,res) {
		Genre.find().then((genre) => { res.json(genre) })
	 }
}