const express = require("express");
const router = express.Router();
const { addEquity } = require("../controllers/equityController");
const { protect } = require("../middleware/authMiddleware");

const cors = require("cors");
// enable CORS for all routes in this router
router.use(cors());

router.post("/", protect, addEquity);

module.exports = router;
