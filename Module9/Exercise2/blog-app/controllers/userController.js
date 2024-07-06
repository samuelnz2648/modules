const User = require("../models/userModel");

exports.createUser = (req, res) => {
  const newUser = new User(req.body);
  newUser
    .save()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json(err));
};

exports.getUsers = (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(err));
};
