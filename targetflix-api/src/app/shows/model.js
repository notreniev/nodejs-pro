import { mongoose } from '../../mongo'

const ShowSchema = new mongoose.Schema({
  netflixid: {type: String },
  title: {type: String },
  image: {type: String },
  synopsis: {type: String },
  rating: {type: String },
  type: {type: String, enum: ['movie', 'series']},
  released: {type: String },
  runtime: {type: String },
  largeimage: {type: String },
  unogsdate: {type: String },
  imdbid: {type: String },
  download: {type: String },
})

export default mongoose.model("Show", ShowSchema)