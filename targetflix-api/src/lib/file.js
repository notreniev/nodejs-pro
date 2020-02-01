import fs from 'fs'

const save = (nome_do_arquivo, data) => {
  fs.writeFileSync(`${nome_do_arquivo}.json`, JSON.stringify(data))
}

const get = (nome_do_arquivo) => {
  try {
    const data = fs.readFileSync(`${nome_do_arquivo}.json`)
    return JSON.parse(data)
  } catch (error) {
    console.log('er', error)
    return []
  }
}

export {
  save,
  get
}