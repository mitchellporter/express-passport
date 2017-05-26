const router = require('express').Router();

router.post('/slack', (req, res, next) => {
  res.send(req.body.challenge);
});

module.exports = router;