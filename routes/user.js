var express = require('express');
var router = express.Router();
const authHelpers = require('../auth/auth-helpers');
const passport = require('../auth/local');


router.get('/', authHelpers.loginRequired, (req, res, next) => {
  res.render('user/user', {
    user: req.user.dataValues
  });
});

router.get('/messages', (req, res, next) => {
  res.render('user/messages', {
    user: req.user.dataValues
  });
});

router.get('/composemessage', (req, res, next) => {
  res.render('user/composemessage', {
    fromUser: req.user.dataValues,
    toUser: ''
  });
});


module.exports = router;
