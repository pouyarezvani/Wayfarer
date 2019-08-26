const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired.js');
const adminRequired = require('../middleware/adminRequired.js');


// Endpoint => 'api/v1/users'

// USER controllers
router.get('/:user_id', ctrl.users.show);
router.get('/', ctrl.users.index);
router.put('/:user_id', authRequired, ctrl.users.edit);
router.delete('/:user_id', adminRequired, ctrl.users.delete);
router.post('/', authRequired, ctrl.users.create);

module.exports = router;
