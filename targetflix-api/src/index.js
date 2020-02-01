import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { initializeRoutes } from './app'
import { connect } from './mongo'

const PORT = process.env.PORT || 3005
const app = express()
const router = express.Router()

app.use('*', cors({ origin: '*' }))

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

app.get('/status', async (req, res) => {
  res.send('Year! Lets Rock !!!')
})


app.use('/api', initializeRoutes(router))

app.listen({ port: PORT }, async () => {
  await connect()
  console.log(`Server ready at http://localhost:${PORT}`)
})