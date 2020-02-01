import Show from '../app/shows/model'

const TYPE = 'movie'
export const findAll = async () => {
  const result = await Show.find({type: TYPE})
  return result
}

export const count = async () => {
  const result = await Show.countDocuments()
  return result
}

export const findById = async (id) => {
  const result = await Show.findById(id)
  return result
}

export const insertMany = async(newMovies) => {
  const { result } = await Show.insertMany(newMovies)
  return result
}