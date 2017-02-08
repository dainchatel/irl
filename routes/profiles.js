var express = require('express');
var router = express.Router();
const passport = require('../auth/local');
var models = require('../db/models/index');
const authHelpers = require('../auth/auth-helpers');


/* GET home page. */
// router.get('/',  (req, res, next)=> {
//   models.User.findAll({}).then(function(users) {
//     res.render('profiles/profiles', {
//       title: 'users',
//       users: users
//     });
//   });
// });

//not using the auth helper currently.
router.get('/:id',  authHelpers.getProfiles, (req, res, next)=> {
console.log('WHAT IS PROFILES =======   ' + JSON.stringify(res.locals.profiles))
console.log('WHAT IS REQ.USER.DATAVALUES =======   ' + JSON.stringify(req.user.dataValues))
// Get user preferences
models.Preferences.findOne({
  where: { user_id: req.user.dataValues.id }
}).then((user) => {
  console.log('HERESDAUSER====+++++ ' + JSON.stringify(user));
  console.log("WHAT THE GENDER IS +++" + JSON.stringify(user.gender))
  models.User.findAll({
    order: [
    ['age', 'ASC'],
  ],
  where: {
  age: {$between: [user.age_min, user.age_max] },
  gender: {$eq: user.gender}
  }
  })
   .then(function(users) {
    console.log('WHERE DA USERS AT +++++ ' + JSON.stringify(users))
    console.log('HERE DA ID +:+:+:+:+:+ ' + req.params.id)
    models.User.findById(users[req.params.id].id).then((user) => {
      res.render('profiles/profile', {
        title: 'users',
        user: user,
        counter: parseInt(req.params.id)
      })
     })
    })
  })
 });
 module.exports = router;

