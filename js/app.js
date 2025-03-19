document
  .getElementById("login-btn")
  .addEventListener("click", function (events) {
    events.preventDefault();
    const accountNumber = document.getElementById("acc-num").value;
    const password = document.getElementById("pin").value;

    const changedpin = parseInt(password);

    if (accountNumber.length === 11) {
      if (changedpin === 1234) {
        window.location.href = "./secondpage.html";
      } else {
        alert("Enter Your Account Number And Password");
      }
    } else {
      console.log("try again");
    }
    changedpin.value = "";
    accountNumber.value = "";
  });
