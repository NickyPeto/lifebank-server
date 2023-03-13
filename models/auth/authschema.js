const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
  data: {
    email: String,
    password: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const RegisterSchema = new mongoose.Schema({
  data: {
    name: String,
    surname: String,
    email: String,
    phone: Number,
    password: String,
    confirmPassword: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const authSchema = {};

authSchema.login = mongoose.model("Login", LoginSchema);
authSchema.Register = mongoose.model("Register", RegisterSchema);

module.exports = authSchema;
