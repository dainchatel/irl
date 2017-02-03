var express = require('express');
var router = express.Router();
const authHelpers = require('../auth/auth-helpers');
const passport = require('../auth/local');
const models = require('../db/models/index');


router.get('/', authHelpers.loginRequired, (req, res, next) => {
  res.render('user/user', {
    user: req.user.dataValues
  });
});

router.get('/edit', function(req,res,next) {
  res.render('user/edit', {
    user: req.user.dataValues
  });
});

router.put('/edit/:id', function(req, res, next) {
  models.User.update({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    dob: req.body.dob,
    videoURL: req.body.videoURL,

  }, { where: { id: req.params.id } })
  .then(function() {
    res.redirect('/user');
  });
});

router.delete('/edit/:id', function(req, res, next) {
  models.User.destroy({
    where: {id: req.params.id}
  }).then(function(){
    res.redirect('/../')
  });
});



module.exports = router;
