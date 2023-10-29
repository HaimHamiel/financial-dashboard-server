const express = require("express");
const router = express.Router();
const { addDisposableIncome } = require("../controllers/disposableIncomeController");
const { protect } = require("../middleware/authMiddleware");

const cors = require("cors");
// enable CORS for all routes in this router
router.use(cors());

router.post("/", protect, addDisposableIncome);

module.exports = router;
