const mongoose = require("mongoose");

const disposableIncomeSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  fixedIncome: {
    netSalaryMainPosition: {
      type: Number,
      required: [true, "Please add the net salary for the main position"],
    },
    netSalarySecondaryPosition1: Number,
    netSalarySecondaryPosition2: Number,
  },
  fixedExpenses: {
    rent: Number,
    propertyTax: Number,
    water: Number,
    electricalBill: Number,
    houseCommittee: Number,
    communication: Number,
    groceryShopping: Number,
    tuition: Number,
    fuel: Number,
    carInsurance: Number,
    premiumSoftware: Number,
    newspaperSubscription: Number,
    premiumServiceSubscription: Number,
    healthInsurance: Number,
    gymMembership: Number,
    loansLeverage: Number,
  },
  disposableIncome: Number,
});

module.exports = mongoose.model("DisposableIncome", disposableIncomeSchema);
