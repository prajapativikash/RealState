const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user.router')

const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/RealState').then(() => {
   console.log("coonenct database")
})

const app = express();

// app.use(cors())
// app.use(express.json())



app.listen(4000, () => {
   console.log("port is listen at 4000!")
})

app.use('/Api/routes/user', userRouter)
