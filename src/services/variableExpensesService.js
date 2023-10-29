const VariableExpenses = require("../models/variableExpensesModel");

const addVariableExpensesData = (filter, updateParams, options) => {
    return VariableExpenses.findOneAndUpdate(filter, updateParams, options);
  };
  
module.exports = {
    addVariableExpensesData,
};
