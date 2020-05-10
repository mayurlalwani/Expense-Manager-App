let totalExpense=0;
let totalIncome=0;

const form = document.getElementById('form');
const inputDate = document.querySelector('input[type="date"]');
const inputDescription = document.querySelector('#description');
const inputAmount = document.querySelector('#inputAmount');
const expenseAmount = document.querySelector("#displayExpenseAmount");
const incomeAmount = document.querySelector("#displayIncomeAmount");
const list = document.getElementById('list');
const balance = document.querySelector("#balance");
let balanceTotal = 0;

let allTransactions = [];
const transaction = {};

function fetchValues(e){
    e.preventDefault();
    const description = inputDescription.value;
    const date = (inputDate.value).toString();
    const amount = parseInt(inputAmount.value,10);
    if(date==="" || description==="" || amount===""){
        alert("Enter Values");
    }
    addExpenseTotal(description, date, amount);
}

function addExpenseTotal(description, date, amount){    
    transaction.date = date;
    transaction.desc = description;
    transaction.amount = amount;
    allTransactions.push(transaction);

    if(amount<0){
        totalExpense+=amount;
        expenseAmount.textContent = totalExpense;
    }

    else{
        totalIncome+=amount;
        incomeAmount.textContent = totalIncome;
    }

    displayData();
}

function displayData(){
    const item = document.createElement('li');
    balanceTotal = totalIncome + totalExpense;
    balance.textContent = balanceTotal;
    const allExpenseHTML = allTransactions.map(exp => {
        return `<li> Date: ${exp.date} Transaction Type: ${exp.desc} Amount: ${exp.amount}</li>`
    });
    item.innerHTML = allExpenseHTML;
    list.appendChild(item);
    inputAmount.value="";
    inputDescription.value="";
    inputDate.value="";
    allTransactions=[];
    return false
}

form.addEventListener("submit", fetchValues);