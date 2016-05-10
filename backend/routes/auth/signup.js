const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const router = require('express').Router();
const secret = require('../../../config').secret;

router.post('/signup', (req, res, next) => {
  const { email, password } = req.body;
  if (!(email && password)) res.status(422).send({ error: 'You must provide email and password.' });

  User.findOne({ email }, (err, existingUser) => {
    if (existingUser) return res.status(422).send({ error: 'Email is already in use.' });
    if (err) return next(err);
    const user = new User({ email, password });
    user.save((err) => {
      if (err) return next(err);
      jwt.sign(
        { sub: user._id, iat: Math.floor(Date.now() / 1000) - 30 },
        secret,
        { algorithm: 'HS256' },
        (err, token) => {
          if (err) return next(err);
          return res.json({ success: true, message: 'You Have Successfully Singed Up.', token });
        }
      );
    });
  });
});

module.exports = router;
