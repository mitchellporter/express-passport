const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

module.exports = () => {
  passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
  }, (accessToken, refreshToken, profile, done) => {
    console.log(`Facebook access token: ${accessToken}`);
    console.log(`Facebook refresh token: ${refreshToken}`);
    console.log(`Facebook profile: ${profile}`);

    done(null, {});
  }));
}
