import { movies } from '../mongo'

export const findAll = async () => {
    const coll = await movies()

    const result = await coll.find().toArray()
    return result
}

export const findById = async (id) => {
    const coll = await movies()

    const result = await coll.findOne({_id: id})
    return result
}

export const insert = async (movie) => {
    const collection = await movies()
    const { result } = await collection.insertOne(movie)
    return result
}