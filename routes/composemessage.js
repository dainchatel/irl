var express = require('express');
var router = express.Router();
const authHelpers = require('../auth/auth-helpers');
const passport = require('../auth/local');
var models = require('../db/models/index');


router.get('/:id', (req, res, next) => {
  models.User.findById(req.params.id).then(function(user) {
    res.render('user/composemessage', { user: user });
  });
});

router.post('/:id', (req, res, next) => {
  models.Messages.create({
    toUser: req.params.id,
    fromUser: req.user.id,
    content: req.body.content,
  }).then(function() {
    res.redirect('/user');
  })
})


module.exports = router;
