const fs = require('fs')

fs.readFile('package-lock.json', 'utf-8', (err, data) => {
    console.log('data: ', data)
})