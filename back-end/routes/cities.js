const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// Endpoint : 'api/v1/cities'

//User Profile
router.get('./:slug', authRequired, ctrl.users.show);
router.get('/', ctrl.users.index);
router.get('./:slug/edit', authRequired, ctrl.users.edit);
router.get('./:slug/delete', authRequired, ctrl.users.delete);

module.exports = router;