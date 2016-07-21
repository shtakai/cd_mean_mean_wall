console.log('message model')

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MessageSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
    index: {
      unique: true
    },
  }
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

mongoose.model('Message', MessageSchema)



