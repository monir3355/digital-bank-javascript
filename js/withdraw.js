document.getElementById('btn-withdraw').addEventListener('click', function(){
    // Here withdraw calculation
    const withdrawAmount = getInputValue("withdraw-field");

    const previousWithdrawAmount = getAmountField("withdraw-amount-field");

    // Here balance calculation
    const previousTotalBalanceAmount = getAmountField("balance-field");

    if((withdrawAmount <= previousTotalBalanceAmount) && (withdrawAmount > 0)) {
        const totalWithdrawAmount = previousWithdrawAmount + withdrawAmount;

        setAmountField("withdraw-amount-field", totalWithdrawAmount);

        const currentTotalBalance = previousTotalBalanceAmount - withdrawAmount;
        setAmountField("balance-field", currentTotalBalance);
    }

    else {
        alert("You don't have balances");
    }
});