const router = require('express').Router();
const passport = require('passport');


router.post('/login', passport.authenticate('local-login', { successRedirect: '/',
                                   failureRedirect: '/',
                                   failureFlash: true }));

router.post('/signup', passport.authenticate('local-signup', { successRedirect: '/',
                                   failureRedirect: '/',
                                   failureFlash: true }));                                  


// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
router.get('/facebook', isAuthenticated, passport.authenticate('facebook'));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
router.get('/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/');
}

module.exports = router;