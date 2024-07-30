const User = require('../models/User.model.js')
const bcryptjs = require('bcryptjs')
const signup = async (req, res) => {
   console.log(req.body)
   const { username, email, password } = req.body;
   const hashedPassword = bcryptjs.hashSync(password, 10)
   const NewUser = new User({ username, email, password: hashedPassword })

   try {
      await NewUser.save()
      res.status(201).json({ message: 'User registered successfully' })

   } catch (error) {
      return res.status(400).json({ message: error.message })
   }

}

module.exports = signup;