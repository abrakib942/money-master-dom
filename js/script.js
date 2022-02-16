document.getElementById('calc-btn').addEventListener('click', function() {
    let incomeInput = document.getElementById('income-input').value;
    let foodInput = document.getElementById('food-input').value;
    let rentInput = document.getElementById('rent-input').value;
    let clothsInput = document.getElementById('cloths-input').value;

    
    let totalExpenses = document.getElementById('total-expenses');
    let totalBalance = document.getElementById('total-balance');

    totalExpenses.innerText = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothsInput);

    totalBalance.innerText = parseFloat(incomeInput) - totalExpenses.innerText;
    
})

document.getElementById('save-btn').addEventListener('click', function() {
    let saveInput = document.getElementById('save-input').value;
    let incomeInput = document.getElementById('income-input').value;
    let saveAmount = document.getElementById('save-amount');
    
})