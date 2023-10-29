const Equity = require("../models/equityModel");

const addEquityData = (filter, updateParams, options) => {
    return Equity.findOneAndUpdate(filter, updateParams, options);
  };
  
module.exports = {
    addEquityData,
};
