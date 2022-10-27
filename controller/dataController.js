
const Fasoyaar = require('../models/faso-yaar.js')

const dataController = {
  // Index,
  index (req, res, next) {
    Faso-yaar.find({}, (err, foundFaso-yaars) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.faso-yaars = foundFaso-yaars
        next()
      }
    })
  },
  // Destroy
  destroy (req, res, next) {
    Faso-yaar.findByIdAndDelete(req.params.id, (err, deletedFaso-yaar) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.Faso-yaar = deletedFaso-yaar
        next()
      }
    })
  },
  // Update
  update (req, res, next) {
    req.body.IsCheaperer = req.body.IsCheaperer === 'on'
    Faso-yaar.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedFaso-yaar) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.faso-yaar = updatedFaso-yaar
        next()
      }
    })
  },
  // Create
  create (req, res, next) {
    req.body.IsCheaperer = req.body.IsCheaper === 'on'
    Faso-yaar.create(req.body, (err, createdFaso-yaar) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.faso-yaar = createdFaso-yaar
        next()
      }
    })
  },
  // Edit
  // Show
  show (req, res, next) {
    Faso-yaar.findById(req.params.id, (err, foundFaso-yaar) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a faso-yaar with that ID'
        })
      } else {
        res.locals.data.faso-yaar = foundfaso-yaar
        next()
      }
    })
  }
}

module.exports = dataController
