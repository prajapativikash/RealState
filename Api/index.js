const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user.router')
const signupRouter = require('./routes/auth.router.js')
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost:27017/RealState').then(() => {
   console.log("coonenct database")
})

app.use(cors())


app.use(express.json())



app.use('/Api/routes/user', userRouter)

app.use('/Api/routes/auth', signupRouter);

app.use((err, req, res, next) => {
   const statusCode = err.statusCode || 500;
   const message = err.message || 'Internal Server Error ';
   return res.status(statusCode).json({
      success: false,
      statusCode,
      message

   });

});


app.listen(4000, () => {
   console.log("port is listen at 4000!")
})
