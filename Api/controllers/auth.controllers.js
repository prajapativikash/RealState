const User = require('../models/User.model.js')
const bcryptjs = require('bcryptjs');
const errorHandler = require('../utils/error.js');
const signup = async (req, res, next) => {
   console.log(req.body)
   const { username, email, password } = req.body;
   const hashedPassword = bcryptjs.hashSync(password, 10)
   const NewUser = new User({ username, email, password: hashedPassword })

   try {
      await NewUser.save()
      res.status(201).json({ message: 'User registered successfully' })

   } catch (error) {
      next(error)
      // next(errorHandler(550, "error from the function"))
   }

}

module.exports = signup;