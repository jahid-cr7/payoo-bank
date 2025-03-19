document.getElementById("cashout-btn").addEventListener("click", function (events) {
    events.preventDefault();
    const cashOutAmount = document.getElementById("cashout-amount").value;
    const converteAmount = parseFloat(cashOutAmount);
  
    const cashoutPin = document.getElementById("cashout-pin").value;
    const changePin = parseInt(cashoutPin);
  
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedBalance = parseFloat(mainBalance);
  
    if (changePin === 1234) {
      const addition = convertedBalance - converteAmount;
      document.getElementById('main-balance').innerText = addition;
    } else {
      console.log("Invalid Acoount Number And Pin");
    }
  });