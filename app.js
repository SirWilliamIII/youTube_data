const express = require('express')

const app = express()

const getData = require('./readFile')

const PORT = 3333

app.get('/', (req, res) => {
    getData().then(data => {
            return data
        })
        .then(r => {
            console.log(r.length)
            res.send(r)
        })
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${ PORT }`)
})