// Select the input fields and button
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const dateInput = document.getElementById('date');
const addExpenseButton = document.getElementById('addExpense');
const expenseList = document.getElementById('expenseItems');
const totalAmountDisplay = document.getElementById('totalAmount');

// Initialize total expenses to 0
let totalExpenses = 0;

// Add an event listener to the 'Add Expense' button
addExpenseButton.addEventListener('click', () => {
    // Get the values from the input fields
    const description = descriptionInput.value;
    const amount = parseFloat(amountInput.value);
    const date = dateInput.value;

    // Ensure all fields are filled and amount is valid
    if (description && amount > 0 && date) {
        // Create a new list item for the expense
        const expenseItem = document.createElement('li');
        expenseItem.innerHTML = `${description} - $${amount.toFixed(2)} on ${date} 
      <button class="delete-btn">Delete</button>`;

        // Append the new expense item to the list
        expenseList.appendChild(expenseItem);

        // Update the total expenses
        totalExpenses += amount;
        totalAmountDisplay.textContent = totalExpenses.toFixed(2);

        // Clear the input fields
        descriptionInput.value = '';
        amountInput.value = '';
        dateInput.value = '';

        // Add delete functionality to the expense item
        const deleteBtn = expenseItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            expenseList.removeChild(expenseItem);
            totalExpenses -= amount;
            totalAmountDisplay.textContent = totalExpenses.toFixed(2);
        });
    } else {
        alert("Please fill out all fields with valid data!");
    }
});
