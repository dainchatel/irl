const bcrypt = require('bcryptjs');

const models = require('../db/models/index');

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

function createUser(req, res) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);

  return models.User.create({
    username: req.body.username,
    password: hash,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    dob: req.body.dob,
    videoURL: req.body.videoURL
  });
}

function loginRequired(req, res, next) {
  if (!req.user) res.redirect('/auth/login');

  return next();
}

function loginRedirect(req, res, next) {
  if (req.user) res.redirect('/user');

  return next();
}


module.exports = {
  comparePass,
  loginRedirect,
  loginRequired,
  createUser
}
