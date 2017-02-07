const express = require('express');
const router = express.Router();
const authHelpers = require('../auth/auth-helpers');
const passport = require('../auth/local');
const methodOverride = require('method-override');
const models = require('../db/models/index');

router.get('/register', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/register');
});


router.post('/register', (req, res, next)  => {
  authHelpers.createUser(req, res)
  .then((user) => {
    req.login(user, (err) => {
      if (err) return next(err);
      res.render('auth/upload', {user: user});
    });
  })
  .catch((err) => { res.status(500).json({ status: 'error' }); });
});

router.put('/register/:id', function(req, res, next) {
  //console.log(req.user.id, req.body.videoURL)
  models.User.update({
    videoURL: req.body.videoURL,
  }, { where: { id: req.params.id } } )
  .then(function() {
    res.redirect('/auth/preferences/' + req.params.id);
  })
});

// router.get('/userInfo/:id', function(req, res, next) {
//   models.User.findById(req.params.id).then(function(user) {
//     res.render('auth/userInfo', { user: user });
//   });
// });

// router.put('/userInfo/:id', function(req, res, next) {
//   models.User.update({
//     age: req.body.age,
//     zipcode: req.body.zipcode,
//     gender: req.body.gender,
//   }, { where: { id: req.params.id } } )
//   .then(function() {
//     res.redirect('/auth/preferences/' + req.params.id);
//   })
// });

router.get('/preferences/:id', function(req, res, next) {
  models.User.findById(req.params.id).then(function(user) {
  res.render('auth/preferences', {user: user });
  });
});

router.post('/preferences/:id', (req, res, next)  => {
  authHelpers.createUserPref(req, res)
  .then(() => {
      res.redirect('../../user');
  })
  .catch((err) => { res.status(500).json({ status: 'error' }); });
})

router.get('/login', authHelpers.loginRedirect, (req, res)=> {
  res.render('auth/login');
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/auth/login',
    failureFlash: true
  })
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;

//calculate age from dob.
// function getAge(dateString) {
//     var today = new Date();
//     var birthDate = new Date(dateString);
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var m = today.getMonth() - birthDate.getMonth();
//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }
//     return age;
// }

//with moment
// moment.duration().years();
// moment.duration().asYears();
