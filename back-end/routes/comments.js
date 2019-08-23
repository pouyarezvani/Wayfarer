const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// Endpoint => 'api/v1/comment'

//Comments Route
router.get('/:post_id/:comment_id', authRequired, ctrl.comments.show);
router.get('/:post_id', authRequired, ctrl.comments.index);
router.put('/:post_id/:comment_id', authRequired, ctrl.comments.edit);
router.post('/:post_id', authRequired, ctrl.comments.create);
router.delete('/:post_id/:comment_id', authRequired, ctrl.comments.delete);

module.exports = router;