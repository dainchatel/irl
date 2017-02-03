var express = require('express');
var router = express.Router();
const authHelpers = require('../auth/auth-helpers');
const passport = require('../auth/local');


router.get('/', (req, res, next) => {
  res.render('user/composemessage', {
    fromUser: req.user.dataValues,
    toUser: ''
  });
});


module.exports = router;
