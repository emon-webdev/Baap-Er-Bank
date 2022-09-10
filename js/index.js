// index.html file
//step 1: add click event handler with the submit button
const submitBtn = document.getElementById('btn-submit');
submitBtn?.addEventListener('click', function () {
    // step 2: get the email address
    //always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //step 3: get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    //Danger: do not verify email password onthe client side
    //step 4: verify email and password
    if (email === 'emon@gmail.com' && password === 'emon1') {
        window.location.href = 'bank.html';
    } else {
        alert('please type valid email and password')
    }
})


//bank.html file
// deposit calculation
// step 1: add event listener to the deposit button
const depositBtn = document.getElementById('btn-deposit');
depositBtn?.addEventListener('click', function () {
    //step 2: get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositField.value);
    // clear the deposit field
    depositField.value = '';
    //step 3: get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = parseFloat(depositTotalElement.innerText);

    // step 4: add number to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    //set he deposit total
    depositTotalElement.innerText = currentDepositTotal;

    //step 5: get ballance current total
    const balanceTotalElement = document.getElementById('amount-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

    //step  6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    //set the balance total
    balanceTotalElement.innerText = currentBalanceTotal

})

//bank.html file
// withdraw calculation
// step 1: add event listener to the withdraw button
const withdrawBtn = document.getElementById('btn-withdraw');
withdrawBtn?.addEventListener('click', function () {
    //step 2: get the withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawField.value);
    //step 7 : clear the WithDraw field
    withdrawField.value = '';
    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number')
        return;
    }
    //step 3: get the current WithDraw total
    const withdrawTotalElement = document.getElementById('WithDraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);

    //step 5: get previous ballance current total
    const balanceTotalElement = document.getElementById('amount-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Not enough money')
        return;
    }

    // step 4: add number to set the total WithDraw
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal

    //step  6: calculate current total balance
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    //set the balance total
    balanceTotalElement.innerText = newBalanceTotal



})



























