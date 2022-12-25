const { Schema, model } = require('mongoose')

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  datetime: {
    type: Date,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
})

module.exports = model('Todo', schema)
