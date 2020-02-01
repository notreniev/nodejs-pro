import * as ShowRepo from '../../repositories/series'

export const getSeries = async (req, res) => {
  try {
    const result = await ShowRepo.findAll()
    res.send(result)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}