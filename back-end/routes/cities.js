const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');
// Endpoint : 'api/v1/cities'

//City Routes
router.get('/:city_id', ctrl.city.show);
router.get('/', ctrl.city.index);
router.put('/:city_id', ctrl.city.update);
router.delete('/:city_id', ctrl.city.remove);
router.post('/', ctrl.city.create);

module.exports = router;
