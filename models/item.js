const mongoose = require('mongoose')

// Make A Schema
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
  isCheaperer: Boolean
}, { timestamps: true })

// Make A Model From The Schema

const Item = mongoose.model('Item', itemSchema)

// Export The Model For Use In The App

module.exports = Item

