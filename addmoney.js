document.getElementById("add-btn").addEventListener("click", function (events) {
  events.preventDefault();
  const amount = document.getElementById("amount").value;
  const convertedAmount = parseFloat(amount);

  const pin = document.getElementById("pin").value;
  const changedPin = parseInt(pin);

  const mainBalance = document.getElementById("main-balance").innerText;
  const convertedBalance = parseFloat(mainBalance);

  if (changedPin === 1234) {
    const sum = convertedBalance + convertedAmount;
    document.getElementById("main-balance").innerText = sum;
  } else {
    console.log("Invalid Acoount Number And Pin");
  }
});
