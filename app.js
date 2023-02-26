function checkPass() {
  var password = document.getElementById("pass").value;
  var confirmPassword = document.getElementById("confirm-pass").value;
  var errorMessage = document.querySelector("#error-message");

  if (password !== confirmPassword) {
    errorMessage.innerHTML = "Passwords did not match";
    return false;
  }
}
