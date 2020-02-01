import * as UserRepo from '../../repositories/users'
import { generateToken } from '../../lib/tokenManager'

export const signup = async (user) => {
  
  const { email, name, password } = user

  if(!email || !name || !password) {
    throw new Error('Dados inválidos')
  }

  const result = await UserRepo.saveUser(user)

  return result
}

export const signin = async ({ email, password }) => {

  const user = await UserRepo.findByEmail(email)
  console.log('user', user)
  const erro =  validateSignin(user, password)
  if(erro) {
    throw new Error(erro)
  }

  const token = generateToken({ email })
  return {
    token,
    email,
    name: user.name
  }
}

const validateSignin = (user, password) => {
  if (!user) {
    return 'Usuário não encontrado.'
  }
  const { password: passwordUser } = user
  // const passwordValid = await bcrypt.compare(password, passwordUser)
  if (passwordUser !== password) {
    return 'Email ou senha inválido.'
  }
}
