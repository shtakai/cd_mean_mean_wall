console.log('user model')

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
    index: {
      unique: true
    },
  },
  messages: [ { type:Schema.Types.ObjectId, ref:'Message' } ],
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

mongoose.model('User', UserSchema)



