import { MongoClient } from 'mongodb'
import config from '../config'

const defaultConnectOpts = {
    useNewUrlParser: true,
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
    return (await DB_CONN).db(config.db.name).collection('movies')
  }

  export async function series () {
    return (await DB_CONN).db(config.db.name).collection('series')
  }

