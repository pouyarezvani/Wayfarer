const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// Endpoint => 'api/v1/users'

// USER controllers
router.get('/:slug', authRequired, ctrl.users.show),
router.get('/', authRequired, ctrl.users.index);
// router.get('/:slug/edit', authRequired, ctrl.user.edit);
router.get('/:slug/delete', authRequired, ctrl.user.delete);

module.exports = router;

