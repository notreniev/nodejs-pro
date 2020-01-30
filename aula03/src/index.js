import express from 'express'
const PORT = 3001
const app = express()
const router = express.Router()
import * as repoTest from './repositories/test'
import * as repoMovies from './repositories/movies'
import * as repoSeries from './repositories/series'

app.get('/status', async (req, res) => {
    const result = await repoTest.findAll()
    res.json(result)
})

app.get('/movies', async (req, res) => {
    const result = await repoMovies.findAll()
    res.json(result)
})

app.get('/series', async (req, res) => {
    const result = await repoSeries.findAll()
    res.json(result)
})

app.listen({port: PORT }, () => {
    console.log(`Server ready at http://localhost:${PORT}`)
})