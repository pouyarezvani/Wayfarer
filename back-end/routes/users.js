const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// Endpoint => 'api/v1/users'

// USER controllers
router.get('/:user_id', ctrl.users.show);
router.get('/', ctrl.users.index);
router.put('/:user_id', ctrl.users.edit);
router.delete('/:user_id', ctrl.users.delete);
router.post('/', ctrl.users.create);

module.exports = router;
