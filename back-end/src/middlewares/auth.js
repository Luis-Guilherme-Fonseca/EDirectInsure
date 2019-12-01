module.exports = function(req, res, next) {
  const jwt = require('jsonwebtoken')
  try {
    const decoded = jwt.verify(req.headers.accesstoken, process.env.PRIVATE_KEY)
    res.locals.decoded = decoded
    next()
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized' })
  }
}