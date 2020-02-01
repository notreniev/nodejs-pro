import * as ShowRepo from '../../repositories/movies'

export const getMovies = async (req, res) => {
  try {
    const result = await ShowRepo.findAll()
    res.send(result)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}