const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const db = require('./src/config/db')
const morgan = require('morgan')
const app = express()
const studyRoute = require('./src/routes/study')
const port = 8084

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
dotenv.config()
app.use(morgan('combined'))
// Allow access to the specific origin
app.use(cors());


// Connect MongoDB
db.connect()

// Routes
app.use('/api/v1/dkhp', studyRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})