import fs from 'fs'

export const save = (name, data) => {
    fs.writeFileSync(`${name}.json`, JSON.stringify(data))
}

export const get = (name) => {
    try {
        const data = fs.readFileSync(`${name}.json`)
        return JSON.parse(data)
    } catch (error) {
        console.log('err', error)
        return []
    }
}
