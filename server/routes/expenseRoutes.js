const express = require("express");
const {
  addExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
} = require("../controllers/expenseController");
const authMiddleware = require("../miiddleware/authMiddleware");
const router = express.Router();

router.post("/add", authMiddleware, addExpense);
router.get("/", authMiddleware, getExpenses);
// router.put("/:id", authMiddleware, updateExpense);
router.put("/:id", authMiddleware, function (req, res) {
  updateExpense();
});

router.delete("/:id", authMiddleware, function (req, res) {
  deleteExpense();
});

module.exports = router;
