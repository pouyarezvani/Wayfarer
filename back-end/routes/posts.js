const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// Endpoint => 'api/v1/posts'

//Posts Route
router.get('/:post_id', authRequired, ctrl.post.show);
router.get('/', authRequired, ctrl.post.index);
router.put('/:post_id', authRequired, ctrl.post.edit);
router.post('/', authRequired, ctrl.post.create);
router.delete('/:post_id', authRequired, ctrl.post.delete);

module.exports = router;