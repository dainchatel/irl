var express = require('express');
var router = express.Router();
//const authHelpers = require('../auth/auth-helpers');

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.user) {
    res.render('index', { title: 'IRL', user: user});
   } else {
     res.render('index', { title: 'IRL' })
   }
});

module.exports = router;
