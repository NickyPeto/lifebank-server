const mongoose = require("mongoose");
const transactions = require("../transactions/transactionsschema");
const bills = require("../bills/billsschema");
const investments = require("../investments/investmentsschema");

const userSchema = new mongoose.Schema({
  data: {
    name: String,
    surname: String,
    email: String,
    password: String,
    phoneNumber: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const userData = new mongoose.Schema({
  data: {
    name: String,
    surname: String,
    email: String,
    password: String,
    phoneNumber: Number,
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
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserSchema = mongoose.model("User", userSchema);
const UserDataChema = mongoose.model("UserData", userData);

module.exports = { UserSchema, UserDataChema };
