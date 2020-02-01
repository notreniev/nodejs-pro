import User from '../app/users/model'

export const findAll = async () => {
  const result = await User.find({})
  return result.map(({name, email, createAt}) => {name, email, createAt} )
}

export const findByEmail = async (email) => {
  const result = await User.findOne({email})
  return result
}

export const saveUser = async (userData) => {
  const user = new User(userData)
  const result = await user.save()
  return result
}