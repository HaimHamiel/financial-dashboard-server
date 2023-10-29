const asyncHandler = require("express-async-handler");
const {
  addVariableExpensesData,
} = require("../services/variableExpensesService");
const DisposableIncome = require("../models/disposableIncomeModel");

const addVariableExpenses = asyncHandler(async (req, res) => {
  try {
    const { variableExpenses, user } = req.body;

    if (!variableExpenses || typeof variableExpenses !== "object") {
      return res
        .status(400)
        .json({ message: "Invalid variableExpenses data." });
    }

    const totalVariableExpenses = Object.values(variableExpenses).reduce(
      (sum, expenses) => sum + parseFloat(expenses),
      0
    );
    const disposableIncomeData = await DisposableIncome.findOne({
      user: user.id,
    });

    const disposableIncome = disposableIncomeData
      ? disposableIncomeData.disposableIncome
      : 0;

    // Calculate saving balance
    const savingBalance = disposableIncome - totalVariableExpenses;

    if (!user || user.length === 0) {
      return res.status(404).json({ message: "User Not found." });
    }

    let filter = { user: user.id };
    let options = {
      new: true,
      upsert: true,
    };
    let update = {
      user: user.id,
      variableExpenses,
      savingBalance,
    };
    const expenses = await addVariableExpensesData(filter, update, options);

    if (!expenses || expenses.length === 0) {
      return res.status(404).json({ message: "Error with create expenses" });
    }
    return res.status(200).json(expenses);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error." });
  }
});

module.exports = {
  addVariableExpenses,
};
