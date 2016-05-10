const passport = require('passport');
const User = require('../models/user');
const localStrategy = require('passport-local');

const options = { usernameField: 'email' };

const login = new localStrategy(options, (email, password, done) => {
  User.findOne({ email }, (err, user) => {
    if (!user) return done(null, false);
    if (err) return done(err);
    user.comparePassword(password, (err, isMatch) => {
      if (err) return done(err);
      if (!isMatch) return done(null,  false);
      return done(null, user);
    });
  });
});

module.exports = login;
