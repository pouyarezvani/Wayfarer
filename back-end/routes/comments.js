const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// Endpoint => 'api/v1/comments'

//Comments Route
router.get('/:post_id/:comment_id', ctrl.comments.show);
router.get('/:post_id', ctrl.comments.index);
router.post('/:post_id', ctrl.comments.create);
router.put('/:post_id/:comment_id', ctrl.comments.update);
router.delete('/:post_id/:comment_id', ctrl.comments.delete);

module.exports = router;