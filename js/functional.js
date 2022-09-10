function getInputFieldById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputFieldValue;
}
function getElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const elementValue = parseFloat(textElement.innerText);
    return elementValue;
}
function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}
const btnDeposit = document.getElementById('btn-deposit');
btnDeposit?.addEventListener('click', function () {
    /* 
        1.get element by id
        2. get the value from the element 
        3. convert string value to a number
    */
    const newDepositAmount = getInputFieldById("deposit-field");
    /* 
        1. get previous deposit total by id
     */
    const previousDepositTotal = getElementValueById('deposit-total');
    // calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    //set deposit total
    setTextElementValueById('deposit-total', newDepositTotal )

    //get previous balance by using the function
    const totalAmountField = getElementValueById('amount-total');
    const currentBalanceTotal = totalAmountField + newDepositAmount;
    setTextElementValueById('amount-total', currentBalanceTotal)
})

const btnWithdraw = document.getElementById('btn-withdraw');
btnWithdraw.addEventListener('click', function(){
    const  newWithdrawAmount = getInputFieldById('withdraw-field');
    const previousWithdrawTotal = getElementValueById('WithDraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('WithDraw-total', newWithdrawTotal )
    
    const previousBalanceTOtal = getElementValueById('amount-total');
    const newBalanceTotal = previousBalanceTOtal - newWithdrawAmount;
    setTextElementValueById('amount-total', newBalanceTotal)
    
})














