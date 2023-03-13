const mongoose = require("mongoose");
const dataset = require("../../data/transactions");

const transactionsSchema = new mongoose.Schema({
  data: {
    history: {
      name: String,
      description: String,
      amount: String,
      date: String,
    },
    contacts: {
      name: String,
      accountNumber: String,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TransctionsSchema = mongoose.model("Transactions", transactionsSchema);

const transactions = {};

transactions.schema = TransctionsSchema;

transactions.dataArray = dataset;

module.exports = transactions;
