let totalExpense=0;
let totalIncome=0;
const inputAmount = document.querySelector('#inputAmount');
const form = document.getElementById("form_data");
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
const transaction = {};

function addExpenseTotal(e){
    
    const inputDescription = document.querySelector('#description');
    const description= inputDescription.value;

    const inputDateControl = document.querySelector('input[type="date"]');
    const dateControl = inputDateControl.value;

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
    const item = document.createElement('li');

    bal = totalIncome + totalExpense;
    balance.textContent = bal;

    console.log(allTransactions);

    const allExpenseHTML = allTransactions.map(exp => {
        return `<li> Date: ${exp.date} Transaction Type: ${exp.desc} Amount: ${exp.amount}</li>`
    });

    // expenseTable.innerHTML = allExpenseHTML;
    item.innerHTML = allExpenseHTML;
    list.appendChild(item);
    inputAmount.value="";
    inputDescription.value="";
    inputDateControl.value="";
    allTransactions=[];
    
}


const element = document.querySelector("#btnAddExpense");

element.addEventListener("click", addExpenseTotal, false);

// form.addEventListener('submit', addExpenseTotal);