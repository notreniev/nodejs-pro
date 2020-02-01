import { mongoose } from '../../mongo'

const UserSchema = new mongoose.Schema({
  name: {
    type: String ,
    required: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required'
  },
  password: {
    type: String,
    trim: true,
   },
  createAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model("User", UserSchema)