import * as authService from './services'

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body
    const result = await authService.signin({ email, password })
    res.send(result)
  } catch (error) {
    console.log(error)
    res.status(400).send(error.message)
  }
}

export const signup = async (req, res) => {
  try {
    const { email, password, name } = req.body
    const result = await authService.signup({ email, password, name })
    res.send(result)
  } catch (error) {
    console.log(error)
    res.status(400).send(error.message)
  }
}
