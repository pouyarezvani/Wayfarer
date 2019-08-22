const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// Endpoint => 'api/v1/users'

// USER controllers
router.get('/:user_id', authRequired, ctrl.user.show),
router.get('/', authRequired, ctrl.user.index);
router.put('/:user_id', authRequired, ctrl.user.edit);
router.delete('/:user_id', authRequired, ctrl.user.delete);
router.post('/', authRequired, ctrl.user.create),

module.exports = router;
