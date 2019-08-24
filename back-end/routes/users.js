const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const middleware = require('../middleware');


// Endpoint => 'api/v1/users'

// USER controllers
router.get('/:user_id', ctrl.users.show);
router.get('/', ctrl.users.index);
router.put('/:user_id', `${middleware}/authRequred.js`, ctrl.users.edit);
router.delete('/:user_id', `${middleware}/adminRequred.js`, ctrl.users.delete);
router.post('/', `${middleware}/authRequred.js`,ctrl.users.create);

module.exports = router;
