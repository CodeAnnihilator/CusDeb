const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000
const app = express()

const rootPath = path.join(__dirname, '../')

app.use(express.static(rootPath + 'dist'))

app.get('*', (req, res) => {
  res.sendFile(rootPath + 'dist/index.html')
})

app.listen(port)