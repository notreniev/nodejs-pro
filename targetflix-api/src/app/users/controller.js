import * as service from './services'
import * as userRespo from '../../repositories/users'

export const getAll = async (req, res) => {
  try {
    const result = await getAllUser()
    res.send(result)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }

}
export const like = async (req, res) => {
  const { currentUser, body } = req
  console.log('showId', body.showId)
  try {
    const result = await service.like({
      email: currentUser,
      showId: body.showId
    })
    res.send(result)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}

export const  getLikeds = async (req, res) => {
  const { currentUser } = req
  try {
    const user = await userRespo.findByEmail(currentUser)
    res.send(user.shows)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}