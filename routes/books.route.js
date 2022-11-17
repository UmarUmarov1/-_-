const { Router } = require('express');
const { booksController } = require('../controllers/books.controller');
const router  = Router();

router.post('/book', booksController.addBooks);
router.get('/book', booksController.getBooks);
router.delete("/book/:bookId", booksController.removeBook);
router.patch("/book/:bookId", booksController.updateBook);
router.get("/book/:bookId", booksController.getBookById);
router.get("/book/genre/:genreId", booksController.getBooksByGenre);

module.exports = router;