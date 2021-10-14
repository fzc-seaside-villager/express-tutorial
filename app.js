const express = require('express')
const app = express()
const port = 3003

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/random.text', (req, res) => {
  res.send('random.text')
})

app.get('/ab?cd', (req, res) => {
  res.send('ab?cd')
})

app.get('/ab+cd', function (req, res) {
  res.send('ab+cd')
})

app.get('/users/:userId/books/:bookId', function (req, res) {
  const {userId, bookId} = req.params
  console.log(userId)
  console.log(bookId)
  res.send(req.params)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
