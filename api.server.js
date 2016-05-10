const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const jwtLogin = require('./backend/middleware/passport.jwt');
const localLogin = require('./backend/middleware/passport.local');
const app = express();
const api = require('./backend/routes/api');
const auth = require('./backend/routes/auth');
const port = 8081;

passport.use(jwtLogin);
passport.use(localLogin);
const jwtAuth = passport.authenticate('jwt', { session: false });

mongoose.connect(
  'mongodb://root:qwerty@ds011412.mlab.com:11412/advanced-redux',
  (err) => {
    if (err) console.error(err);
    else console.log('successfully connected to database');
  }
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/auth', auth);
app.use('/api', jwtAuth, api);

app.listen(
  port,
  (err) => err ? console.error(err) : console.info('API Available at port %s. hit https://localhost:%s/api', port, port)
);
