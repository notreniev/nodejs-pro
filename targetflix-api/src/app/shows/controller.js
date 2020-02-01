import * as ShowRepo from '../../repositories/show'

export const getShows = async (req, res) => {
  try {
    const result = await ShowRepo.findAll()
    res.send(result)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}