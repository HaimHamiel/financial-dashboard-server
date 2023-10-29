const DisposableIncome = require("../models/disposableIncomeModel");

const addDisposableIncomeData = (filter, updateParams, options) => {
    return DisposableIncome.findOneAndUpdate(filter, updateParams, options);
  };
  
module.exports = {
    addDisposableIncomeData,
};
