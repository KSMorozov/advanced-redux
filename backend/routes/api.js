const router = require('express').Router();
const index = require('./api/index');

router.use(index);

module.exports = router;
