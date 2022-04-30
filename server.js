const express = require('express')
const port = 3000

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.send('<h1>Server Running with Nodemon!<h1>')
})

server.listen(port, () => {
    console.log(`Listening to port ${port}`)
})

module.exports = server