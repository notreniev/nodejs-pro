import { series } from '../mongo'

export const findAll = async () => {
  const coll = await series()

  const result = await coll.find().toArray()
  return result
}

export const count = async () => {
  const coll = await series()

  const result = await coll.countDocuments()
  return result
}

export const findById = async (id) => {
  const coll = await series()

  const result = await coll.findOne({_id: id})
  return result
}

export const insert = async(newSerie) => {
  const coll = await series()
  const { result } = await coll.insertOne(newSerie)
  return result
}

export const insertMany = async(newSeries) => {
  const coll = await series()
  const { result } = await coll.insertMany(newSeries)
  return result
}