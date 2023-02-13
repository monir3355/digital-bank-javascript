document.getElementById('btn-deposit').addEventListener('click', function(){
    // Here deposit calculation
    const depositAmount = getInputValue("deposit-field");

    const previousDepositAmount = getAmountField("amount-field");

    const totalDepositAmount = previousDepositAmount + depositAmount;
    
    setAmountField("amount-field", totalDepositAmount);

    // Here balance calculation
    const previousBalanceAmount = getAmountField("balance-field");

    const totalBalanceAmount = previousBalanceAmount + depositAmount;

    setAmountField("balance-field", totalBalanceAmount);

});