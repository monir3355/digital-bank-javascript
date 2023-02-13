function getInputValue(elementId) {
    const depositField = document.getElementById(elementId);
    const depositValue = parseFloat(depositField.value);


    depositField.value = '';
    return depositValue;

}

function getAmountField(elementId) {
    const amountField = document.getElementById(elementId);
    const amountValue = parseFloat(amountField.innerText);
    return amountValue;
}

function setAmountField(elementId, totalAmount) {
    const setField = document.getElementById(elementId);
    return setField.innerText = totalAmount;
}