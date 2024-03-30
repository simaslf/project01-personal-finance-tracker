const expensesList = document.getElementById('expensesList');
const totalExpenses = document.getElementById('totalExpenses');
const totalIncome = document.getElementById('totalIncome');
const savings = document.getElementById('savings');
const addExpenseBtn = document.getElementById('addExpense');

let expenses = [];
let totalExpensesAmount = 0;
let totalIncomeAmount = 0;

document.addEventListener('DOMContentLoaded', function() {
  const expensesList = document.getElementById('expensesList');
  const totalExpenses = document.getElementById('totalExpenses');

  document.getElementById('addExpense').addEventListener('click', function() {
      // Add expense logic
      const category = document.getElementById('category').value;
      const amount = parseFloat(document.getElementById('amount').value);
      const date = document.getElementById('date').value;

      // Create new list item
      const newExpense = document.createElement('li');
      newExpense.innerHTML = `${category} - $${amount} - ${date}`;

      // Create delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('deleteBtn');
      
      deleteBtn.addEventListener('click', function() {
          totalExpenses.textContent = parseFloat(totalExpenses.textContent) - amount;
          newExpense.remove();
      });

      newExpense.appendChild(deleteBtn);
      expensesList.appendChild(newExpense);

      totalExpenses.textContent = parseFloat(totalExpenses.textContent) + amount;
  });
});