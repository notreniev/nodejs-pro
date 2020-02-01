import { tokenVerify } from '../lib/tokenManager'

const TARGET = 'TARGET '
const authenticate = (req, res, next) => {
  try {
    const authValue = req.headers.authorization
    if (!authValue.startsWith(TARGET)) {
      throw new Error()
    }
    const token = authValue.replace(TARGET, '')
    const { email } = tokenVerify(token)
    req.currentUser = email

    next()
  } catch (error) {
    res.status(401).send('Acesso negado.')
  }
}

export default authenticate
