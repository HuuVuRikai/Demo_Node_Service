const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

 //-- Sử dụng body-Parser
 const bodyParser = require('body-parser')
 // parse application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({ extended: false }))
 // parse application/json
 app.use(bodyParser.json())

// Gọi control để gọi các controllers
app.use('/', require('./core/control'))

app.get('/', (req, res) => res.send('Vu Back-End!'))

app.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`)
);