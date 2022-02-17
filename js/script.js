document.getElementById('calc-btn').addEventListener('click', function() {

    getBalance()
    
})

function getBalance() {
    let incomeInput = document.getElementById('income-input').value;
    let foodInput = document.getElementById('food-input').value;
    let rentInput = document.getElementById('rent-input').value;
    let clothsInput = document.getElementById('cloths-input').value;

    
    let totalExpenses = document.getElementById('total-expenses');
    let totalBalance = document.getElementById('total-balance');

    totalExpenses.innerText = Number(foodInput) + Number(rentInput) + Number(clothsInput);
    let totalExp = totalExpenses.innerText;

    totalBalance.innerText = Number(incomeInput) - Number(totalExp);

    let incomeError = document.getElementById('income-error');
    let foodError = document.getElementById('food-error');
    let rentError = document.getElementById('rent-error');
    let clothsError = document.getElementById('cloths-error');
    let balanceError = document.getElementById('balance-error');


    /* error handle input */
    if(isNaN(incomeInput) || incomeInput < 0) {
        incomeError.style.display = 'block';

        totalExpenses.innerText = 0;
        totalBalance.innerText = 0;
    }
    if(isNaN(foodInput) || foodInput < 0) {
        foodError.style.display = 'block';

        totalExpenses.innerText = 0;
        totalBalance.innerText = 0;
    }
    if(isNaN(rentInput) || rentInput < 0) {
        rentError.style.display = 'block';

        totalExpenses.innerText = 0;
        totalBalance.innerText = 0;
    }
    if(isNaN(clothsInput) || clothsInput < 0) {
        clothsError.style.display = 'block';

        totalExpenses.innerText = 0;
        totalBalance.innerText = 0;
    }

    /* error handle balance */
    // if(totalExp > incomeInput) {
    //     balanceError.style.display = 'block';
    // }
}


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