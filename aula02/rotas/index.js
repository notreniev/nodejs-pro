import express from 'express'
import * as productService from './services/product'
import bodyParser from 'body-parser'
import queryParser from 'express-query-parser'
import { next } from 'sucrase/dist/parser/tokenizer'
const app = express()

app.use(bodyParser.json())
app.use(queryParser())

app.get('/produtos', (req, res) => {
    const produtos = productService.getAllProducts()
    res.send(produtos)
})

app.get('/produtos/:id', (req, res) => {
    const { id } = req.params
    const produto = productService.getProductById(id)
    console.log('produto', produto)
    res.send(produto)
})


app.post('/produtos', (req, res) => {
    const {produto} = req.body
    productService.saveNewProduct(produto)
    res.send(produto)
})

app.put('/produtos', (req, res) => {
    const { produto } = req.body
    productService.updateProduct(produto)
    res.send('PUT recebido em /user')
})

app.get('/test', test1, test2)

function test1(req, res, next) {
    console.log('rodou a rota de test1 ...')
    next()
}

function test2(req, res, next) {
    res.send('rodou a rota de test2...')
    next()
}

app.post('/admin', login)

function login(req, res, next){
    const { user, password} = req.body
    user !== 'root' || password !== '1234' ? res.sendStatus(400) : res.sendStatus(200)
    next()
}

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000...')
})