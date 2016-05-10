const passport = require('passport');
const User = require('../models/user');
const secretOrKey = require('../../config').secret;
const jwtStrategy = require('passport-jwt').Strategy;
const jwtExtract = require('passport-jwt').ExtractJwt;

const options = {
  jwtFromRequest: jwtExtract.fromHeader('authorization'),
  secretOrKey,
};

const login = new jwtStrategy(options, (payload, done) => {
  User.findById(payload.sub, (err, user) => {
    if (err) return done(err, false);
    if (user) done(null, user);
    else done(null, false);
  });
});

module.exports = login;
