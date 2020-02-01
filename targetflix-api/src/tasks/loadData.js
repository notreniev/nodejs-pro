import * as files from '../lib/file'
import { connect } from '../mongo'
import Show from '../app/shows/model'

const FILE = 'shows'

const run = async () => {
  await connect()
    const totalItems = await Show.countDocuments()
    console.log(`total de shows salvos`, totalItems)
    if(totalItems > 0)
    {
      console.log('tarefa encerrada')
      return
    } 

    const shows = files.get(FILE) || []
    
    if(shows.length) {
      const  result = await Show.insertMany(shows)
      return result
    }
}

run()