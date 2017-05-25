const passport = require('passport');
const SlackStrategy = require('passport-slack').Strategy;

module.exports = () => {
  passport.use(new SlackStrategy({
    clientID: process.env.SLACK_CLIENT_ID,
    clientSecret: process.env.SLACK_CLIENT_SECRET
  }, (accessToken, refreshToken, profile, done) => {

    done(null, profile);
  }));
}