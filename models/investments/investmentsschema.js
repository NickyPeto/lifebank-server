const mongoose = require("mongoose");
const dataset = require("../../data/investments");

const investmentsSchema = new mongoose.Schema({
  data: {
    name: String,
    description: String,
    amountAvailable: String,
    valueSinceBought: String,
    date: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const InvestmentsSchema = mongoose.model("Investments", investmentsSchema);

const investments = {};

investments.investmentsSchema = InvestmentsSchema;

investments.investmentsData = dataset;

module.exports = investments;
