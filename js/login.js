document.getElementById('btn-login').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const emailValue = emailField.value;

    const passField = document.getElementById('pass-field');
    const passValue = passField.value;

    if((emailValue === "monir") && (passValue === "monir")) {
        window.location.href = "money.html";
    }

    else {
        alert("Wrang Email and Password");
    }

})