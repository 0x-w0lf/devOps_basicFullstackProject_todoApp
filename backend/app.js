const express = require('express')
const cors = require('cors')
const taskRoutes = require('./routes/tasks-routes.js')

const app = express()

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json())
app.use('/api/tasks', taskRoutes)

app.get('/', (req, res) => {
    res.send('API is running')
})

module.exports = app
