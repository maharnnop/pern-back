const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.cashbooks.index);
router.post('/', ctrl.cashbooks.post);
router.get('/:index', ctrl.cashbooks.find);
router.delete('/:index', ctrl.cashbooks.deleteList);
router.put('/:index', ctrl.cashbooks.edit);

module.exports = router;