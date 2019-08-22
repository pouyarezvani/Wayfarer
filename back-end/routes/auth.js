const express = require('express');
const router = require('express').Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// Post Register Routes
router.post('/signup', ctrl.auth.signup);
router.post('/login', ctrl.auth.login);
router.post('/logout', ctrl.auth.logout);
router.post('/verify', authRequired, ctrl.auth.verify);

module.exports = router;
