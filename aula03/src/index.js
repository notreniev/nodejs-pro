import express from 'express'
const PORT = 3001
const app = express()
const router = express.Router()

app.get('/status', (req, res) => {
    res.send('Yeah! Let´s rock')
})

app.listen({port: PORT }, () => {
    console.log(`Server ready at http://localhost:${PORT}`)
})