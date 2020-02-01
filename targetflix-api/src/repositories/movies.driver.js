import { movies } from '../mongo'
import Show from '../app/shows/model'

export const findAll = async () => {
  const coll = await movies()

  const result = await coll.find().toArray()
  return result
}

export const count = async () => {
  const coll = await movies()

  const result = await coll.countDocuments()
  return result
}

export const findById = async (id) => {
  const coll = await movies()

  const result = await coll.findOne({_id: id})
  return result
}

export const insert = async(newMovie) => {
  const coll = await movies()
  const { result } = await coll.insertOne(newMovie)
  return result
}

export const insertMany = async(newMovies) => {
  const coll = await movies()
  const { result } = await coll.insertMany(newMovies)
  return result
}