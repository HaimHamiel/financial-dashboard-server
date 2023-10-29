const mongoose = require("mongoose");

const equitySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  currentAssets: {
    currentAccountBalanceA: {
      type: Number,
      required: true,
    },
    currentAccountBalanceB: Number,
    virtualWalletBalance: Number,
    investmentAccountBalance: Number,
    foreignCurrencyBalance: Number,
    virtualCurrencyBalance: Number,
  },
  fixedAssets: {
    apartmentValue: Number,
    carValue: Number,
    depositsValue: Number,
    longTermSavingsValue: Number,
    educationFundValue: Number,
    compensationValue: Number,
    pensionValue: Number,
  },
  totalCapital: Number,
});

module.exports = mongoose.model("Equity", equitySchema);
