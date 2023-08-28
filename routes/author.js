const express = require('express');

const router = express.Router();

const authorController = require('../controllers/author');

router.post('/add-user', authorController.postAddUser);

router.get('/:userId', authorController.getUser);

module.exports = router;