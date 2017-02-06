var express = require('express');
var router = express.Router();
const authHelpers = require('../auth/auth-helpers');
const passport = require('../auth/local');
var models = require('../db/models/index');



router.get('/',  (req, res, next)=> {
  models.Messages.findAll({}).then(function(messages) {
    res.render('user/allMessages', {
     content: 'content',
      messages: messages,
      fromUser: 'fromUser',
      toUser: 'toUser',
    });
  });
});




module.exports = router;
