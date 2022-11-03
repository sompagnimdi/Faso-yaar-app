const Item = require('../models/item')

const dataController = {
  // Index,
  index (req, res, next) {
    Item.find({ username: req.session.username }, (err, foundItems) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.items = foundItems
        next()
      }
    })
  },
  // Destroy
  destroy (req, res, next) {
    Item.findByIdAndDelete(req.params.id, (err, deletedItem) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.item = deletedItem
        next()
      }
    })
  },
  // Update
  update (req, res, next) {
    req.body.isOnSalle = req.body.isOnSalle === 'on'
    Item.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedItem) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.Item = updatedItem
        next()
      }
    })
  },
  // Create
  create (req, res, next) {
    req.body.isOnSalle = req.body.isOnSalle === 'on'
    req.body.username = req.session.username
    Item.create(req.body, (err, createdItem) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.item = createdItem
        next()
      }
    })
  },
  // Edit
  // Show
  show (req, res, next) {
    Item.findById(req.params.id, (err, foundItem) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a item with that ID'
        })
      } else {
        res.locals.data.item = foundItem
        next()
      }
    })
  }
}

module.exports = dataController
