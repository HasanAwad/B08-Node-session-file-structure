const express = require('express');
const router = express.Router();
const StudentsController = require('../controllers/StudentsController');

/* GET users listing. */
router.get('/', StudentsController.getAll);
router.get('/:id', StudentsController.get);

router.post('/', StudentsController.post);
router.put('/:id', StudentsController.put);
router.delete('/:id', StudentsController.delete);

module.exports = router;
