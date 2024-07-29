const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
   UserName: {
      type: String,
      required: true,
      unique: true
   },
   Email: {
      type: String,
      required: true,
      unique: true
   },
   Password: {
      type: String,
      required: true

   }
}, { timestamps: true })

const User = mongoose.model("User", userSchema)

module.exports = User;