let totalExpense=0;
let totalIncome=0;
const inputAmount = document.querySelector('#inputAmount');
const expenseAmount = document.querySelector("#displayExpenseAmount");
const incomeAmount = document.querySelector("#displayIncomeAmount");
const list = document.getElementById('list');
const expenseTable = document.querySelector("#expenseTable");

const balance = document.querySelector("#balance");
let bal = 0;

const localStorageTransactions = JSON.parse(localStorage.getItem('allTransactions'));
let allTransactions = localStorage.getItem('dummy') !== null ? localStorageTransactions : [];



function addExpenseTotal(){

    const transaction = {};

    const description = document.querySelector('#description').value;

    var dateControl = document.querySelector('input[type="date"]').value;

    const amount = inputAmount.value;

    const amt = parseInt(amount,10);

    transaction.date = dateControl;
    transaction.desc = description;
    transaction.amount = amt;
    

    allTransactions.push(transaction);

    if(amount<0){
        totalExpense+=amt;
        expenseAmount.textContent = totalExpense;
    }
    else{
        totalIncome+=amt;
        incomeAmount.textContent = totalIncome;

    }

    bal = totalIncome + totalExpense;
    balance.textContent = bal;

    const allExpenseHTML = allTransactions.map(exp => {
                return `<li>${exp.date} ${exp.desc} ${exp.amount}</li>`
    }).join();

    expenseTable.innerHTML = allExpenseHTML;
    updateLocalStorage();

}

function updateLocalStorage(){
    localStorage.setItem('allTransactions',JSON.stringify(allTransactions));

}


const element = document.querySelector("#btnAddExpense");

element.addEventListener("click", addExpenseTotal, false);


