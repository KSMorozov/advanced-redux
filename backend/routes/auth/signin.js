const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const router = require('express').Router();
const secret = require('../../../config').secret;

const localAuth = passport.authenticate('local', { session: false });

router.post('/signin', localAuth, (req, res, next) => {
  jwt.sign(
    { sub: req.user._id, iat: Math.floor(Date.now() / 1000) - 30 },
    secret,
    { algorithm: 'HS256' },
    (err, token) => {
      if (err) return next(err);
      return res.json({ success: true, message: 'You Have Successfully Singed In.', token });
    }
  );
});

module.exports = router;
