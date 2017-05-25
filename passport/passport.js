const passport = require('passport');
const User = require('../models/user');

module.exports = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User
      .query()
      .where('id', id)
      .first()
      .then(user => {
        done(null, user);
      })
      .catch(done);
  });

  // strategies
  require('./strategies/local-login.strategy')();
  require('./strategies/local-signup.strategy')();
  require('./strategies/facebook.strategy')();
  require('./strategies/slack.strategy')();
}
