const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// Endpoint => 'api/v1/users'

// USER controllers
router.get('/:id', authRequired, ctrl.user.show),
router.get('/', authRequired, ctrl.user.index);
// router.get('/:slug/edit', authRequired, ctrl.user.edit);
router.get('/:id/delete', authRequired, ctrl.user.delete);

module.exports = router;

