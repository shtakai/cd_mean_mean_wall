console.log('message model')

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MessageSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

mongoose.model('Message', MessageSchema)



