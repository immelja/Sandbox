const express = require('express')
const app = express()

app.get('/', function (req, res) {
  console.log(req.url)
  res.send('Hello World!')
})

app.get('/favicon.ico', function(req, res) {
    console.log('fave')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.use(express.static('public'))
