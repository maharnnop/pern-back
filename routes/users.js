const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.users.index);
router.post('/', ctrl.users.postUser);
router.get('/:index', ctrl.users.findUser);
router.delete('/:index', ctrl.users.deleteUser);
router.put('/:index', ctrl.users.editUser);

module.exports = router;