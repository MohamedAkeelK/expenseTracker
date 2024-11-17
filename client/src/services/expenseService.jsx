import axios from "axios";

const API_URL = "http://localhost:8000/api/expenses"; // Replace with your actual backend URL

// Function to get all expenses
const getExpenses = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data; // Return the list of expenses
  } catch (error) {
    console.error("Error fetching expenses:", error);
    throw error;
  }
};

// Function to add a new expense
const addExpense = async (expense) => {
  try {
    const response = await axios.post(API_URL, expense, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data; // Return the added expense
  } catch (error) {
    console.error("Error adding expense:", error);
    throw error;
  }
};

// Function to delete an expense
const deleteExpense = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data; // Return the result of deletion
  } catch (error) {
    console.error("Error deleting expense:", error);
    throw error;
  }
};

export default {
  getExpenses,
  addExpense,
  deleteExpense,
};
