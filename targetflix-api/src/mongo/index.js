import { MongoClient } from 'mongodb'
import mongoose from 'mongoose'
import config from '../config'


const connect = () => {
  return mongoose.connect(config.db.url, 
    { 
      useNewUrlParser: true ,
      useUnifiedTopology: true 
    })
}
export  {
  connect, 
  mongoose
}


const defaultConnectOpts = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  keepAlive: 600,
  poolSize: 5
}

const DB_CONN = MongoClient.connect(
  config.db.url,
  { ...defaultConnectOpts }
)

export async function test () {
  return (await DB_CONN).db(config.db.name).collection('test')
}
export async function movies () {
  return (await DB_CONN).db(config.db.name).collection('ttmovies')
}

export async function series () {
  return (await DB_CONN).db(config.db.name).collection('ttseries')
}

export async function users () {
  return (await DB_CONN).db(config.db.name).collection('users')
}
