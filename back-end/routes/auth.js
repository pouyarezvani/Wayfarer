const router = require('express').Router(); 
const ctrl = require('../controllers')

router.post('/signup', ctrl.auth.signup); 
router.post('/login', ctrl.auth.login);

module.exports = router;
