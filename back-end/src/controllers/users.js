const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');

exports.signUp = function(req, res) {
  const salt = bcrypt.genSaltSync(10)
  const password = bcrypt.hashSync(req.body.password, salt)
  const user = new User({
    username: req.body.username,
    password
  })
  try {
    user.save().then(newUser => {
      res.status(201).json({ message: "Registration was successful" })
    }, err => {
      res.status(500).json({ message: 'internal server error' })
    })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

exports.signIn = function(req, res) {
  User.findOne({ username: req.body.username }, function(err, user) {
    if(err) return res.status(400).json({ error: err })

    const valid = bcrypt.compareSync(req.body.password, user.password)
    if(valid) {
      const token = jwt.sign({ id: user._id }, process.env.PRIVATE_KEY)
      res.status(200).json({ message: 'valid user', token })
    } else {
      res.status(401).json({ error: 'Unauthorized' })
    }
  })
}