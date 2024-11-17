import React from 'react';

const ExpenseList = ({ expenses, fetchExpenses }) => {
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/expenses/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (response.ok) {
        fetchExpenses(); // Refresh the list
      } else {
        alert('Error deleting expense');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense._id}>
            <td>{new Date(expense.date).toLocaleDateString()}</td>
            <td>{expense.description}</td>
            <td>{expense.category}</td>
            <td>${expense.amount.toFixed(2)}</td>
            <td>
              <button onClick={() => handleDelete(expense._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;
