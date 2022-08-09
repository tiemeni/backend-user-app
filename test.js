const fs = require('fs')

fs.readFile('./data/data.json', "utf-8", (err, data) => {
    if(!err){
        console.log(JSON.parse(data)[0])
    }
})