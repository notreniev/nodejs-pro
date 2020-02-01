import jwt from 'jsonwebtoken'
import config from '../config'

const { secret: { key: secretKey } } = config

const generateToken = (data, expires = null) => jwt.sign(data, secretKey, expires ? { expiresIn: expires } : {})

const tokenVerify = (token) => jwt.verify(token, secretKey)

export {
  generateToken,
  tokenVerify
}
