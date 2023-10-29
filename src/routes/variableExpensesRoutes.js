const express = require("express");
const router = express.Router();
const { addVariableExpenses } = require("../controllers/variableExpensesController");
const { protect } = require("../middleware/authMiddleware");

const cors = require("cors");
// enable CORS for all routes in this router
router.use(cors());

router.post("/", protect, addVariableExpenses);

module.exports = router;
