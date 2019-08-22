const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// Endpoint => 'api/v1/posts'

// router.get('/', authRequired, ctrl.post.index);
// router.get('/:slug', authRequired, ctrl.post.show);
// router.get('/:slug/edit', authRequired, ctrl.post.edit);
// router.get('/:slug/delete', authRequired, ctrl.post.delete);
// router.get('/:slug/edit', authRequired, ctrl.post.edit);

module.exports = router;