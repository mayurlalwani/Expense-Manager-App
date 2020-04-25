let totalExpense=0;
let totalIncome=0;
const inputAmount = document.querySelector('#inputAmount');
const form = document.querySelector("form");
const expenseAmount = document.querySelector("#displayExpenseAmount");
const incomeAmount = document.querySelector("#displayIncomeAmount");
const list = document.getElementById('list');
const expenseTable = document.querySelector("#expenseTable");
const ul = document.querySelector('ul');
const tableData = document.querySelector('tableData');
const tableRow = document.querySelector('tableRow');
const balance = document.querySelector("#balance");
let bal = 0;

let allTransactions = [];

const data = JSON.parse(localStorage.getItem('money'));

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
        return `<li> Date: ${exp.date} Transaction Type: ${exp.desc} Amount: ${exp.amount}</li>`
    }).join();

    expenseTable.innerHTML = allExpenseHTML;


}

const element = document.querySelector("#btnAddExpense");

element.addEventListener("click", addExpenseTotal, false);
