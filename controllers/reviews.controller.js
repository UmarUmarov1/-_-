const { models } = require("mongoose");
const Review = require("../models/Review.model");

module.exports.reviewController = {
  addReview: function (req, res) {
    Review.create({
      textReview: req.body.textReview,
      nameAuthorReview: req.body.nameAuthorReview,
      book: req.body.book,
    }).then((review) => {
      res.json(review);
    });
  },
  getReview: function (req, res) {
    Review.find().populate({path:"book",
	populate:{
		path:"author",
		model:"Author"
	}
	
}).populate({path:"book",
populate:{
	path:'genre',
	model:'Genre'
}
}).then((review) => {
      res.json(review);
    });
  },
};