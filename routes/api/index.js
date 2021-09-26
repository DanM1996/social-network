const router = require('express').Router();
const UserRoutes = require('./user-routes');
const ThoughtRoutes = require('./thought-routes');


router.use('/user', UserRoutes);
router.use('/thought', ThoughtRoutes);

module.exports = router;