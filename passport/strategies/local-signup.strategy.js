const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('../../models/user');

module.exports = () => {
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email'
  }, (email, password, done) => {

    // TODO: Remove hardcoded values
    const id = 27;
    const name = 'mitchell';

    User
      .query()
      .insert({ id, name, email, password })
      .then(user => {
        done(null, user);
      })
      .catch(done);
  }));
}