const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/userRoute')


const app = express()
app.use(cors());
app.use(express.json())
app.use('/api/v1/slimbook',userRoute)


module.exports = app