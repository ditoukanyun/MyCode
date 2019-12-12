const express = require('express')

let app = express()

app.get('/', (req, res) => {
  res.send('Hello')
})

app.post('/', (req, res) => {
  res.send('Hello')
})
app.post('/', (req, res) => {
  res.send('Hello')
})

app.listen(3010, () => {
  console.log('listen on port 3010')
})
