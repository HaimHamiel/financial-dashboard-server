const express = require("express");
const routers = express.Router();
const user = require("./userRoutes");
const equity = require("./equityRoutes");
const disposableIncome = require("./disposableIncomeRoutes");
const variableExpenses = require("./variableExpensesRoutes");

routers.use("/api/users", user);
routers.use("/api/equityValuation", equity);
routers.use("/api/disposableIncome", disposableIncome);
routers.use("/api/variableExpenses", variableExpenses);

module.exports = routers;
