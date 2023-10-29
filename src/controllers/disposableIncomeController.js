const asyncHandler = require("express-async-handler");
const { addDisposableIncomeData } = require("../services/disposableIncomeService");

const addDisposableIncome = asyncHandler(async (req, res) => {
  try {
    const { fixedIncome, fixedExpenses, user } = req.body;
    const totalFixedIncome = Object.values(fixedIncome).reduce(
      (sum, income) => sum + parseFloat(income),
      0
    );
    const totalFixedExpenses = Object.values(fixedExpenses).reduce(
      (sum, expenses) => sum + parseFloat(expenses),
      0
    );
    
    // Calculate disposable income
    const disposableIncome = totalFixedIncome - totalFixedExpenses + fixedExpenses.loansLeverage;
  
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
      fixedIncome,
      fixedExpenses,
      disposableIncome,
    };
    const income = await addDisposableIncomeData(filter, update, options);
    
    if (!income || income.length === 0) {
      return res.status(404).json({ message: "Error with create Income" });
    }
    return res.status(200).json(income);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error." });
  }
});

module.exports = {
    addDisposableIncome,
};
