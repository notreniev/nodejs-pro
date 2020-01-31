import { series } from '../mongo'

export const findAll = async () => {
    const coll = await series()

    const result = await coll.find().toArray()
    return result
}

export const findById = async () => {
    const coll = await series()

    const result = await coll.findOne({_id: id})
    return result
}

export const insert = async (movie) => {
    const collection = await series()
    const { result } = await collection.insertOne(movie)
    return result
}