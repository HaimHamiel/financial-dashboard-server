const asyncHandler = require("express-async-handler");
const { addEquityData } = require("../services/equityService");

const addEquity = asyncHandler(async (req, res) => {
  try {
    
    const { currentAssets, fixedAssets, user } = req.body;

    const totalCurrentAssets = Object.values(currentAssets).reduce(
      (sum, asset) => sum + parseFloat(asset),
      0
    );
    const totalFixedAssets = Object.values(fixedAssets).reduce(
      (sum, asset) => sum + parseFloat(asset),
      0
    );
 
    // Calculate total capital
    const totalCapital = totalCurrentAssets + totalFixedAssets;
 
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
      currentAssets,
      fixedAssets,
      totalCapital,
    };
    const equity = await addEquityData(filter, update, options);

    if (!equity || equity.length === 0) {
      return res.status(404).json({ message: "Error with create Equity" });
    }
    return res.status(200).json(equity);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error." });
  }
});

module.exports = {
  addEquity,
};
