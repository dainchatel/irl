const express = require('express');
const router = express.Router();
const authHelpers = require('../auth/auth-helpers');
const passport = require('../auth/local');
const methodOverride = require('method-override');

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

router.put('/register', function(req, res, next) {
  //console.log(req.user.id, req.body.videoURL)
  models.User.update({
    videoURL: req.body.videoURL,
  }, { where: { id: req.User.id } } )
  .then(function() {
    res.redirect('/user');
  });
});

// router.post('/register', (req, res, next)  => {
//   authHelpers.createUser(req, res)
//   .then((user) => {
//     req.login(user, (err) => {
//       if (err) return next(err);

//       res.redirect('/user');
//     });
//   })
//   .catch((err) => { res.status(500).json({ status: 'error' }); });
// });

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
