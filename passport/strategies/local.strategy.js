const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../models/user');

module.exports = () => {
  passport.use(new LocalStrategy({
    usernameField: 'email'
  }, (email, password, done) => {

      // TODO: check password

      User
        .query()
        .where('email', email)
        .first()
        .then(user => {
          done(null, user);
        })
        .catch(err => {
          done(err);
        });

      // User.findOne({ username: username }, function(err, user) {
      //   if (err) { return done(err); }
      //   if (!user) {
      //     return done(null, false, { message: 'Incorrect username.' });
      //   }
      //   if (!user.validPassword(password)) {
      //     return done(null, false, { message: 'Incorrect password.' });
      //   }
      //   return done(null, user);
      // });
    }
  ));
}