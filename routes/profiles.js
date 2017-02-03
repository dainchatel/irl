var express = require('express');
var router = express.Router();
const passport = require('../auth/local');
var models = require('../db/models/index');


/* GET home page. */
router.get('/',  (req, res, next)=> {
  models.User.findAll({}).then(function(users) {
    res.render('profiles/profiles', {
      title: 'users',
      users: users
    });
  });
});

router.get('/:id', function(req, res, next) {
  models.User.findById(req.params.id).then(function(user) {
    res.render('profiles/profile', { user: user });
  });
});

module.exports = router;

