console.log('comment model')

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
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

mongoose.model('Comment', CommentSchema)



