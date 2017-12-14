const express = require('express')
const app = express()

app.get('*', function(req, res) {
  res.send('Welcome to the quiz world!!!!')
})

app.listen(3000, '127.0.0.1', () => {
  console.log('Quiz app listening on port 3000!')
})
