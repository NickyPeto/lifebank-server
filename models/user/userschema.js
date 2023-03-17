const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    min: 3,
    max: 20,
  },
  surname: {
    type: String,
    required: true,
    trim: true,
    min: 3,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const userData = new mongoose.Schema({
  userData: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  bankData: {
    balance: String,
    iban: String,
  },
  transactions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Transactions",
    },
  ],
  bills: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bills",
    },
  ],
  investments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Investments",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserSchema = mongoose.model("User", userSchema);
const UserDataChema = mongoose.model("UserData", userData);

UserSchema.createIndexes();

module.exports = { UserSchema, UserDataChema };
