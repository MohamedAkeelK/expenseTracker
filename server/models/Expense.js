const mongoose = require('mongoose');
const ExpenseSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  description: { type: String },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Expense', ExpenseSchema);
