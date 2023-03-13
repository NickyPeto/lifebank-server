const mongoose = require("mongoose");
const dataset = require("../../data/bills");

const billsSchema = new mongoose.Schema({
  data: {
    name: String,
    description: String,
    amount: String,
    date: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const BillsSchema = mongoose.model("Bills", billsSchema);

const bills = {};

bills.billsSchema = BillsSchema;

bills.billsData = dataset;

module.exports = bills;
