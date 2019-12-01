import express from 'express'
import mongoose from 'mongoose'

require('dotenv').config()
const user = require('./models/user')
const project = require('./models/project')
const routes = require('./routes/index')
const app = express()

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection
db.on('open', () => console.log('connected to db'))

app.use(express.json())

routes(app)
app.get('/', (req, res) => {
    res.send(JSON.stringify({"Test": "old data"}))
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})