//call
function formValidation() {
    setTimeout(() => {
            console.log("Form validation called");
            formValidationCompleted();
    }, 1000);
}
function formValidationCompleted() {
    console.log("Form validation completed");
}
formValidation();