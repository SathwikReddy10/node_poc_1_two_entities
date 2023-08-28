const express = require('express');

const bookController = require('../controllers/books');

const router = express.Router();

router.get('/:userId',bookController.getBooksByAuthor);

router.post('/:userId', bookController.postAddBook);

router.patch('/:bookId', bookController.patchEditBook);

router.delete('/:bookId', bookController.deleteBook);

module.exports = router;