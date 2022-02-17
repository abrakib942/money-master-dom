document.getElementById('calc-btn').addEventListener('click', function() {
    let incomeInput = document.getElementById('income-input').value;
    let foodInput = document.getElementById('food-input').value;
    let rentInput = document.getElementById('rent-input').value;
    let clothsInput = document.getElementById('cloths-input').value;

    
    let totalExpenses = document.getElementById('total-expenses');
    let totalBalance = document.getElementById('total-balance');

    totalExpenses.innerText = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothsInput);

    totalBalance.innerText = parseFloat(incomeInput) - parseFloat(totalExpenses.innerText);
    
})

document.getElementById('save-btn').addEventListener('click', function() {
    let saveInput = document.getElementById('save-input').value;
    let incomeInput = document.getElementById('income-input').value;
    let totalBalance = document.getElementById('total-balance');

    let saveAmount = document.getElementById('save-amount');
    let remainAmount = document.getElementById('remain-amount');

    let totalSave = incomeInput * saveInput/100;

    saveAmount.innerText = totalSave;
    remainAmount.innerText = totalBalance.innerText - saveAmount.innerText;

})