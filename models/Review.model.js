const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  textReview: String,
  nameAuthorReview: String,
  bookReview: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Book"
    },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;