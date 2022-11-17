const { Router } = require('express');
const { genresController } = require('../controllers/genres.controller');
const router  = Router();

router.post('/genre', genresController.addGenres);
router.get('/genre', genresController.getGenres);

module.exports = router;