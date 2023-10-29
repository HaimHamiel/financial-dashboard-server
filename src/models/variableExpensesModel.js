const mongoose = require("mongoose");

const variableExpensesSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  variableExpenses: {
    clothes: Number,
    onlineShopping: Number,
    travelAndVacations: Number,
    gifts: Number,
    onlineCourses: Number,
    books: Number,
    eatingOut: Number,
    hangouts: Number,
  },
  savingBalance: Number,
});

module.exports = mongoose.model("VariableExpenses", variableExpensesSchema);
