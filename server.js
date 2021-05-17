const mongoose = require('mongoose');
const app = require('./app')
const dotenv = require('dotenv')

dotenv.config({path: './config.env'})
const port = process.env.PORT
const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DB_PASS);

mongoose.connect(DB,{
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(()=>console.log('Database connection succcessful'))



app.listen(port,()=>{
    console.log(`server running on port ${port} ...`)
})

