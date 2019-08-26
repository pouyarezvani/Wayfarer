const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// Endpoint => 'api/v1/posts'

//Posts Route
router.get('/:post_id', ctrl.post.show);
router.get('/', ctrl.post.index);
router.put('/:post_id', ctrl.post.edit);
router.post('/', ctrl.post.create);
router.delete('/:post_id', ctrl.post.delete);

module.exports = router;