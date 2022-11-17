const { Router } = require('express');
const { authorController } = require('../controllers/authors.controller');
const router  = Router();

router.post('/author',authorController.addAuthor);
router.get('/author',authorController.getAuthor);

module.exports = router;