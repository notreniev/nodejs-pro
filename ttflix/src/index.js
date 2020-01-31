import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { routes } from './app'
import { connect } from './mongo'

const PORT = 3001
const app = express()
const router = express.Router()

app.use('*', cors({ origin: '*' }))

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json())

app.get('/status', async (req, res) => {
  res.send('Year! Lets Rock 🤘🤘🤘🤘🤘')
})


app.use('/api', routes(router))

app.listen({ port: PORT }, async () => {
  await connect()
  console.log(`🚀 Server ready at http://localhost:${PORT}`)
})