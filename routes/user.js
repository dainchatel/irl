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

router.get('/edit/preferences/:id', (req, res, next) => {
  models.Preferences.findById(req.params.id)
  .then(function() {
    console.log('HERE IS THE USER::' + req.params.id)
    res.render('user/editPreferences', { id: req.params.id} );
  });
});

router.put('/edit/preferences/:id', function(req, res, next) {
  models.Preferences.update({
    gender: req.body.gender,
    distance: req.body.distance,
    age_min: req.body.ageMin,
    age_max: req.body.ageMax

  }, { where: { user_id: req.params.id } })
  .then(function() {
    res.redirect('../../');
  });
});


router.put('/edit/:id', function(req, res, next) {
  models.User.update({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    dob: req.body.dob,
    age: req.body.age,
    zipcode: req.body.zipcode,
    gender: req.body.gender,
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

router.get('/composemessage', (req, res, next) => {
  res.render('user/composemessage', {
    fromUser: req.user.dataValues,
    toUser: ''
  });
});

router.get('/messages/:id',  authHelpers.getMessages, (req, res, next)=> {
  models.Messages.findAll({
order: [
   ['toUser', 'DESC'],
  ],
  where: {
  fromUser: {$eq: req.params.id},
  }
  }).then(function(messages, username) {
    res.render('user/messages', {
       content: 'content',
        messages: messages,
        fromUser: 'fromUser',
        toUser: 'toUser',
      username: req.user.dataValues
    });
  });
});


module.exports = router;
