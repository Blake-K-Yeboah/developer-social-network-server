const { Schema, model } = require("mongoose");

const userSchema = new Schema({
   username: String,
   password: String,
   email: String,
   createdAt: String,
   followers: [
      {
         username: String,
         followedAt: String,
      },
   ],
   messages: [
      {
         body: String,
         username: String,
         sentAt: String,
      },
   ],
});

module.exports = model("User", userSchema);
