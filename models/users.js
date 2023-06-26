const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

// plugging in passportLocalMongoose will create a username and password for userschema
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
