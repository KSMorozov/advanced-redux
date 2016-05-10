const router = require('express').Router();
const signup = require('./auth/signup');
const signin = require('./auth/signin');

router.use(signup);
router.use(signin);

module.exports = router;
